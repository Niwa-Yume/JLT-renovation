import { motion } from "framer-motion";
import { CheckCircle, Award, Shield, Clock, Check, Star } from "lucide-react";
import Logo from "./Logo";
import { reveal } from "@/lib/motion";

const features = [
  { icon: Award, text: "Artisans qualifiés et diplômé" },
  { icon: Shield, text: "Garantie 5 ans incluse" },
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

type GoogleReview = {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
};

const googleBusinessProfile = {
  name: "JLT Renovation L.Tshiama",
  address: "Rte des Fayards 272, 1290 Versoix, Suisse",
  rating: "5,0",
  totalReviews: "6 avis",
  filters: ["Tout", "chantier2", "travail2"],
  sortOptions: [
    "Avis les plus pertinents",
    "Les plus recents",
    "Avis les plus favorables",
    "Avis les moins favorables",
  ],
};

const googleReviews: GoogleReview[] = [
  {
    author: "Niwa",
    rating: 5,
    relativeTime: "il y a 3 semaines - Nouveau",
    text: "J'ai fait appel a l'entreprise JLT Renovation pour des travaux de peinture et de renovation interieure, et le resultat est impeccable. Ponctuel et de tres bon conseil ! Les finitions sont soignees et le chantier a ete rendu parfaitement propre. C'est rare de trouver un artisan aussi meticuleux a Versoix. Je recommande vivement !",
  },
  {
    author: "benedict Lusakumunu",
    rating: 5,
    relativeTime: "il y a un mois",
    text: "Je recommande vivement cette entreprise ! Le professionnalisme de l'equipe est remarquable, du premier contact jusqu'a la fin des travaux. Le travail realise est de grande qualite, avec des finitions... Plus",
  },
  {
    author: "Bryan Jusic",
    rating: 5,
    relativeTime: "il y a un mois",
    text: "J'ai contacte JLT RENOVATION pour refaire mon appartement haussmannien et j'ai ete surpris du professionnalisme et de la qualite de travail qui a ete effectue. Je recommande !",
  },
  {
    author: "Nassim Bounamcha",
    rating: 5,
    relativeTime: "il y a 3 semaines - Nouveau",
    text: "",
  },
  {
    author: "Carlos Afonso",
    rating: 5,
    relativeTime: "il y a un mois",
    text: "",
  },
  {
    author: "Blessed Lskmn",
    rating: 5,
    relativeTime: "il y a un mois",
    text: "",
  },
];

const AboutSection = () => {
  return (
    <section id="apropos" className="py-24 md:py-32">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <motion.div {...reveal} className="lg:col-span-6">
            <span className="eyebrow mb-6">03 — Pourquoi JLT Rénovation ?</span>
            <h2 className="mb-6 text-4xl font-semibold leading-[1.05] sm:text-5xl">
              L'expertise d'un <span className="text-muted-foreground">artisan local</span>
            </h2>
            <p className="mb-12 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Depuis plus de 6 ans, JLT Rénovation accompagne les particuliers et professionnels
              en Suisse romande. Notre passion pour le métier de peintre se reflète dans chaque
              coup de pinceau.
            </p>

            <div className="mb-12 grid grid-cols-2 border-t border-border">
              {features.map((feature, index) => (
                <div
                  key={feature.text}
                  className={`border-b border-border py-6 ${index % 2 ? "border-l pl-6" : "pr-6"}`}
                >
                  <feature.icon className="mb-4 h-5 w-5 text-accent" strokeWidth={1.75} />
                  <span className="text-sm font-medium leading-snug">{feature.text}</span>
                </div>
              ))}
            </div>

            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {whyUs.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-12 flex items-center gap-3 font-mono text-sm uppercase tracking-wider">
              <span className="text-lg" aria-hidden>🇨🇭</span>
              Genève • Lausanne
            </p>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.15 }}
            className="lg:col-span-5 lg:col-start-8"
          >
            <div className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="border-b border-border p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="eyebrow">Avis clients Google</span>
                  <Logo className="h-9 bg-card" />
                </div>
                <p className="font-semibold">{googleBusinessProfile.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{googleBusinessProfile.address}</p>

                <div className="mt-5 flex items-end gap-3">
                  <span className="text-5xl font-semibold leading-none tracking-tight">{googleBusinessProfile.rating}</span>
                  <div className="pb-1">
                    <div className="flex gap-0.5" aria-hidden>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">{googleBusinessProfile.totalReviews}</span>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {googleBusinessProfile.filters.map((filter, i) => (
                    <span
                      key={filter}
                      className={`rounded-full px-3 py-1 text-xs ${
                        i === 0 ? "bg-foreground text-background" : "border border-border text-muted-foreground"
                      }`}
                    >
                      {filter}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <p className="mb-2 text-xs text-muted-foreground">Trier par</p>
                  <div className="flex flex-wrap gap-2">
                    {googleBusinessProfile.sortOptions.map((option) => (
                      <span key={option} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                        {option}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <ul className="max-h-[26rem] divide-y divide-border overflow-y-auto">
                {googleReviews.map((review) => (
                  <li key={`${review.author}-${review.relativeTime}`} className="p-6">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold uppercase">
                        {review.author.charAt(0)}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold">{review.author}</p>
                        <p className="text-xs text-muted-foreground">{review.relativeTime}</p>
                      </div>
                      <span className="text-sm tracking-tight text-accent" aria-label={`${review.rating} sur 5`}>
                        {"★".repeat(Math.max(1, Math.min(5, Math.round(review.rating))))}
                      </span>
                    </div>
                    <p className={`line-clamp-5 text-sm leading-relaxed ${review.text ? "text-foreground/80" : "italic text-muted-foreground"}`}>
                      {review.text || "Avis publie sans commentaire."}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
