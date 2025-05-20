import React from "react";

const Privacy = () => {
  return (
    <main className="min-h-screen bg-white text-slate-800 pt-24 px-4 pb-16">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Politique de confidentialité</h1>
        <p>
          Chez Locod.AI, nous attachons une grande importance à la confidentialité et à la sécurité des données...
        </p>
        <h2 className="text-xl font-semibold mt-6">Collecte des données</h2>
        <p>
          Nous collectons uniquement les données nécessaires à la fourniture de nos services. Cela peut inclure : votre nom,
          votre adresse e-mail, votre numéro de téléphone, ainsi que tout message que vous nous envoyez via nos formulaires.
        </p>
        <h2 className="text-xl font-semibold mt-6">Utilisation des données</h2>
        <p>
          Vos données sont utilisées exclusivement pour traiter vos demandes, améliorer notre site, et vous fournir un service personnalisé.
          Elles ne sont en aucun cas partagées, vendues ou transférées à des tiers sans votre consentement explicite.
        </p>
        <h2 className="text-xl font-semibold mt-6">Cookies</h2>
        <p>
          Nous utilisons des cookies pour améliorer l’expérience utilisateur, analyser le trafic et personnaliser le contenu.
          Vous pouvez configurer votre navigateur pour refuser les cookies si vous le souhaitez.
        </p>
        <h2 className="text-xl font-semibold mt-6">Droits des utilisateurs</h2>
        <p>
          Conformément au RGPD, vous avez le droit d'accéder à vos données, de les rectifier, de demander leur suppression,
          ou de vous opposer à leur traitement. Pour exercer vos droits, vous pouvez nous contacter à contact@locod.ai.
        </p>
        <h2 className="text-xl font-semibold mt-6">Modifications</h2>
        <p>
          Cette politique de confidentialité peut être mise à jour. Les modifications seront affichées sur cette page avec une date de révision.
        </p>
        <p className="italic mt-6">Dernière mise à jour : mai 2025</p>
      </div>
    </main>
  );
};

export default Privacy;
