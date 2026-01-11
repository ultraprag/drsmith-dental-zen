import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dental.jpg";
import { Stethoscope, Award, Shield, Users } from "lucide-react";

const Hero = () => {
  const scrollToAppointment = () => {
    const element = document.querySelector("#appointment");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden font-sans"
    >
      {/* Decorative blurred circles - hidden on mobile for performance */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        <div className="absolute top-10 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-16 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Floating icons - hidden on mobile */}
      <div className="absolute inset-0 -z-10 pointer-events-none hidden md:block">
        <Stethoscope className="absolute top-24 left-24 w-12 h-12 text-primary/25 animate-float-smooth" />
        <Award className="absolute top-1/3 right-20 w-8 h-8 text-accent/30 animate-float-smooth-delay" />
        <Shield className="absolute bottom-32 right-32 w-10 h-10 text-primary/20 animate-float-smooth-long" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6 md:space-y-8 max-w-lg mx-auto md:mx-0 text-center md:text-left animate-fade-slide-left">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold animate-fade-in">
                🏥 Specijalistička Ordinacija za Oralnu Hirurgiju
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-extrabold leading-tight text-foreground tracking-tight animate-fade-slide-left">
              Oralna Hirurgija i Implantologija
            </h1>

            <div className="space-y-2">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary font-semibold animate-fade-in-delay">
                Spec. Oralne Hirurgije Dr Aleksandar Mitrović
              </p>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-delay">
                Stručno rješavanje najsloženijih zahvata iz područja oralne hirurgije i implantologije, uz najmodernije tehnike i bezbolne tretmane.
              </p>
            </div>

            {/* What is Oral Surgery */}
            <div className="bg-secondary/30 rounded-xl p-4 md:p-6 border border-primary/10 animate-fade-in">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">Šta je Oralna Hirurgija?</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                <strong>Oralna hirurgija</strong> je specijalistička grana stomatologije koja se bavi hirurškim zahvatima u usnoj šupljini - od vađenja umnjaka i komplikovanih zuba, do uklanjanja cista i tumora. 
                <strong> Implantologija</strong> podrazumijeva ugradnju titanijumskih implantata kao zamjene za izgubljene zube, pružajući trajno i prirodno rješenje za vaš osmijeh.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-2 md:pt-4 justify-center md:justify-start">
              <Button
                size="lg"
                onClick={scrollToAppointment}
                className="relative shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 bg-primary text-primary-foreground font-sans w-full sm:w-auto"
              >
                Zakažite Konsultaciju
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.querySelector("#services");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:scale-105 transition-transform duration-300 font-sans w-full sm:w-auto"
              >
                Naše Usluge
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 md:gap-10 pt-6 md:pt-8 border-t border-border/50 justify-center md:justify-start">
              <div className="flex items-center gap-3 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center shadow-sm">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-base md:text-lg">500+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Uspješnih Operacija</div>
                </div>
              </div>
              <div className="flex items-center gap-3 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center shadow-sm">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-base md:text-lg">10+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Godina Iskustva</div>
                </div>
              </div>
            </div>

            {/* Quick Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8">
              <div className="flex flex-row sm:flex-col items-center justify-center gap-3 md:gap-4 p-4 md:p-5 bg-secondary/20 rounded-xl shadow-md hover:shadow-xl transition-all duration-500">
                <Stethoscope className="w-8 h-8 md:w-10 md:h-10 text-primary flex-shrink-0" />
                <span className="text-sm md:text-lg font-semibold text-foreground text-center">Vađenje Umnjaka</span>
              </div>
              <div className="flex flex-row sm:flex-col items-center justify-center gap-3 md:gap-4 p-4 md:p-5 bg-secondary/20 rounded-xl shadow-md hover:shadow-xl transition-all duration-500">
                <Shield className="w-8 h-8 md:w-10 md:h-10 text-primary flex-shrink-0" />
                <span className="text-sm md:text-lg font-semibold text-foreground text-center">Ugradnja Implantata</span>
              </div>
              <div className="flex flex-row sm:flex-col items-center justify-center gap-3 md:gap-4 p-4 md:p-5 bg-secondary/20 rounded-xl shadow-md hover:shadow-xl transition-all duration-500">
                <Award className="w-8 h-8 md:w-10 md:h-10 text-primary flex-shrink-0" />
                <span className="text-sm md:text-lg font-semibold text-foreground text-center">Bezbolni Zahvati</span>
              </div>
            </div>
          </div>

          {/* Right Column - Doctor Image */}
          <div className="relative animate-fade-in order-first md:order-last">
            <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl ring-1 ring-primary/10 relative transform hover:scale-105 transition-transform duration-700">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent z-10"></div>
              <img
                src={heroImage}
                alt="Moderna stomatološka ordinacija"
                className="w-full h-[280px] sm:h-[350px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover"
              />
            </div>

            {/* Specialty badge - adjusted for mobile */}
            <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 bg-primary text-primary-foreground p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl animate-bounce-slow">
              <div className="text-2xl md:text-4xl font-bold">200+</div>
              <div className="text-xs md:text-sm">Ugrađenih Implantata</div>
            </div>

            {/* Decorative dots - hidden on mobile */}
            <div className="absolute -top-4 -right-4 w-24 h-24 opacity-20 animate-pulse-slow hidden md:block">
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
