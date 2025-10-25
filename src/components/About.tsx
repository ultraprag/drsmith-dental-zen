import { Award, Heart, Users } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              O Dr. Smith Stomatološkoj Ordinaciji
            </h2>
            <p className="text-lg text-muted-foreground">
              Sa preko 15 godina iskustva, dr Smith i naš posvećen tim predani su pružanju izuzetne stomatološke nege u toplom, prijatnom okruženju.
            </p>
            <p className="text-lg text-muted-foreground">
              Verujemo da svako zaslužuje zdrav i lep osmeh. Naša najsavremenija ordinacija kombinuje najnoviju tehnologiju sa nežnim pristupom usmerenim na pacijenta kako bi osigurali vašu udobnost i zadovoljstvo.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div className="font-semibold">Izvrsnost</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <div className="font-semibold">Briga</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="font-semibold">Zajednica</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={teamPhoto}
                alt="Dr. Smith and dental care team"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
