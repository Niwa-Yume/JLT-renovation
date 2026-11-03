import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone, Mail, MapPin, Send, Clock, ArrowUpRight } from "lucide-react";
import { reveal } from "@/lib/motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const MIN_MESSAGE_LENGTH = 20;

const projectTypes = [
  { value: "interieur", label: "Peinture intérieure" },
  { value: "exterieur", label: "Peinture extérieure" },
  { value: "renovation", label: "Rénovation complète" },
  { value: "decoration", label: "Décoration" },
  { value: "autre", label: "Autre" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const accessKey = "848c7522-843d-4819-9ec8-828dcd7ca02d";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const projectType = formData.projectType.trim();
    const message = formData.message.trim();

    if (!accessKey) {
      toast({
        title: "Configuration manquante",
        description: "La clé Web3Forms est absente. Ajoutez VITE_WEB3FORMS_ACCESS_KEY dans votre .env.local.",
        variant: "destructive",
      });
      return;
    }

    if (!emailPattern.test(email)) {
      toast({
        title: "Email invalide",
        description: "Merci de saisir une adresse email valide.",
        variant: "destructive",
      });
      return;
    }

    if (message.length < MIN_MESSAGE_LENGTH) {
      toast({
        title: "Message trop court",
        description: `Merci d'ajouter au moins ${MIN_MESSAGE_LENGTH} caractères pour décrire votre projet.`,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "Nouveau devis depuis le site JLT Rénovation",
          from_name: "Site JLT Rénovation",
          name,
          email,
          phone,
          message: `Type de projet: ${projectType || "Non précisé"}\n\n${message}`,
          botcheck: "",
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "L'envoi du formulaire a échoué.");
      }

      toast({
        title: "Demande envoyée !",
        description: "Nous vous recontacterons dans les 24h.",
      });

      setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Impossible d'envoyer votre demande. Merci de réessayer.";

      toast({
        title: "Envoi impossible",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const fieldClass = "h-12 rounded-md bg-background";
  const labelClass = "mb-2 block text-sm font-medium";

  return (
    <section id="contact" className="bg-primary py-24 text-primary-foreground md:py-32">
      <div className="container">
        <motion.div {...reveal} className="mb-14 grid gap-6 md:mb-20 lg:grid-cols-12">
          <span className="eyebrow text-primary-foreground/60 lg:col-span-3 lg:pt-3">04 — Contactez-nous</span>
          <h2 className="text-4xl font-semibold leading-[1.05] sm:text-5xl lg:col-span-6">
            Votre devis <span className="text-accent">gratuit</span> en 24h
          </h2>
          <p className="max-w-sm text-primary-foreground/60 lg:col-span-3 lg:pt-3">
            Décrivez votre projet et recevez une estimation détaillée sans engagement.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-12">
          <motion.div {...reveal} className="lg:col-span-4">
            <div className="divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">
              <a href="tel:+41797206788" className="group flex items-start gap-4 py-6">
                <Phone className="mt-1 h-5 w-5 text-accent" strokeWidth={1.75} />
                <div className="flex-1">
                  <div className="mb-1 text-sm text-primary-foreground/60">Appelez-nous</div>
                  <div className="text-2xl font-semibold tracking-tight">079 720 67 88</div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-primary-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>

              <a href="mailto:contact@jlt-renovation.ch" className="group flex items-start gap-4 py-6">
                <Mail className="mt-1 h-5 w-5 text-accent" strokeWidth={1.75} />
                <div className="min-w-0 flex-1">
                  <div className="mb-1 text-sm text-primary-foreground/60">Email</div>
                  <div className="break-all text-lg font-medium">contact@jlt-renovation.ch</div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-primary-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>

              <div className="flex items-start gap-4 py-6">
                <MapPin className="mt-1 h-5 w-5 text-accent" strokeWidth={1.75} />
                <div>
                  <div className="mb-1 text-sm text-primary-foreground/60">Zone d'intervention</div>
                  <div className="text-lg font-medium">Genève, Lausanne, et environs</div>
                </div>
              </div>

              <div className="flex items-start gap-4 py-6">
                <Clock className="mt-1 h-5 w-5 text-accent" strokeWidth={1.75} />
                <div>
                  <div className="mb-1 text-sm text-primary-foreground/60">Horaires</div>
                  <div className="text-lg font-medium">Lun - Ven : 7h30 - 18h</div>
                  <div className="text-sm text-primary-foreground/60">Sam : Sur rendez-vous</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.1 }}
            className="lg:col-span-7 lg:col-start-6"
          >
            <form onSubmit={handleSubmit} className="rounded-lg bg-card p-6 text-card-foreground sm:p-10">
              <div className="mb-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                    autoComplete="name"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Téléphone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="079 720 67 88"
                    required
                    autoComplete="tel"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className={labelClass}>
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.ch"
                  required
                  autoComplete="email"
                  className={fieldClass}
                />
              </div>

              <fieldset className="mb-6">
                <legend className={labelClass}>Type de projet</legend>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <label key={type.value} className="cursor-pointer">
                      <input
                        type="radio"
                        name="projectType"
                        value={type.value}
                        checked={formData.projectType === type.value}
                        onChange={handleChange}
                        className="peer sr-only"
                      />
                      <span className="block rounded-full border border-input px-4 py-2 text-sm transition-all duration-200 hover:border-foreground/40 active:scale-95 peer-checked:border-foreground peer-checked:bg-foreground peer-checked:text-background peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2">
                        {type.label}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mb-8">
                <label htmlFor="message" className={labelClass}>
                  Décrivez votre projet *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Surface à peindre, état actuel, couleurs souhaitées, délais..."
                  required
                  rows={5}
                  className="resize-none rounded-md bg-background"
                />
                <p className="mt-2 text-right font-mono text-xs text-muted-foreground" aria-live="polite">
                  {formData.message.trim().length < MIN_MESSAGE_LENGTH
                    ? `${formData.message.trim().length} / ${MIN_MESSAGE_LENGTH} caractères minimum`
                    : "✓ Parfait"}
                </p>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    Recevoir mon devis gratuit
                    <Send />
                  </>
                )}
              </Button>

              <p className="mt-4 text-center text-sm text-muted-foreground">
                ✓ Réponse garantie sous 24h &nbsp; ✓ Devis gratuit et sans engagement
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
