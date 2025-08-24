import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, FileText, GraduationCap } from "lucide-react";

const NewsSection = () => {
  const newsItems = [
    {
      category: "Project Launch",
      title: "New School Garden Initiative Launches in Eastern Cape",
      excerpt: "Partnering with local schools to establish 50 new school gardens, promoting food security and environmental education.",
      date: "March 15, 2024",
      icon: <FileText className="w-5 h-5" />
    },
    {
      category: "Field Visit",
      title: "Minister Visits INMED Aquaponics Project",
      excerpt: "Government officials witness the impact of our innovative aquaponics social enterprise program.",
      date: "March 10, 2024",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      category: "Training",
      title: "Women Entrepreneurs Graduate from Skills Program",
      excerpt: "25 women complete our climate-smart livelihoods training, ready to start their own sustainable businesses.",
      date: "March 5, 2024",
      icon: <GraduationCap className="w-5 h-5" />
    }
  ];

  return (
    <section id="news" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          {newsItems.map((item, index) => (
            <Card key={index} className="overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 group">
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="text-primary">{item.icon}</div>
                  <span className="text-sm font-medium text-primary">{item.category}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
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
    </section>
  );
};

export default NewsSection;