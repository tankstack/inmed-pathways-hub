import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, FileText, GraduationCap } from "lucide-react";

const NewsSection = () => {
  const [newsItems, setNewsItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNewsItems();
  }, []);

  const fetchNewsItems = async () => {
    const { data, error } = await supabase
      .from("news_items")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false })
      .limit(3);

    if (!error && data) {
      setNewsItems(data);
    }
    setLoading(false);
  };

  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes("project") || category.toLowerCase().includes("launch")) {
      return <FileText className="w-5 h-5" />;
    }
    if (category.toLowerCase().includes("visit") || category.toLowerCase().includes("field")) {
      return <Calendar className="w-5 h-5" />;
    }
    return <GraduationCap className="w-5 h-5" />;
  };

  if (loading) {
    return (
      <div id="news" className="py-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">Loading news...</p>
        </div>
      </div>
    );
  }

  return (
    <div id="news" className="py-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest News & Updates
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed about our latest projects, community impact stories, and program developments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No news items available at this time.</p>
            </div>
          ) : (
            newsItems.map((item) => (
              <Card key={item.id} className="overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 group">
                {item.image_url && (
                  <img 
                    src={item.image_url} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="text-primary">{getCategoryIcon(item.category)}</div>
                    <span className="text-sm font-medium text-primary">{item.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {new Date(item.created_at).toLocaleDateString()}
                    </span>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>

        {/* Newsletter Archive */}
        <Card className="p-8 mb-12 shadow-medium">
          <h3 className="text-2xl font-bold text-foreground mb-6">Newsletter Archive</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-soft transition-shadow">
                <div>
                  <h4 className="font-semibold text-foreground">Newsletter - Q{i} 2024</h4>
                  <p className="text-sm text-muted-foreground">Latest updates and impact stories</p>
                </div>
                <Button variant="outline" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  View All
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Resource Library */}
        <Card className="p-8 mb-12 shadow-medium">
          <h3 className="text-2xl font-bold text-foreground mb-6">Resource Library</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {['Training Toolkits', 'Curriculum Materials', 'Impact Reports', 'Research Publications'].map((resource, i) => (
              <div key={i} className="flex items-start gap-4 p-4 border border-border rounded-lg hover:shadow-soft transition-shadow">
                <FileText className="w-8 h-8 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-2">{resource}</h4>
                  <p className="text-sm text-muted-foreground mb-3">Educational materials and resources</p>
                  <Button variant="link" size="sm" className="p-0">
                    <GraduationCap className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button variant="secondary" className="group">
              Access Training Portal
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </Card>

        {/* Interactive Calendar & Search */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 shadow-medium">
            <h3 className="text-xl font-bold text-foreground mb-6">Events Calendar</h3>
            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center mb-4">
              <div className="text-center p-8">
                <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground font-semibold">[Interactive Calendar]</p>
                <p className="text-sm text-muted-foreground mt-2">Events & webinars</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-medium">
            <h3 className="text-xl font-bold text-foreground mb-6">Search Resources</h3>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Search articles, resources..." 
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="flex flex-wrap gap-2">
                {['All', 'News', 'Reports', 'Toolkits', 'Events'].map((filter) => (
                  <Button key={filter} variant="outline" size="sm">
                    {filter}
                  </Button>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Total Downloads: 1,234</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;