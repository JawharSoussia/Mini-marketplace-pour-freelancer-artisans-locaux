
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ServiceForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [contact, setContact] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  // Function to pre-fill the form with an example service
  const fillExampleService = () => {
    setTitle("Designer UX/UI Freelance");
    setDescription("Je crée des interfaces utilisateur intuitives et élégantes pour sites web et applications mobiles. Plus de 5 ans d'expérience dans le design d'interfaces utilisateur.");
    setCategory("Design");
    setContact("contact@uxdesigner.com");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const service = {
      id: Date.now().toString(),
      title,
      description,
      category,
      contact,
      createdAt: new Date(),
    };

    const services = JSON.parse(localStorage.getItem("services") || "[]");
    localStorage.setItem("services", JSON.stringify([...services, service]));

    toast({
      title: "Service publié !",
      description: "Votre service a été publié avec succès.",
    });

    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Publier un nouveau service</CardTitle>
        </CardHeader>
        <CardContent>
          <Button 
            variant="secondary" 
            onClick={fillExampleService} 
            className="mb-4 w-full"
          >
            Remplir avec un exemple de service
          </Button>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Titre
              </label>
              <Input
                id="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex: Designer UX/UI Freelance"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="category" className="text-sm font-medium">
                Catégorie
              </label>
              <Input
                id="category"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Ex: Design, Réparation, Cuisine..."
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <Textarea
                id="description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Décrivez votre service..."
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact" className="text-sm font-medium">
                Contact
              </label>
              <Input
                id="contact"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Email ou numéro de téléphone"
              />
            </div>

            <Button type="submit" className="w-full">
              Publier
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
