import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4 text-gray-800"
        >
          Prêt à transformer votre activité ?
        </motion.h2>
        <p className="text-gray-600 mb-6">
          Contactez notre équipe pour un accompagnement personnalisé.
        </p>
        <Button onClick={() => navigate('/contact')} className="text-white bg-blue-600 hover:bg-blue-700">
          Discutons de votre projet
        </Button>
      </div>
    </section>
  );
};

export default CTA;
