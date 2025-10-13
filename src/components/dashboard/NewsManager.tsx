import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { Plus, Trash2, Edit } from "lucide-react";
import { z } from "zod";

const newsSchema = z.object({
  category: z.string().min(1, "Category is required").max(100),
  title: z.string().min(1, "Title is required").max(200),
  excerpt: z.string().min(1, "Excerpt is required").max(500),
  content: z.string().optional(),
});

const NewsManager = () => {
  const [newsItems, setNewsItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    category: "",
    title: "",
    excerpt: "",
    content: "",
    published: false,
  });

  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    fetchNewsItems();
  }, []);

  const fetchNewsItems = async () => {
    const { data, error } = await supabase
      .from("news_items")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to load news items",
        variant: "destructive",
      });
      return;
    }

    setNewsItems(data || []);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = newsSchema.safeParse(formData);
    if (!validation.success) {
      toast({
        title: "Validation Error",
        description: validation.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      let imageUrl = "";

      // Upload image if provided
      if (imageFile) {
        const fileExt = imageFile.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage
          .from("news-media")
          .upload(fileName, imageFile);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from("news-media")
          .getPublicUrl(fileName);

        imageUrl = publicUrl;
      }

      const newsData = {
        ...formData,
        image_url: imageUrl || null,
      };

      if (editingId) {
        const { error } = await supabase
          .from("news_items")
          .update(newsData)
          .eq("id", editingId);

        if (error) throw error;

        toast({
          title: "Success",
          description: "News item updated successfully",
        });
      } else {
        const { error } = await supabase
          .from("news_items")
          .insert([newsData]);

        if (error) throw error;

        toast({
          title: "Success",
          description: "News item created successfully",
        });
      }

      resetForm();
      fetchNewsItems();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item: any) => {
    setEditingId(item.id);
    setFormData({
      category: item.category,
      title: item.title,
      excerpt: item.excerpt,
      content: item.content || "",
      published: item.published,
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this news item?")) return;

    const { error } = await supabase
      .from("news_items")
      .delete()
      .eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete news item",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "News item deleted successfully",
    });
    fetchNewsItems();
  };

  const resetForm = () => {
    setFormData({
      category: "",
      title: "",
      excerpt: "",
      content: "",
      published: false,
    });
    setImageFile(null);
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="w-5 h-5" />
            {editingId ? "Edit News Item" : "Add News Item"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="Project Launch"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image">Image (optional)</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="News title"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                placeholder="Brief summary"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Full Content (optional)</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Full article content"
                rows={6}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="published"
                checked={formData.published}
                onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
              />
              <Label htmlFor="published">Publish immediately</Label>
            </div>

            <div className="flex gap-2">
              <Button type="submit" disabled={loading}>
                {loading ? "Saving..." : editingId ? "Update" : "Create"}
              </Button>
              {editingId && (
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Published News Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {newsItems.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">No news items yet</p>
            ) : (
              newsItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between p-4 border rounded-lg"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-primary">{item.category}</span>
                      {item.published ? (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          Published
                        </span>
                      ) : (
                        <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                          Draft
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                    {item.image_url && (
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="mt-2 h-20 w-auto object-cover rounded"
                      />
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(item)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(item.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsManager;
