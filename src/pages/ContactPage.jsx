import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useLocation } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const ContactPage = () => {
  const { toast } = useToast();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scroll");
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://automation.locod-ai.fr/webhook/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message envoyé !",
          description: "Nous vous répondrons dans les plus brefs délais.",
          duration: 5000,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        toast({
          title: "Erreur",
          description: "L'envoi du message a échoué. Veuillez réessayer.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erreur réseau",
        description: "Impossible de contacter le serveur.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="pt-24">
      <Helmet>
        <title>Contact | Locod.AI - Demandez un devis automatisation IA à Lyon</title>
        <meta
          name="description"
          content="Contactez nos experts en automatisation, intelligence artificielle, low code, BPMN et n8n. Interventions à Lyon, Grenoble, Saint-Étienne et Rhône-Alpes."
        />
      </Helmet>

      {/* Bloc Contact */}
      <section className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 mt-[-12px]">Prenez contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Calendly */}
            <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col self-start h-full">
              <h3 className="text-xl font-semibold mb-4 text-center">Réservez un créneau</h3>
              <iframe
                src="https://calendly.com/gestion-locod-ai"
                width="100%"
                height="450"
                frameBorder="0"
                scrolling="no"
                style={{ borderRadius: '12px' }}
                title="Calendly Booking"
              ></iframe>
            </div>

            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-xl p-6 self-start h-full"
            >
              <h3 className="text-xl font-semibold mb-4 text-center">Envoyez-nous un message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input name="name" value={formData.name} onChange={handleChange} required placeholder="Votre nom" className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="Votre email" className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Téléphone" className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input name="company" value={formData.company} onChange={handleChange} placeholder="Société" className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Votre message" className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <ReCAPTCHA sitekey="6LcqoDUrAAAAAOYIy9peixl_HJcKsOeQ0JS2B6Qi" onChange={(token) => setCaptchaToken(token)} className="mt-4" />
                <Button type="submit" disabled={isSubmitting} className="px-4 py-4 text-lg flex items-center gap-2">Envoyer <Send className="w-5 h-5" /></Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bloc Coordonnées + Carte */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Nos coordonnées</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Carte alignée */}
            <div className="rounded-xl overflow-hidden shadow-xl h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2785.3695542359036!2d4.8047!3d45.7679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb59f823f1fb%3A0xd160b946a8cb9b1a!2s33%20Rue%20Saint%20Simon%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sfr!2sfr!4v1715360100000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Locod.AI"
              ></iframe>
            </div>

            {/* Coordonnées */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8 flex flex-col justify-center h-full pl-6"
            >
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Adresse</h3>
                  <p className="text-gray-600">
                    33 rue Saint Simon<br />69009 Lyon, France
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">contact(at)locod-ai.com</p>
                  <p className="text-gray-600">support(at)locod-ai.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
                  <p className="text-gray-600">+33 4 28 29 71 53</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
