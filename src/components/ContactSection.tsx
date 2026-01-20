import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone, Mail, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Demande envoyée !",
      description: "Nous vous recontacterons dans les 24h.",
    });
    
    setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-accent/5 to-transparent" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-energy/10 text-energy text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            Contactez-nous
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Votre devis <span className="text-accent">gratuit</span> en 24h
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Décrivez votre projet et recevez une estimation détaillée sans engagement.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Quick contact cards */}
            <a 
              href="tel:+41000000000" 
              className="block bg-gradient-hero rounded-2xl p-6 text-white hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm opacity-70 mb-1">Appelez-nous</div>
                  <div className="text-xl font-semibold">+41 00 000 00 00</div>
                </div>
              </div>
            </a>

            <a 
              href="mailto:contact@jlt-renovation.ch" 
              className="block bg-card rounded-2xl p-6 border border-border/50 shadow-soft hover:shadow-medium hover:scale-[1.02] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Email</div>
                  <div className="text-lg font-semibold text-foreground">contact@jlt-renovation.ch</div>
                </div>
              </div>
            </a>

            <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-soft">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-energy/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-energy" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Zone d'intervention</div>
                  <div className="text-lg font-semibold text-foreground">Suisse Romande</div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Genève, Lausanne, Vaud, Fribourg et environs
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-soft">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Horaires</div>
                  <div className="font-semibold text-foreground">Lun - Ven : 7h30 - 18h</div>
                  <div className="text-sm text-muted-foreground">Sam : Sur rendez-vous</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-medium border border-border/50">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Téléphone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+41 00 000 00 00"
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
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
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                    Type de projet
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full h-12 px-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="interieur">Peinture intérieure</option>
                    <option value="exterieur">Peinture extérieure</option>
                    <option value="renovation">Rénovation complète</option>
                    <option value="decoration">Décoration</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
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
                  className="resize-none"
                />
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
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              <p className="text-sm text-muted-foreground mt-4 text-center">
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
