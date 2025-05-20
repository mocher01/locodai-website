import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Hero = () => {
  const navigate = useNavigate();

  const goToForm = () => {
    window.location.href = "/contact#contact-form";
  };

  return (
    <>
    <Helmet>
        <link rel="canonical" href="https://www.locod-ai.com/" />
    </Helmet>
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 hero-pattern relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Gagnez du temps<span className="gradient-text"> avec l'automatisation intelligente</span>.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Optimisez vos performances grâce à la digitalisation et l'automatisation des tâches répétitives. Locod.AI met en œuvre des solutions low-code et d’intelligence artificielle pour moderniser vos workflows et améliorer votre productivité.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">      
              <a href="/services">
                <Button className="gradient-bg text-white px-8 py-6 text-lg">
                  Voir tous nos services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Button onClick={goToForm} variant="outline" className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary/10">
                Nous contacter
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 animate-float">
              <img
                  alt="Automatisation et IA"
                  className="rounded-xl shadow-2xl"
                  src="/images/hero.webp"
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
