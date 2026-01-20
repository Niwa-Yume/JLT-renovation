import { motion } from "framer-motion";
import logoJLT from "@/assets/logo-jlt.jpeg";
import { Phone, Mail, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Accueil", href: "#accueil" },
    { label: "Services", href: "#services" },
    { label: "À propos", href: "#apropos" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
    >
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container flex justify-center md:justify-end gap-6 text-sm">
          <a href="tel:+41000000000" className="flex items-center gap-2 hover:text-energy transition-colors">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">+41 00 000 00 00</span>
          </a>
          <a href="mailto:contact@jlt-renovation.ch" className="flex items-center gap-2 hover:text-energy transition-colors">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">contact@jlt-renovation.ch</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <a href="#accueil" className="flex items-center gap-3">
            <img 
              src={logoJLT} 
              alt="JLT Rénovation" 
              className="h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Devis Gratuit</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden pt-4 pb-2"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <Button variant="hero" size="lg" asChild>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Devis Gratuit</a>
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
