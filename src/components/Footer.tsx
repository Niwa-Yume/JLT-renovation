import { Phone, Mail, Home } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const linkClass = "text-primary-foreground/60 transition-colors hover:text-primary-foreground";

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container border-t border-primary-foreground/15 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo className="mb-6 h-14 rounded-md bg-white" />
            <p className="max-w-sm leading-relaxed text-primary-foreground/60">
              JLT Rénovation, votre partenaire de confiance pour tous vos travaux
              de peinture et rénovation sur Versoix et Genève.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="eyebrow mb-6 text-primary-foreground/50">Navigation</h4>
            <nav className="space-y-3">
              <a href="#accueil" className={`block ${linkClass}`}>Accueil</a>
              <a href="#services" className={`block ${linkClass}`}>Services</a>
              <a href="#apropos" className={`block ${linkClass}`}>À propos</a>
              <a href="#contact" className={`block ${linkClass}`}>Contact</a>
            </nav>
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow mb-6 text-primary-foreground/50">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+41797206788" className={`flex items-center gap-3 ${linkClass}`}>
                <Phone className="h-4 w-4" />
                079 720 67 88
              </a>
              <a href="mailto:contact@jlt-renovation.ch" className={`flex items-center gap-3 ${linkClass}`}>
                <Mail className="h-4 w-4" />
                contact@jlt-renovation.ch
              </a>
              <p className="flex items-center gap-3 text-primary-foreground/60">
                <Home className="h-4 w-4" />
                Versoix
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container border-t border-primary-foreground/15 py-6">
        <p className="font-mono text-xs text-primary-foreground/40">
          © {currentYear} JLT Rénovation. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
