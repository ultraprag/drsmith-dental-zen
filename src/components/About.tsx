import { Award, Heart, Users } from "lucide-react";
import teamPhoto from "@/assets/mitrovic.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8 max-w-lg animate-fade-slide-left">
            <h2 className="text-5xl font-serif font-extrabold text-foreground leading-tight">
              O Dr. Mitrović Stomatološkoj Ordinaciji
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Sa preko 10 godina iskustva, dr Mitrović i naš posvećen tim predani su pružanju izuzetne stomatološke nege u toplom, prijatnom okruženju.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Verujemo da svako zaslužuje zdrav i lep osmeh. Naša najsavremenija ordinacija kombinuje najnoviju tehnologiju sa nežnim pristupom usmerenim na pacijenta kako bi osigurali vašu udobnost i zadovoljstvo.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-8 pt-6">
              <div className="text-center p-4 rounded-xl bg-secondary/20 shadow-md hover:shadow-xl transition-all duration-500">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <div className="font-semibold text-lg text-foreground">Izvrsnost</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/20 shadow-md hover:shadow-xl transition-all duration-500">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-10 h-10 text-primary" />
                </div>
                <div className="font-semibold text-lg text-foreground">Briga</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/20 shadow-md hover:shadow-xl transition-all duration-500">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <div className="font-semibold text-lg text-foreground">Zajednica</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fade-slide-right">
            <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700 relative">
              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
              <img
                src={teamPhoto}
                alt="Dr. Mitrović"
                className="w-full h-[1050px] md:h-[550px] object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
