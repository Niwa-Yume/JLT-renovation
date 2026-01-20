import { motion } from "framer-motion";
import { CheckCircle, Award, Shield, Clock } from "lucide-react";
import logoJLT from "@/assets/logo-jlt.jpeg";

const features = [
  { icon: Award, text: "Artisans qualifiés et certifiés" },
  { icon: Shield, text: "Garantie décennale incluse" },
  { icon: Clock, text: "Respect strict des délais" },
  { icon: CheckCircle, text: "Devis détaillé gratuit" },
];

const whyUs = [
  "Peintures écologiques et durables",
  "Protection complète de votre mobilier",
  "Nettoyage du chantier inclus",
  "Service après-vente réactif",
  "Conseils personnalisés en décoration",
  "Tarifs transparents sans surprise"
];

const AboutSection = () => {
  return (
    <section id="apropos" className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Pourquoi JLT Rénovation ?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              L'expertise d'un <span className="text-primary">artisan local</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Depuis plus de 10 ans, JLT Rénovation accompagne les particuliers et professionnels 
              en Suisse romande. Notre passion pour le métier de peintre se reflète dans chaque 
              coup de pinceau.
            </p>

            {/* Feature cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="space-y-3">
              {whyUs.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-energy flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main card with logo */}
            <div className="relative rounded-3xl overflow-hidden shadow-strong bg-gradient-to-br from-primary to-primary/80 p-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-energy/10 rounded-full blur-3xl" />
              
              <div className="relative text-center">
                <img 
                  src={logoJLT} 
                  alt="JLT Rénovation" 
                  className="w-48 h-auto mx-auto mb-8 rounded-2xl shadow-lg bg-white p-4"
                />
                <div className="text-white">
                  <p className="text-lg opacity-90 mb-6">
                    "Notre engagement : des travaux de qualité, 
                    dans les délais et au juste prix."
                  </p>
                  <div className="flex items-center justify-center gap-1 text-energy">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm opacity-70 mt-2">Note moyenne de nos clients</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-medium border border-border/50"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-energy/20 flex items-center justify-center">
                  <span className="text-3xl">🇨🇭</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground">Suisse Romande</div>
                  <div className="text-sm text-muted-foreground">Genève • Lausanne • Vaud</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
