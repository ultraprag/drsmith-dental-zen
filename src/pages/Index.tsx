// src/pages/Index.tsx
import React from "react";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Hours from "@/components/Hours";
import Reviews from "@/components/Reviews";
import Appointment from "@/components/Appointment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PastWork from "@/components/PastWork";

// Import local CSS (make sure index.css is in the same folder)
import "@/index.css";

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Team />
      <Hours />
      <PastWork />
      <Reviews />
      <Appointment />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
