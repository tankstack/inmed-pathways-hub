-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('supervisor', 'user');

-- Create user roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check user roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Create storage bucket for news media
INSERT INTO storage.buckets (id, name, public)
VALUES ('news-media', 'news-media', true);

-- Storage policies for news media
CREATE POLICY "Anyone can view news media"
ON storage.objects FOR SELECT
USING (bucket_id = 'news-media');

CREATE POLICY "Supervisors can upload news media"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'news-media' 
  AND public.has_role(auth.uid(), 'supervisor')
);

CREATE POLICY "Supervisors can update news media"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'news-media' 
  AND public.has_role(auth.uid(), 'supervisor')
);

CREATE POLICY "Supervisors can delete news media"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'news-media' 
  AND public.has_role(auth.uid(), 'supervisor')
);

-- Create news_items table
CREATE TABLE public.news_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT,
  image_url TEXT,
  published BOOLEAN DEFAULT false,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on news_items
ALTER TABLE public.news_items ENABLE ROW LEVEL SECURITY;

-- RLS policies for news_items
CREATE POLICY "Anyone can view published news"
ON public.news_items FOR SELECT
USING (published = true);

CREATE POLICY "Supervisors can view all news"
ON public.news_items FOR SELECT
USING (public.has_role(auth.uid(), 'supervisor'));

CREATE POLICY "Supervisors can insert news"
ON public.news_items FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'supervisor'));

CREATE POLICY "Supervisors can update news"
ON public.news_items FOR UPDATE
USING (public.has_role(auth.uid(), 'supervisor'));

CREATE POLICY "Supervisors can delete news"
ON public.news_items FOR DELETE
USING (public.has_role(auth.uid(), 'supervisor'));

-- Trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_news_items_updated_at
BEFORE UPDATE ON public.news_items
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- RLS policy for user_roles (users can view their own roles)
CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT
USING (auth.uid() = user_id);