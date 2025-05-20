
import React from "react";
import { Helmet } from "react-helmet";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";

const HomePage = () => {
  <Helmet>
    <title>Locod.AI | Automatisation IA & Low Code à Lyon, Rhône-Alpes</title>
    <meta name="description" content="Solutions d’automatisation et d’intelligence artificielle sur mesure à Lyon. Experts en low code, no code, BPMN et intégration n8n. Accompagnement en Rhône-Alpes : Grenoble, Saint-Étienne." />
</Helmet>
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
};

export default HomePage;
