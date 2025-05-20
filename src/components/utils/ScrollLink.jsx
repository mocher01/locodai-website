import React from "react";
import { Link } from "react-router-dom";

/**
 * Composant ScrollLink pour liens avec défilement vers sections spécifiques
 * À utiliser uniquement quand vous avez besoin de liens qui défilent vers une section 
 * spécifique sur la même page.
 */
const ScrollLink = ({ to, children, className, ...props }) => {
  // Identifie si c'est un lien interne (vers une ancre) ou externe (vers une page)
  const isInternalLink = to.startsWith("#");
  
  const handleClick = (e) => {
    // Si c'est un lien interne vers une ancre
    if (isInternalLink) {
      e.preventDefault();
      const targetElement = document.querySelector(to);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Sinon, si props.onClick existe, l'exécuter
    else if (props.onClick) {
      props.onClick(e);
    }
  };

  // Si c'est un lien vers un ancrage interne
  if (isInternalLink) {
    return (
      <a 
        href={to} 
        className={className} 
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Pour les liens vers d'autres pages, utiliser le composant Link de React Router
  return (
    <Link 
      to={to} 
      className={className} 
      {...props}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;