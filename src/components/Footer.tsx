import logoJLT from "@/assets/logo-jlt.jpeg";
import {Phone, Mail, MapPin, Home} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div>
            <img 
              src={logoJLT} 
              alt="JLT Rénovation" 
              className="h-16 w-auto object-contain mb-6 bg-white rounded-lg p-2"
            />
            <p className="text-white/70 leading-relaxed">
              JLT Rénovation, votre partenaire de confiance pour tous vos travaux 
              de peinture et rénovation sur Versoix et Genève.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Navigation</h4>
            <nav className="space-y-3">
              <a href="#accueil" className="block text-white/70 hover:text-energy transition-colors">Accueil</a>
              <a href="#services" className="block text-white/70 hover:text-energy transition-colors">Services</a>
              <a href="#apropos" className="block text-white/70 hover:text-energy transition-colors">À propos</a>
              <a href="#contact" className="block text-white/70 hover:text-energy transition-colors">Contact</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <a href="tel:+41797206788" className="flex items-center gap-3 text-white/70 hover:text-energy transition-colors">
                <Phone className="w-4 h-4" />
                079 720 67 88
              </a>
              <a href="mailto:contact@jlt-renovation.ch" className="flex items-center gap-3 text-white/70 hover:text-energy transition-colors">
                <Mail className="w-4 h-4" />
                contact@jlt-renovation.ch
              </a>
                <a className="flex items-center gap-3 text-white/70 hover:text-energy transition-colors">
                    <Home className="w-4 h-4"/>
                    Versoix
                </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <p className="text-center text-white/50 text-sm">
            © {currentYear} JLT Rénovation. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
