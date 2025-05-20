import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="mb-0">
              <Link to="/" onClick={scrollToTop} className="inline-block">
                <img
                  src="logo-locodaisombre.png"
                  alt="Locod.AI Logo"
                  className="w-[140px] object-contain"
                />
              </Link>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-[275px] mt-1 mb-2">
              Experts en automatisation et digitalisation avec 15 ans d'expérience.
              Solutions low code et IA pour transformer votre entreprise.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/mokhtar-c-93073ba/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lien LinkedIn Locod.AI"
                className="text-slate-400 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/" onClick={scrollToTop} className="text-slate-400 hover:text-primary">Accueil</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="text-slate-400 hover:text-primary">Services</Link></li>
              <li><Link to="/about" onClick={scrollToTop} className="text-slate-400 hover:text-primary">À propos</Link></li>
              <li><Link to="/blog" onClick={scrollToTop} className="text-slate-400 hover:text-primary">Blog</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} className="text-slate-400 hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Nos services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" onClick={scrollToTop} className="text-slate-400 hover:text-primary">Automatisation des processus</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="text-slate-400 hover:text-primary">Solutions Low Code</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="text-slate-400 hover:text-primary">Intégration d'IA</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="text-slate-400 hover:text-primary">Conseil en digitalisation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">Lyon, France</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-slate-400">+33 4 28 29 71 53</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-slate-400">contact(at)locod-ai.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">
              &copy; {currentYear} Locod.AI. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" onClick={scrollToTop} className="text-slate-500 hover:text-primary text-sm">Politique de confidentialité</Link>
              <Link to="/terms" onClick={scrollToTop} className="text-slate-500 hover:text-primary text-sm">Conditions d'utilisation</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
