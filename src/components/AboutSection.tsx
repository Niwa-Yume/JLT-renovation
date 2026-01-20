import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  "Plus de 10 ans d'expérience",
  "Devis gratuit et sans engagement",
  "Travail soigné et ponctuel",
  "Matériaux de qualité supérieure",
  "Respect des délais",
  "Service après-vente garanti"
];

const AboutSection = () => {
  return (
    <section id="apropos" className="py-24 bg-secondary/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              À Propos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Votre partenaire de confiance en rénovation
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Chez JLT Rénovation, nous mettons notre expertise au service de vos projets. 
              Notre équipe de professionnels passionnés s'engage à transformer vos espaces 
              avec créativité et précision.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Basés en Suisse, nous intervenons sur tous types de projets : appartements, 
              maisons, locaux commerciaux. Chaque chantier est unique et mérite une attention particulière.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
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
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <div className="aspect-[4/3] bg-gradient-hero flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl font-display font-bold mb-4">JLT</div>
                  <div className="text-xl font-medium text-white/80">Rénovation</div>
                  <div className="mt-6 w-24 h-1 bg-energy mx-auto rounded-full" />
                </div>
              </div>
            </div>
            
            {/* Decorative card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-8 -left-8 bg-card rounded-xl p-6 shadow-medium border border-border/50"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-energy/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-energy">★</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">5.0</div>
                  <div className="text-sm text-muted-foreground">Note clients</div>
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
