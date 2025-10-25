import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dental.jpg";

const Hero = () => {
  const scrollToAppointment = () => {
    const element = document.querySelector("#appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                ✨ Vaš Pouzdan Partner za Oralno Zdravlje
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Blistavi Osmesi Počinju Ovde
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Profesionalna stomatološka nega u prijatnom, modernom okruženju. Vaš osmeh je naš prioritet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" onClick={scrollToAppointment} className="shadow-lg hover:shadow-xl transition-shadow">
                Zakažite Termin
              </Button>
              <Button size="lg" variant="outline" onClick={() => {
                const element = document.querySelector("#about");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}>
                Saznajte Više
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-8 pt-6 border-t border-border/50">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">5000+</div>
                  <div className="text-sm text-muted-foreground">Zadovoljnih Pacijenata</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">★</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Prosečna Ocena</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-primary/10">
              <img
                src={heroImage}
                alt="Modern dental clinic with smiling dentist and patient"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm">Godina Iskustva</div>
            </div>
            
            {/* Decorative dots pattern */}
            <div className="absolute -top-4 -right-4 w-24 h-24 opacity-20">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
