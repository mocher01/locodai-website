
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet";

const About = () => {
  
  const advantages = [
    "Longue expérience dans l'automatisation et la digitalisation",
    "Expertise en technologies low code et intelligence artificielle",
    "Solutions sur mesure adaptées à vos besoins spécifiques",
    "Accompagnement personnalisé tout au long de votre transformation"
  ];

  return (
    <>
      <Helmet>
          <link rel="canonical" href="https://www.locod-ai.com/about" />
      </Helmet>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                    src="/images/team.webp"
                    alt="L'équipe Locod.AI"
                    width="1200"
                    height="800"
                    className="rounded-xl shadow-xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-600 rounded-xl -z-10 opacity-10"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400 rounded-full blur-3xl opacity-20 -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                À propos de <span className="gradient-text">Locod.AI</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nous accompagnons les entreprises dans leur transformation digitale. 
                Notre mission est de simplifier la complexité technologique pour vous permettre de vous 
                concentrer sur votre cœur de métier.
              </p>
              <p className="text-lg text-gray-600 mb-7">
                Chez Locod.AI nous pensons que l'automatisation et l'utilisation de l'IA ne sont plus une option. 
                Ceux qui rateront ce virage ne pourront plus rester compétitifs face à la concurrence et ce quel que soit leur métier.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Nous combinons notre expertise en automatisation, technologies low code et intelligence 
                artificielle pour créer des solutions innovantes qui répondent précisément à vos besoins.
              </p>

              <div className="space-y-3 mb-8">
                {advantages.map((advantage, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{advantage}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
