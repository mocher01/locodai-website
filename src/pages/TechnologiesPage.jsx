import React from "react";
import { Helmet } from "react-helmet";

const TechnologiesPage = () => {
  <Helmet>
    <title>Technologies | Locod.AI - IA, BPMN, n8n, No Code à Lyon</title>
    <meta name="description" content="Les technologies que nous utilisons : n8n, BPMN, IA, APIs, low code / no code. Mise en œuvre à Lyon et en région Rhône-Alpes." />
</Helmet>
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">
        Nos technologies d'automatisation en France et en Auvergne-Rhône-Alpes
      </h1>

      <p className="mb-4 text-muted-foreground">
        Locod.AI met en œuvre les meilleures solutions low-code et no-code et IA pour automatiser votre activité
        Nous intervenons à Paris, à Marseille, à Lyon, Grenoble, Saint-Etienne, Clermont-Ferrand et dans toute la région Auvergne-Rhône-Alpes.
        Nous accompagnons les entreprises sur les outils suivants :
      </p>

      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
        <li><strong>Appian</strong> : plateforme BPM pour automatiser les processus complexes à grande échelle.</li>
        <li><strong>n8n</strong> : outil d’orchestration open source pour automatiser les flux de travail personnalisés.</li>
        <li><strong>Camunda</strong> : moteur de workflow BPMN puissant, idéal pour les architectures distribuées.</li>
        <li><strong>Make</strong> (ex-Integromat) : solution visuelle pour automatiser des centaines d’applications.</li>
      </ul>

      <p className="text-muted-foreground">
        Nos experts basés à Lyon interviennent dans toute la région Auvergne-Rhône-Alpes pour analyser vos besoins et mettre en œuvre des solutions d'automatisation robustes, scalables et rentables.
      </p>
    </main>
  );
};

export default TechnologiesPage;
