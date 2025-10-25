import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Hours from "@/components/Hours";
import Reviews from "@/components/Reviews";
import Appointment from "@/components/Appointment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Hours />
      <Reviews />
      <Appointment />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
