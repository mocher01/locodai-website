import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Gère automatiquement le scroll vers le haut à chaque navigation,
 * y compris les cas où le pathname ne change pas (clic répété).
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Gestion des ancres
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      return;
    }

    // Scroll immédiat (2x pour éviter effet de retour au milieu)
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 100);
  }, [pathname, hash]);

  // Force un scroll même sans changement de route
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (href === window.location.pathname || href === window.location.pathname + window.location.hash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
};

export default ScrollToTop;
