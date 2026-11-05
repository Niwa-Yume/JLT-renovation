import { motion } from "framer-motion";
import { Paintbrush, Home, Palette, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { reveal } from "@/lib/motion";

const services = [
  {
    icon: Paintbrush,
    title: "Peinture Intérieure",
    description: "Murs, plafonds, boiseries. Finitions soignées avec des peintures écologiques de haute qualité.",
    features: ["Peinture murale", "Laquage", "Effets décoratifs"]
  },
  {
    icon: Home,
    title: "Peinture Extérieure",
    description: "Façades, volets, balcons. Protection durable contre les intempéries suisses.",
    features: ["Ravalement façade", "Traitement bois", "Étanchéité"]
  },
  {
    icon: Palette,
    title: "Décoration & Conseil",
    description: "Harmonies de couleurs personnalisées pour créer l'ambiance parfaite chez vous.",
    features: ["Conseil couleurs", "Papier peint", "Stucco"]
  },
  {
    icon: Sparkles,
    title: "Rénovation Complète",
    description: "Plâtrerie, enduits, préparation des surfaces. Un résultat impeccable garanti.",
    features: ["Plâtre & enduits", "Réparation fissures", "Lissage"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container">
        <motion.div {...reveal} className="mb-14 grid gap-6 md:mb-20 lg:grid-cols-12">
          <span className="eyebrow lg:col-span-3 lg:pt-3">01 — Nos Prestations</span>
          <h2 className="text-4xl font-semibold leading-[1.05] sm:text-5xl lg:col-span-6">
            Experts en peinture <span className="text-muted-foreground">depuis 2019</span>
          </h2>
          <p className="max-w-sm text-muted-foreground lg:col-span-3 lg:pt-3">
            Du conseil couleur à la réalisation finale, nous prenons en charge l'intégralité de vos travaux de peinture.
          </p>
        </motion.div>

        <div className="grid border-t border-border md:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              {...reveal}
              transition={{ ...reveal.transition, delay: index * 0.08 }}
              className={`group relative border-b border-border py-10 md:px-10 md:py-12 ${
                index % 2 ? "md:border-l" : "md:pl-0"
              }`}
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                <service.icon className="h-6 w-6 text-foreground/40 transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110 group-hover:text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-2xl font-semibold transition-transform duration-500 group-hover:translate-x-1">{service.title}</h3>
              <p className="mb-6 max-w-md leading-relaxed text-muted-foreground">{service.description}</p>
              <ul className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-full border border-border px-3 py-1 text-xs text-foreground/80"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <span
                aria-hidden
                className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out group-hover:scale-x-100"
              />
            </motion.article>
          ))}
        </div>

        <motion.div {...reveal} className="mt-12">
          <Button variant="outline" size="xl" asChild>
            <a href="#contact" className="group">
              Discutons de votre projet
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
