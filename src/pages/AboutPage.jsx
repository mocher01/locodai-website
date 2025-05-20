
import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { CheckCircle, Users, Award, TrendingUp } from "lucide-react";

const AboutPage = () => {
  <Helmet>
    <title>À propos | Locod.AI - Experts en automatisation IA à Lyon</title>
    <meta name="description" content="Locod.AI accompagne les entreprises depuis 15 ans dans l'automatisation intelligente. Experts IA, BPMN, low code & no code à Lyon et en région Rhône-Alpes." />
</Helmet>
  const milestones = [
    {
      year: "2013",
      title: "Démarrage nos activités en low code",
      description: "Premieres livraisons de projets Low code en production chez nos clients"
    },
    {
      year: "2019",
      title: "Création de l'entreprise",
      description: "Création de l'entreprise avec une vision claire : rendre l'automatisation accessible à toutes les entreprises."
    },
    {
      year: "2025",
      title: "Nouvelle génération de solutions - offre globale 360",
      description: "Lancement de notre plateforme unifiée combinant low code, IA et automatisation pour une transformation digitale complète."
    }
  ];

  const values = [
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "Orientation client",
      description: "Nous plaçons les besoins de nos clients au centre de tout ce que nous faisons, en créant des solutions qui répondent précisément à leurs défis."
    },
    {
      icon: <Award className="h-10 w-10 text-blue-600" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque aspect de notre travail, en nous efforçant constamment d'améliorer nos solutions et services."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
      title: "Innovation",
      description: "Nous embrassons l'innovation et restons à la pointe des nouvelles technologies pour offrir des solutions toujours plus performantes."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="page-header hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              À propos de <span className="gradient-text">Locod.AI</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              15 ans d'expertise en automatisation et digitalisation
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Notre histoire</h2>
              <p className="text-lg text-gray-600 mb-6">
                 Locod.AI est née de la vision de simplifier la complexité technologique 
                pour les entreprises de toutes tailles. Notre fondateur, avec plus de 15 ans d'expérience 
                dans le domaine de l'IT, a identifié un besoin crucial : rendre l'automatisation et la 
                digitalisation accessibles sans nécessiter une expertise technique approfondie.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Au fil des années, nous avons évolué d'une société de conseil IT a généraliste vers 
                une spécialisation sur les solutions intégrant les technologies low code et l'intelligence 
                artificielle. Notre vision est guidée par une mission claire : empêcher nos clients de rater
                le virage technologique du low code et de l'IA.

              </p>
              <p className="text-lg text-gray-600">
                Aujourd'hui, avec une équipe d'experts passionnés nous continuons d'innover pour offrir des solutions 
                toujours plus performantes et adaptées aux défis actuels des entreprises.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >

              <img
                  alt="L'equipe Locod.AI"
                  className="rounded-xl shadow-2xl"
                  src="/images/team.webp"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-600 rounded-xl -z-10 opacity-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Nos valeurs</h2>
            <p className="text-lg text-gray-600">
              Les principes qui guident chacune de nos actions et décisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Notre parcours</h2>
            <p className="text-lg text-gray-600">
              Les étapes clés qui ont façonné notre entreprise au fil des ans
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="flex-1"></div>
                  
                  {/* Timeline Point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 z-10 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                  </div>
                  
                  <div className="flex-1">
                    <div className={`bg-white rounded-xl p-6 shadow-lg mx-4 ${
                      index % 2 === 0 ? "text-right" : "text-left"
                    }`}>
                      <span className="text-sm font-semibold text-blue-600">{milestone.year}</span>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl font-bold mb-6">Notre expertise</h2>
              <p className="text-lg text-gray-600 mb-6">
                Avec 15 ans d'expérience dans le domaine, notre équipe possède une expertise approfondie 
                dans les technologies d'automatisation, le développement low code et l'intelligence artificielle.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex flex-col">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Automatisation des processus</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Développement Low Code</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Intelligence Artificielle</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Intégration de systèmes</span>
                    <span>92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-gray-600">
                Notre approche combine expertise technique et compréhension approfondie des enjeux métier, 
                nous permettant de créer des solutions véritablement adaptées aux besoins spécifiques de 
                chaque client.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <img
                  alt="Au charbon"
                  className="rounded-xl shadow-2xl"
                  src="/images/team2.webp"
              />
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-blue-600 rounded-xl -z-10 opacity-10"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
