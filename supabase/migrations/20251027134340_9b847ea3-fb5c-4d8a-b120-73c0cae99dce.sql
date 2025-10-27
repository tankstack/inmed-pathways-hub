-- Create events table
CREATE TABLE public.events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  content TEXT,
  event_date TIMESTAMP WITH TIME ZONE,
  location TEXT,
  image_url TEXT,
  published BOOLEAN DEFAULT false,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create resources table
CREATE TABLE public.resources (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  file_url TEXT NOT NULL,
  file_type TEXT,
  category TEXT,
  published BOOLEAN DEFAULT false,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create donations table for tracking
CREATE TABLE public.donations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  donor_name TEXT,
  donor_email TEXT,
  amount DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'ZAR',
  donation_date TIMESTAMP WITH TIME ZONE DEFAULT now(),
  status TEXT DEFAULT 'completed',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

-- Events RLS policies
CREATE POLICY "Anyone can view published events"
  ON public.events FOR SELECT
  USING (published = true);

CREATE POLICY "Supervisors can view all events"
  ON public.events FOR SELECT
  USING (has_role(auth.uid(), 'supervisor'::app_role));

CREATE POLICY "Supervisors can insert events"
  ON public.events FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'supervisor'::app_role));

CREATE POLICY "Supervisors can update events"
  ON public.events FOR UPDATE
  USING (has_role(auth.uid(), 'supervisor'::app_role));

CREATE POLICY "Supervisors can delete events"
  ON public.events FOR DELETE
  USING (has_role(auth.uid(), 'supervisor'::app_role));

-- Resources RLS policies
CREATE POLICY "Anyone can view published resources"
  ON public.resources FOR SELECT
  USING (published = true);

CREATE POLICY "Supervisors can view all resources"
  ON public.resources FOR SELECT
  USING (has_role(auth.uid(), 'supervisor'::app_role));

CREATE POLICY "Supervisors can insert resources"
  ON public.resources FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'supervisor'::app_role));

CREATE POLICY "Supervisors can update resources"
  ON public.resources FOR UPDATE
  USING (has_role(auth.uid(), 'supervisor'::app_role));

CREATE POLICY "Supervisors can delete resources"
  ON public.resources FOR DELETE
  USING (has_role(auth.uid(), 'supervisor'::app_role));

-- Donations RLS policies
CREATE POLICY "Supervisors can view all donations"
  ON public.donations FOR SELECT
  USING (has_role(auth.uid(), 'supervisor'::app_role));

CREATE POLICY "Supervisors can insert donations"
  ON public.donations FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'supervisor'::app_role));

-- Create storage buckets
INSERT INTO storage.buckets (id, name, public) 
VALUES ('event-media', 'event-media', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public) 
VALUES ('resources', 'resources', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for event-media
CREATE POLICY "Anyone can view event media"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'event-media');

CREATE POLICY "Supervisors can upload event media"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'event-media' AND 
    has_role(auth.uid(), 'supervisor'::app_role)
  );

CREATE POLICY "Supervisors can update event media"
  ON storage.objects FOR UPDATE
  USING (
    bucket_id = 'event-media' AND 
    has_role(auth.uid(), 'supervisor'::app_role)
  );

CREATE POLICY "Supervisors can delete event media"
  ON storage.objects FOR DELETE
  USING (
    bucket_id = 'event-media' AND 
    has_role(auth.uid(), 'supervisor'::app_role)
  );

-- Storage policies for resources
CREATE POLICY "Anyone can view resources"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'resources');

CREATE POLICY "Supervisors can upload resources"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'resources' AND 
    has_role(auth.uid(), 'supervisor'::app_role)
  );

CREATE POLICY "Supervisors can update resources"
  ON storage.objects FOR UPDATE
  USING (
    bucket_id = 'resources' AND 
    has_role(auth.uid(), 'supervisor'::app_role)
  );

CREATE POLICY "Supervisors can delete resources"
  ON storage.objects FOR DELETE
  USING (
    bucket_id = 'resources' AND 
    has_role(auth.uid(), 'supervisor'::app_role)
  );

-- Add update triggers
CREATE TRIGGER update_events_updated_at
  BEFORE UPDATE ON public.events
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_resources_updated_at
  BEFORE UPDATE ON public.resources
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();