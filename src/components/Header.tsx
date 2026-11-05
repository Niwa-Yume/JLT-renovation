import { motion, useScroll, useSpring } from "framer-motion";
import { Phone, Mail, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(navItems[0].href);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  // Section active : celle qui traverse le milieu de l'écran.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    // #realisations n'est pas dans le menu : l'observer pour ne souligner aucun lien quand on y est.
    [...navItems.map((i) => i.href), "#realisations"].forEach((href) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || mobileMenuOpen
          ? "border-border bg-background"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-6 md:h-20">
        <a href="#accueil" className="shrink-0" aria-label="JLT Rénovation — accueil">
          <Logo className="h-11 md:h-14" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "location" : undefined}
              className={cn(
                "relative py-1 text-sm transition-colors hover:text-foreground",
                active === item.href ? "text-foreground" : "text-foreground/60",
              )}
            >
              {item.label}
              {active === item.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="tel:+41797206788"
            className="flex items-center gap-2 font-mono text-sm text-foreground/70 transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4" />
            079 720 67 88
          </a>
          <Button variant="default" size="lg" asChild>
            <a href="#contact" className="group">
              Devis Gratuit
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
        </div>

        <button
          className="-mr-2 p-2 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className={cn(
          "absolute inset-x-0 -bottom-px h-0.5 origin-left bg-accent transition-opacity",
          scrolled ? "opacity-100" : "opacity-0",
        )}
      />

      {mobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="container pb-6 md:hidden"
        >
          <div className="flex flex-col divide-y divide-border border-y border-border">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-4 text-lg font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 font-mono text-sm text-muted-foreground">
            <a href="tel:+41797206788" className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> 079 720 67 88
            </a>
            <a href="mailto:contact@jlt-renovation.ch" className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> contact@jlt-renovation.ch
            </a>
          </div>
          <Button variant="default" size="xl" className="mt-6 w-full" asChild>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Devis Gratuit</a>
          </Button>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
