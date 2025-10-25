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
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Bright Smiles Start Here
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional dental care in a comfortable, modern environment. Your smile is our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToAppointment}>
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" onClick={() => {
                const element = document.querySelector("#about");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}>
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Modern dental clinic with smiling dentist and patient"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
