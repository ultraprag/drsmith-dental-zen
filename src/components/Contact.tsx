import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a backend
    navigate("/thank-you");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Stupite u Kontakt
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Imate pitanja? Rado ćemo vas čuti.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-5 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Ime</Label>
                  <Input
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Vaše ime"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="vas@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Poruka</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Kako možemo da vam pomognemo?"
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Pošaljite Poruku
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-4 md:space-y-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-4 md:p-6 space-y-4">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm md:text-base">Adresa</h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Svetog Sava <br />
                      Zvornik 75400, Bosna a Hercegovina
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm md:text-base">Telefon</h3>
                    <p className="text-muted-foreground text-sm md:text-base">+381 64 5523 882</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm md:text-base">Email</h3>
                    <p className="text-muted-foreground text-sm md:text-base break-all">ordinacija.drmitrovic@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg h-48 md:h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d872.9694263116986!2d19.104723730767123!3d44.38481890182557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1scs!2scz!4v1761390309794!5m2!1scs!2scz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Smith Dental Care Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
