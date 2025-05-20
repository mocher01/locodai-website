import React from "react";
import { motion } from "framer-motion";
import { Zap, Code, Brain, ArrowRight, Database, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const serviceItems = [
  {
    icon: <Workflow className="h-10 w-10 text-blue-600" />,
    title: "Automatisation des processus",
    description: "Optimisez vos opérations en automatisant les tâches répétitives et les flux de travail complexes.",
    link: "/services"
  },
  {
    icon: <Code className="h-10 w-10 text-blue-600" />,
    title: "Solutions Low Code",
    description: "Développez rapidement des applications sur mesure sans expertise technique approfondie.",
    link: "/services"
  },
  {
    icon: <Brain className="h-10 w-10 text-blue-600" />,
    title: "Intégration d'IA",
    description: "Exploitez la puissance de l'intelligence artificielle pour prendre des décisions basées sur les données.",
    link: "/services"
  }
];

const Services = () => {
  return (
    <>
      <Helmet>
          <link rel="canonical" href="https://www.locod-ai.com/services" />
      </Helmet>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Nos services</h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {serviceItems.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                className="service-card group"
              >
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="mx-auto mb-4 w-20 h-20 object-contain rounded-md"
                  />
                )}
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to={service.link} className="flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                  <span>En savoir plus</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <Link to="/services">
              <Button className="gradient-bg text-white px-8 py-6 text-lg">
                Voir tous nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;