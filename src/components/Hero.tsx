import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dental.jpg";
import { Smile, ShieldCheck, HeartPulse } from "lucide-react";

const Hero = () => {
  const scrollToAppointment = () => {
    const element = document.querySelector("#appointment");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden font-sans"
    >
      {/* Decorative blurred circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-16 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Floating dental icons */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Smile className="absolute top-24 left-24 w-12 h-12 text-primary/25 animate-float-smooth" />
        <ShieldCheck className="absolute top-1/3 right-20 w-8 h-8 text-accent/30 animate-float-smooth-delay" />
        <HeartPulse className="absolute bottom-32 right-32 w-10 h-10 text-primary/20 animate-float-smooth-long" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8 max-w-lg animate-fade-slide-left">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold animate-fade-in">
                ✨ Vaš Pouzdan Partner za Oralno Zdravlje
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-serif font-extrabold leading-tight text-foreground tracking-tight animate-fade-slide-left">
              Blistavi Osmesi Počinju Ovde
            </h1>

            <p className="text-2xl text-muted-foreground leading-relaxed animate-fade-in-delay">
              Profesionalna stomatološka nega u prijatnom, modernom okruženju. Vaš osmeh je naš prioritet.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Button
                size="lg"
                onClick={scrollToAppointment}
                className="relative shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 bg-primary text-primary-foreground font-sans"
              >
                Zakažite Termin
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.querySelector("#about");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:scale-105 transition-transform duration-300 font-sans"
              >
                Saznajte Više
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-10 pt-8 border-t border-border/50">
              <div className="flex items-center gap-3 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shadow-sm">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-lg">1000+</div>
                  <div className="text-sm text-muted-foreground">Zadovoljnih Pacijenata</div>
                </div>
              </div>
              <div className="flex items-center gap-3 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shadow-sm">
                  <span className="text-primary font-bold">★</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-lg">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Prosečna Ocena</div>
                </div>
              </div>
            </div>

            {/* Quick Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-5 bg-secondary/20 rounded-xl shadow-md hover:shadow-xl transition-all duration-500">
                <HeartPulse className="w-10 h-10 text-primary" />
                <span className="text-xl font-semibold text-foreground">Bezbolni Tretmani</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-5 bg-secondary/20 rounded-xl shadow-md hover:shadow-xl transition-all duration-500">
                <Smile className="w-10 h-10 text-primary" />
                <span className="text-xl font-semibold text-foreground">Estetska Stomatologija</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-5 bg-secondary/20 rounded-xl shadow-md hover:shadow-xl transition-all duration-500">
                <ShieldCheck className="w-10 h-10 text-primary" />
                <span className="text-xl font-semibold text-foreground">Digitalna Dijagnostika</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-fade-in">
            <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-primary/10 relative transform hover:scale-105 transition-transform duration-700">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
              <img
                src={heroImage}
                alt="Modern dental clinic with smiling dentist and patient"
                className="w-full h-[600px] md:h-[700px] object-cover rounded-3xl"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl animate-bounce-slow">
              <div className="text-4xl font-bold">10+</div>
              <div className="text-sm">Godina Iskustva</div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -top-4 -right-4 w-24 h-24 opacity-20 animate-pulse-slow">
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
