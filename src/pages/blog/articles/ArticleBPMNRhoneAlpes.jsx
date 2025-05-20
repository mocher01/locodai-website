import React from "react";
import { Helmet } from "react-helmet";

const ArticleBPMNRhoneAlpes = () => (
  <div className="article-container">
    <Helmet>
      <title>Structurer ses processus en utilisant la norme BPMN</title>
      <meta name="description" content="BPMN permet aux entreprises de modéliser clairement leurs processus métiers afin de mieux les comprendre, les optimiser et les automatiser." />
    </Helmet>

    <h1 className="article-title text-4xl font-bold mb-6 text-primary">Structurer ses processus avec BPMN</h1>

    <p className="mb-6 text-lg leading-relaxed">
      BPMN (Business Process Model and Notation) est une norme internationale permettant de représenter graphiquement les processus métiers.
      Adoptée par de nombreuses entreprises à Lyon, Grenoble et Saint-Étienne, cette méthode favorise une vision claire et partagée des opérations internes.
    </p>

    <h2 className="text-2xl font-semibold mt-10 mb-4">🎯 À quoi sert le BPMN ?</h2>
    <p className="mb-4">L'objectif de BPMN est de documenter et d’analyser les tâches, décisions et interactions dans un processus métier, afin de :</p>
    <ul className="list-disc list-inside space-y-2">
      <li>Clarifier le fonctionnement entre départements</li>
      <li>Détecter les points de friction ou doublons</li>
      <li>Préparer une automatisation avec n8n, Camunda, ou d'autres outils</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-10 mb-4">🧩 Exemple simplifié de processus d’onboarding</h2>
    <p className="mb-4">Voici un diagramme BPMN d’un processus d’arrivée d’un nouvel employé (illustration simplifiée) :</p>
    <img src="/bpmn-onboarding-example.png" alt="Exemple BPMN - Processus d'onboarding" className="my-6 rounded shadow-md" />

    <h2 className="text-2xl font-semibold mt-10 mb-4">🛠️ Comment démarrer ?</h2>
    <p className="mb-4">La création d’un schéma BPMN commence souvent par une interview des collaborateurs terrain, puis la modélisation est faite avec un outil graphique (comme Camunda Modeler).</p>

    <p className="mt-10">
      👉 Vous avez un projet de cartographie ou digitalisation de vos processus ? <a href="/contact" className="text-blue-600 underline">Contactez nos experts</a>.
    </p>
  </div>
);

export default ArticleBPMNRhoneAlpes;

export const meta = {
  title: "Structurer ses processus en utilisant la norme BPMN",
  date: "2024-06-10",
  excerpt: "Utilisez BPMN pour modéliser, clarifier et automatiser vos processus d’entreprise."
};
