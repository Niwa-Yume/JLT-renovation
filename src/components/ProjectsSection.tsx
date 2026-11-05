import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { reveal } from "@/lib/motion";

const projects = [
  {
    image: project1,
    title: "Salon contemporain",
    category: "Peinture intérieure",
    location: "Lausanne"
  },
  {
    image: project2,
    title: "Façade rénovée",
    category: "Peinture extérieure",
    location: "Genève"
  },
  {
    image: project3,
    title: "Salle de bain",
    category: "Rénovation complète",
    location: "Montreux"
  }
];

const ProjectsSection = () => {
  return (
    <section id="realisations" className="bg-secondary py-24 md:py-32">
      <div className="container">
        <motion.div {...reveal} className="mb-14 grid gap-6 md:mb-20 lg:grid-cols-12">
          <span className="eyebrow lg:col-span-3 lg:pt-3">02 — Nos Réalisations</span>
          <h2 className="text-4xl font-semibold leading-[1.05] sm:text-5xl lg:col-span-6">
            Des projets qui <span className="text-muted-foreground">inspirent</span>
          </h2>
          <p className="max-w-sm text-muted-foreground lg:col-span-3 lg:pt-3">
            Découvrez quelques-unes de nos réalisations récentes en Suisse romande.
          </p>
        </motion.div>

        <div className="grid gap-x-6 gap-y-12 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.figure
              key={project.title}
              {...reveal}
              transition={{ ...reveal.transition, delay: index * 0.1 }}
              className={`group ${index === 1 ? "md:mt-16" : ""}`}
            >
              {/* Zoom d'entrée uniquement : l'image reste visible même si l'animation ne se déclenche pas. */}
              <div className="overflow-hidden rounded-lg">
                <motion.div
                  initial={{ scale: 1.12 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </motion.div>
              </div>
              <figcaption className="mt-5 flex items-start justify-between gap-4 border-t border-foreground/15 pt-4">
                <div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {project.location}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
