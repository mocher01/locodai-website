import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logoUrl = "/logo-locodai.png";

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "À propos", path: "/about" },
  ];

  return (
    <header
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-slate-900/90"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex flex-col items-start leading-tight">
            <Link to="/" className="flex items-center">
              <img
                src={logoUrl}
                alt="Locod.AI Logo"
                className="h-[48px] sm:h-[56px] w-auto"
              />
            </Link>
              <span className="text-sm sm:text-[13px] font-medium text-slate-700 dark:text-slate-300 tracking-tight -mt-1 pl-[10px]">
              Automatisez! Vite. Bien. Sans coder.
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="gradient-bg text-primary-foreground">
                Discutons de votre projet
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-slate-900 shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="gradient-bg text-primary-foreground w-full">
                  Discutons de votre projet
                </Button>
              </Link>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
