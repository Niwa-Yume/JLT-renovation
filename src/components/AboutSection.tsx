import { motion } from "framer-motion";
import { CheckCircle, Award, Shield, Clock } from "lucide-react";
import logoJLT from "@/assets/logo-jlt.jpeg";

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
              Depuis plus de 6 ans, JLT Rénovation accompagne les particuliers et professionnels
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
                  <p className="text-lg font-semibold">Avis clients Google</p>
                  <p className="text-base font-semibold mt-2">{googleBusinessProfile.name}</p>
                  <p className="text-xs opacity-80 mt-1">{googleBusinessProfile.address}</p>

                  <div className="flex items-center gap-2 mt-3 text-sm">
                    <span className="font-semibold">{googleBusinessProfile.rating}</span>
                    <span className="opacity-90">{googleBusinessProfile.totalReviews}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {googleBusinessProfile.filters.map((filter) => (
                      <span key={filter} className="text-xs rounded-full bg-white/15 px-3 py-1">
                        {filter}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 mb-3">
                    <p className="text-xs opacity-80 mb-2">Trier par</p>
                    <div className="flex flex-wrap gap-2">
                      {googleBusinessProfile.sortOptions.map((option) => (
                        <span key={option} className="text-xs rounded-full border border-white/20 px-3 py-1">
                          {option}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 text-left mt-4 max-h-80 overflow-y-auto pr-1">
                    {googleReviews.map((review) => (
                      <div key={`${review.author}-${review.relativeTime}`} className="rounded-xl bg-white/10 p-4">
                        <div className="flex items-center justify-between mb-2 gap-3">
                          <p className="font-semibold">{review.author}</p>
                          <p className="text-xs opacity-80 whitespace-nowrap">{review.relativeTime}</p>
                        </div>
                        <p className="text-sm mb-2">{"★".repeat(Math.max(1, Math.min(5, Math.round(review.rating))))}</p>
                        <p className="text-sm opacity-90 line-clamp-5">
                          {review.text || "Avis publie sans commentaire."}
                        </p>
                      </div>
                    ))}
                  </div>
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
                  <div className="text-lg font-bold text-foreground">Genève • Lausanne</div>
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
