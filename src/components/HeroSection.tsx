import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Phone, Paintbrush } from "lucide-react";
import heroPainting from "@/assets/hero-painting.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroPainting} 
          alt="Peintre professionnel au travail" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>
      
      {/* Decorative paint brush strokes */}
      <div className="absolute top-1/4 right-0 w-96 h-96 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path 
            d="M20,100 Q60,20 100,100 T180,100" 
            stroke="hsl(var(--accent))" 
            strokeWidth="8" 
            fill="none"
            strokeLinecap="round"
          />
          <path 
            d="M20,140 Q60,60 100,140 T180,140" 
            stroke="hsl(var(--energy))" 
            strokeWidth="6" 
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="container relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-xl bg-energy flex items-center justify-center">
                <Paintbrush className="w-6 h-6 text-energy-foreground" />
              </div>
              <span className="text-lg font-medium text-white/90">
                Peinture & Rénovation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6"
            >
              Donnez vie à vos{" "}
              <span className="relative">
                <span className="text-energy">murs</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8 T200,8" stroke="hsl(var(--accent))" strokeWidth="4" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/80 mb-10 max-w-xl leading-relaxed"
            >
              Spécialistes en <strong className="text-white">peinture intérieure et extérieure</strong>, 
              nous transformons vos espaces avec des finitions impeccables et un savoir-faire artisanal suisse.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#contact" className="group">
                  Devis gratuit en 24h
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:+41000000000">
                  <Phone className="w-5 h-5" />
                  Appel direct
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            <div className="glass-effect rounded-2xl p-6 text-white">
              <div className="text-4xl font-display font-bold text-energy mb-2">10+</div>
              <div className="text-white/70">Années d'expérience</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 text-white mt-8">
              <div className="text-4xl font-display font-bold text-accent mb-2">500+</div>
              <div className="text-white/70">Chantiers réalisés</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 text-white">
              <div className="text-4xl font-display font-bold text-white mb-2">100%</div>
              <div className="text-white/70">Clients satisfaits</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 text-white mt-8">
              <div className="text-4xl font-display font-bold text-energy mb-2">24h</div>
              <div className="text-white/70">Délai de réponse</div>
            </div>
          </motion.div>
        </div>

        {/* Mobile stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 lg:hidden flex flex-wrap gap-6 text-white"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-xl font-bold text-energy">10+</span>
            </div>
            <span className="text-sm text-white/70">Années<br/>d'expérience</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-xl font-bold text-accent">500+</span>
            </div>
            <span className="text-sm text-white/70">Chantiers<br/>réalisés</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
