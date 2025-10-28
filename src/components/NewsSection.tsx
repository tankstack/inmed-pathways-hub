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

        {/* Resources Section */}
        <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Resources & Training</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Access our online training modules, curriculum materials, and educational resources 
            to support your community development initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="group">
              Online Training Portal
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline">
              Download Resources
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;