import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroPainting from "@/assets/hero-painting.jpg";
import CountUp from "./CountUp";
import { useRef } from "react";

const stats = [
  { value: "6+", label: "Années d'expérience" },
  { value: "500+", label: "Chantiers réalisés" },
  { value: "100%", label: "Clients satisfaits" },
  { value: "24h", label: "Délai de réponse" },
];

const titleWords = ["Donnez", "vie", "à", "vos"];

const ease = [0.22, 1, 0.36, 1] as const;

const HeroSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="accueil" className="pt-28 md:pt-36">
      <div className="container">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="eyebrow mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Peinture & Rénovation
            </motion.span>

            <h1
              aria-label="Donnez vie à vos murs"
              className="isolate text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
            >
              {titleWords.map((word, i) => (
                <span key={word} aria-hidden className="mr-[0.22em] inline-block overflow-hidden pb-[0.08em] align-bottom">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.1 + i * 0.07, ease }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
              <span aria-hidden className="relative inline-block whitespace-nowrap">
                <motion.span
                  className="absolute -inset-x-[0.06em] bottom-[0.14em] -z-10 h-[0.42em] origin-left -skew-x-6 rounded-[2px] bg-accent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.75, ease }}
                />
                <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.1 + titleWords.length * 0.07, ease }}
                  >
                    murs
                  </motion.span>
                </span>
              </span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease }}
            className="lg:col-span-5 lg:pb-3"
          >
            <p className="mb-8 max-w-md text-lg leading-relaxed text-muted-foreground">
              Spécialistes en <strong className="font-medium text-foreground">peinture intérieure et extérieure</strong>,
              nous transformons vos espaces avec des finitions impeccables et un savoir-faire artisanal suisse.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact" className="group">
                  Devis gratuit en 24h
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:+41797206788" className="group">
                  <Phone className="transition-transform group-hover:-rotate-12" />
                  Appel direct
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={imageRef}
          initial={{ clipPath: "inset(10% 4% 0% 4% round 8px)", opacity: 0 }}
          animate={{ clipPath: "inset(0% 0% 0% 0% round 8px)", opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease }}
          className="mt-12 overflow-hidden rounded-lg md:mt-16"
        >
          <motion.img
            src={heroPainting}
            alt="Peintre professionnel au travail"
            style={{ y: imageY }}
            className="aspect-[4/3] w-full scale-[1.12] object-cover object-[70%_50%] sm:aspect-[21/9]"
          />
        </motion.div>

        <dl className="grid grid-cols-2 border-b border-border md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * i, ease }}
              className={`flex flex-col-reverse border-border py-8 ${i % 2 ? "border-l pl-6" : "pr-6"} ${
                i > 0 ? "md:border-l md:pl-8" : ""
              } ${i > 1 ? "border-t md:border-t-0" : ""}`}
            >
              <dt className="mt-2 text-sm text-muted-foreground">{stat.label}</dt>
              <dd className="text-4xl font-semibold tracking-tight md:text-5xl">
                <CountUp value={stat.value} />
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default HeroSection;
