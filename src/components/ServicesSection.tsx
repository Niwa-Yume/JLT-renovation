import { motion } from "framer-motion";
import { Paintbrush, Home, Palette, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Paintbrush,
    title: "Peinture Intérieure",
    description: "Murs, plafonds, boiseries. Finitions soignées avec des peintures écologiques de haute qualité.",
    color: "accent",
    features: ["Peinture murale", "Laquage", "Effets décoratifs"]
  },
  {
    icon: Home,
    title: "Peinture Extérieure",
    description: "Façades, volets, balcons. Protection durable contre les intempéries suisses.",
    color: "primary",
    features: ["Ravalement façade", "Traitement bois", "Étanchéité"]
  },
  {
    icon: Palette,
    title: "Décoration & Conseil",
    description: "Harmonies de couleurs personnalisées pour créer l'ambiance parfaite chez vous.",
    color: "energy",
    features: ["Conseil couleurs", "Papier peint", "Stucco"]
  },
  {
    icon: Sparkles,
    title: "Rénovation Complète",
    description: "Plâtrerie, enduits, préparation des surfaces. Un résultat impeccable garanti.",
    color: "accent",
    features: ["Plâtre & enduits", "Réparation fissures", "Lissage"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Paintbrush className="w-4 h-4" />
            Nos Prestations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Experts en peinture <span className="text-accent">depuis 2014</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Du conseil couleur à la réalisation finale, nous prenons en charge l'intégralité de vos travaux de peinture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border/50 overflow-hidden"
            >
              {/* Color accent bar */}
              <div className={`absolute top-0 left-0 w-1 h-full transition-all duration-300 group-hover:w-2 ${
                service.color === 'accent' ? 'bg-accent' :
                service.color === 'energy' ? 'bg-energy' :
                'bg-primary'
              }`} />
              
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                  service.color === 'accent' ? 'bg-accent/10 text-accent' :
                  service.color === 'energy' ? 'bg-energy/10 text-energy' :
                  'bg-primary/10 text-primary'
                }`}>
                  <service.icon className="w-8 h-8" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span 
                        key={feature}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="#contact" className="group">
              Discutons de votre projet
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
