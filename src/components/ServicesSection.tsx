import { motion } from "framer-motion";
import { Paintbrush, Home, Palette, Sparkles } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Peinture",
    description: "Peinture intérieure et extérieure avec des finitions impeccables et des produits de qualité supérieure.",
    color: "accent"
  },
  {
    icon: Home,
    title: "Rénovation",
    description: "Rénovation complète de vos espaces : sols, murs, plafonds. Nous donnons vie à vos projets.",
    color: "primary"
  },
  {
    icon: Palette,
    title: "Décoration",
    description: "Conseils personnalisés en décoration pour créer des ambiances uniques et harmonieuses.",
    color: "energy"
  },
  {
    icon: Sparkles,
    title: "Finitions",
    description: "Travaux de finition soignés : plâtrerie, enduits, pose de papier peint et revêtements.",
    color: "accent"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Nos Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Des solutions pour tous vos projets
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une équipe de professionnels qualifiés à votre service pour transformer vos espaces.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                service.color === 'accent' ? 'bg-accent/10 text-accent' :
                service.color === 'energy' ? 'bg-energy/10 text-energy' :
                'bg-primary/10 text-primary'
              }`}>
                <service.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                service.color === 'accent' ? 'bg-gradient-accent' :
                service.color === 'energy' ? 'bg-gradient-energy' :
                'bg-gradient-hero'
              }`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
