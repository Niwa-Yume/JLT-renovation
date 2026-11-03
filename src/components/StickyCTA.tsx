import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

// Barre d'action mobile : visible hors du hero, du formulaire et du footer (où les CTA sont déjà à l'écran).
const StickyCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const visible = new Map<Element, boolean>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => visible.set(e.target, e.isIntersecting));
      setShow(![...visible.values()].some(Boolean));
    }, { rootMargin: "-25% 0px -25% 0px" });
    ["#accueil", "#contact", "footer"].forEach((sel) => {
      const el = document.querySelector(sel);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden"
        >
          <div className="flex gap-3">
            <Button variant="heroOutline" size="lg" className="h-12 flex-1" asChild>
              <a href="tel:+41797206788">
                <Phone />
                Appeler
              </a>
            </Button>
            <Button variant="hero" size="lg" className="h-12 flex-[1.4]" asChild>
              <a href="#contact">
                Devis gratuit
                <ArrowRight />
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
