import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Workflow,
  Code,
  Brain,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "automation",
    icon: <Workflow className="h-16 w-16 text-blue-600" />,
    title: "Automatisation des processus",
    description: "Optimisez vos opérations en automatisant les tâches répétitives et les flux de travail complexes.",
    benefits: [
      "Réduction des erreurs humaines",
      "Gain de temps significatif",
      "Standardisation des processus",
      "Meilleure allocation des ressources",
      "Traçabilité et reporting améliorés"
    ],
    image: "automatisation_process"
  },
  {
    id: "lowcode",
    icon: <Code className="h-16 w-16 text-blue-600" />,
    title: "Solutions Low Code",
    description: "Développez rapidement des applications sur mesure sans expertise technique approfondie.",
    benefits: [
      "Développement 10x plus rapide",
      "Coûts réduits",
      "Facilité de maintenance",
      "Adaptabilité aux changements",
      "Accessibilité pour les non-développeurs"
    ],
    image: "low_code"
  },
  {
    id: "ai",
    icon: <Brain className="h-16 w-16 text-blue-600" />,
    title: "Intégration d'IA",
    description: "Exploitez la puissance de l'intelligence artificielle pour prendre des décisions basées sur les données.",
    benefits: [
      "Prédictions et insights avancés",
      "Automatisation intelligente",
      "Personnalisation client améliorée",
      "Détection d'anomalies",
      "Optimisation des processus décisionnels"
    ],
    image: "agent_ai"
  }
];

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <Helmet>
        <title>Services Locod.AI | Automatisation, IA, Low Code, n8n</title>
        <meta name="description" content="Découvrez nos services : automatisation des processus, intelligence artificielle, intégration n8n, solutions low code et no code à Lyon et Rhône-Alpes." />
      </Helmet>

      {/* Hero Section */}
      <section className="page-header hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-6"
            >
              Nos services d'excellence
            </motion.h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Découvrez comment nous pouvons vous accompagner dans votre transformation numérique.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 md:py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`order-2 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"} `}
              >
                <div className="relative">
                  <img
                    alt={service.title}
                    className="rounded-xl shadow-xl w-full h-full object-cover"
                    style={{ verticalAlign: "middle" }}
                    src={
                      service.id === "automation"
                        ? "/images/automatisation_process.webp"
                        : service.id === "lowcode"
                        ? "/images/low_code.webp"
                        : "/images/agent_ai.webp"
                    }
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="order-1"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 space-y-2">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-1 text-blue-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button variant="outline" className="flex items-center space-x-2">
                    <span>En savoir plus</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
