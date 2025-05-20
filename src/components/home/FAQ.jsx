
import React from "react";
import { motion } from "framer-motion";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Qu'est-ce que le low code et comment peut-il bénéficier à mon entreprise ?",
    answer: "Le low code est une approche de développement qui permet de créer des applications avec un minimum de codage manuel. Il utilise des interfaces visuelles et des composants préfabriqués pour accélérer le développement. Pour votre entreprise, cela signifie des solutions sur mesure déployées plus rapidement, des coûts réduits et une plus grande agilité pour s'adapter aux changements du marché."
  },
  {
    question: "Comment l'automatisation peut-elle améliorer l'efficacité de mes processus métier ?",
    answer: "L'automatisation permet d'éliminer les tâches manuelles répétitives, réduisant ainsi les erreurs humaines et libérant du temps pour des activités à plus forte valeur ajoutée. Nos solutions d'automatisation peuvent optimiser vos flux de travail, standardiser vos processus et améliorer la collaboration entre les équipes, ce qui se traduit par une productivité accrue et des économies significatives."
  },
  {
    question: "Quelle est la durée moyenne d'un projet d'implémentation avec Locod.AI ?",
    answer: "La durée d'un projet varie en fonction de sa complexité et de son envergure. Grâce à notre approche low code et à notre méthodologie agile, nous pouvons livrer des solutions fonctionnelles en quelques semaines pour des projets simples, et en quelques mois pour des transformations plus importantes. Nous travaillons par itérations pour vous permettre de voir des résultats rapidement."
  },
  {
    question: "Comment intégrez-vous l'intelligence artificielle dans vos solutions ?",
    answer: "Nous intégrons l'IA de différentes manières selon vos besoins : analyse prédictive pour anticiper les tendances, traitement du langage naturel pour l'automatisation des communications, vision par ordinateur pour l'analyse d'images, ou encore systèmes de recommandation pour personnaliser l'expérience client. Notre approche consiste à rendre l'IA accessible et utile pour votre entreprise, sans nécessiter d'expertise technique interne."
  },
  {
    question: "Proposez-vous un accompagnement après la mise en place des solutions ?",
    answer: "Absolument. Nous considérons nos clients comme des partenaires à long terme. Après le déploiement, nous offrons un support technique, des formations pour vos équipes, une maintenance régulière et des mises à jour pour faire évoluer vos solutions en fonction de vos besoins. Notre objectif est de vous assurer un retour sur investissement durable."
  }
];

const FAQ = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions <span className="gradient-text">fréquentes</span>
          </h2>
          <p className="text-lg text-gray-600">
            Trouvez des réponses aux questions les plus courantes sur nos services et notre approche
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Vous avez d'autres questions ? <a href="/contact" className="text-blue-600 font-medium hover:underline">Contactez-nous</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
