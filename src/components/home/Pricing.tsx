import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { CheckCircle2, Zap, BookOpen, HelpCircle, FileText, Mic, Crown, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const packs = [
  {
    icon: HelpCircle,
    name: "Pack Conseil",
    badge: "Pack 1",
    price: "300",
    tagline: "Trouver la bonne direction",
    features: ["Aide au choix du sujet", "Brainstorming guidé", "Conseils bibliographiques"],
  },
  {
    icon: BookOpen,
    name: "Pack Question",
    badge: "Pack 2",
    price: "200",
    tagline: "Résoudre les blocages",
    features: ["Ressources exclusives", "Réponses aux questions", "Aide à la résolution"],
  },
  {
    icon: Zap,
    name: "Pack Faisabilité",
    badge: "Pack 3",
    price: "300",
    tagline: "Valider votre sujet",
    features: ["Étude de faisabilité", "Analyse des points forts/faibles", "Encadrement scientifique"],
  },
  {
    icon: FileText,
    name: "Pack MCOT",
    badge: "Pack 4",
    price: "500",
    tagline: "Le document officiel",
    features: ["Rédaction MCOT", "Vérification des objectifs", "Optimisation du document"],
  },
  {
    icon: Mic,
    name: "Pack Présentation",
    badge: "Pack 5",
    price: "2 500",
    tagline: "Maîtriser l'oral",
    features: ["Préparation orale", "Simulation devant jury", "Réalisation de présentation"],
  },
  {
    icon: Crown,
    name: "Pack VIP",
    badge: "Recommandé",
    price: "4 000",
    tagline: "L'accompagnement complet",
    features: ["Tous les packs inclus", "Accompagnement de A à Z", "Réalisation individuelle", "Priorité et disponibilité"],
    isVip: true,
  },
  {
    icon: GraduationCap,
    name: "Pack CNAEM / ISCAE",
    badge: "Pack 7",
    price: "3 000",
    tagline: "Concours marocains",
    features: ["Préparation écrit et oral", "Accompagnement personnalisé", "Réalisation individuelle"],
  },
];

export const Pricing = () => {
  const [, navigate] = useLocation();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-4 border border-primary/20">
            tarifs.json
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Nos Tarifs</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Investissez dans votre réussite — chaque dirham dépensé ici est un pas vers votre grande école.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {packs.map((pack, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: pack.isVip ? -6 : -4 }}
              className={pack.isVip ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              {pack.isVip ? (
                /* VIP CARD */
                <div className="relative h-full rounded-xl border border-primary/50 bg-gradient-to-br from-primary/10 via-card to-accent/5 overflow-hidden shadow-[0_0_40px_rgba(34,197,94,0.15)] glow-pulse">
                  {/* Animated border top */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary animate-gradient" />

                  {/* Recommended badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full font-mono uppercase tracking-wider">
                      Recommandé
                    </span>
                  </div>

                  <div className="p-7">
                    <div className="w-11 h-11 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                      <Crown className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-1">{pack.name}</h3>
                    <p className="text-sm text-muted-foreground mb-5">{pack.tagline}</p>

                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-5xl font-black font-mono tabular-nums">{pack.price}</span>
                      <span className="text-muted-foreground font-semibold">DH</span>
                    </div>

                    <ul className="space-y-3 mb-7">
                      {pack.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2.5 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full h-11 font-semibold shadow-lg shadow-primary/25 rounded-lg"
                      onClick={() => navigate("/contact")}
                      data-testid="button-pack-vip"
                    >
                      Choisir le Pack VIP
                    </Button>
                  </div>
                </div>
              ) : (
                /* REGULAR CARD */
                <div className="relative h-full rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-md group">
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <pack.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded-md">
                        {pack.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{pack.name}</h3>
                    <p className="text-xs text-muted-foreground mb-4">{pack.tagline}</p>

                    <div className="flex items-baseline gap-1 mb-5">
                      <span className="text-3xl font-black font-mono tabular-nums">{pack.price}</span>
                      <span className="text-muted-foreground text-sm font-semibold">DH</span>
                    </div>

                    <ul className="space-y-2.5 mb-6">
                      {pack.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary/60 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant="outline"
                      className="w-full h-10 rounded-lg text-sm hover:bg-primary/5 hover:border-primary/40 hover:text-primary transition-all"
                      onClick={() => navigate("/contact")}
                      data-testid={`button-pack-${i}`}
                    >
                      Choisir ce pack
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-10 font-mono"
        >
          # Les packs sont cumulables — contactez-nous pour une offre personnalisée
        </motion.p>
      </div>
    </section>
  );
};
