import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { FlaskConical, PresentationIcon, BrainCircuit, ArrowRight } from "lucide-react";

const services = [
  {
    icon: FlaskConical,
    title: "Accompagnement TIPE",
    subtitle: "De l'idée à la soutenance",
    description: "Un accompagnement complet du choix de sujet jusqu'à la présentation finale devant jury.",
    steps: [
      { label: "Choix du sujet", detail: "Analyse de faisabilité & pertinence scientifique" },
      { label: "Recherche", detail: "Bibliographie, sources académiques, état de l'art" },
      { label: "Planification", detail: "MCOT, diagramme de Gantt, jalons" },
      { label: "Présentation", detail: "Slides, posture, gestion du temps" },
    ],
    color: "primary",
    gradient: "from-primary/15 to-transparent",
  },
  {
    icon: PresentationIcon,
    title: "Simulation d'oral",
    subtitle: "Prêt pour le jury",
    description: "Des séances en conditions réelles pour vous préparer à l'oral des concours et à la soutenance TIPE.",
    steps: [
      { label: "Mise en situation", detail: "Jury reconstitué, chronomètre, pression réelle" },
      { label: "Critique technique", detail: "Retour sur la rigueur scientifique" },
      { label: "Diction & posture", detail: "Communication non-verbale et clarté" },
      { label: "Optimisation", detail: "Itérations jusqu'au passage parfait" },
    ],
    color: "accent",
    gradient: "from-accent/15 to-transparent",
  },
  {
    icon: BrainCircuit,
    title: "Coaching individuel",
    subtitle: "Suivi sur-mesure",
    description: "Un plan d'action personnalisé basé sur votre diagnostic — axé sur vos points faibles identifiés.",
    steps: [
      { label: "Diagnostic initial", detail: "Évaluation de vos acquis et lacunes" },
      { label: "Plan d'action", detail: "Objectifs hebdomadaires mesurables" },
      { label: "Suivi régulier", detail: "Points d'étape et ajustements" },
      { label: "Préparation finale", detail: "Sprint concours, révisions ciblées" },
    ],
    color: "chart-4",
    gradient: "from-chart-4/15 to-transparent",
  },
];

const colorMap: Record<string, { border: string; icon: string; tag: string; dot: string }> = {
  primary: {
    border: "hover:border-primary/50",
    icon: "text-primary bg-primary/10",
    tag: "text-primary bg-primary/5 border-primary/20",
    dot: "bg-primary",
  },
  accent: {
    border: "hover:border-accent/50",
    icon: "text-accent bg-accent/10",
    tag: "text-accent bg-accent/5 border-accent/20",
    dot: "bg-accent",
  },
  "chart-4": {
    border: "hover:border-chart-4/50",
    icon: "text-chart-4 bg-chart-4/10",
    tag: "text-chart-4 bg-chart-4/5 border-chart-4/20",
    dot: "bg-chart-4",
  },
};

export const Services = () => {
  const [, navigate] = useLocation();
  return (
    <section id="services" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono font-semibold mb-4 border border-accent/20">
            services.config.ts
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Nos Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un accompagnement sur-mesure pour chaque étape de votre TIPE.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const c = colorMap[s.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className={`h-full rounded-xl border border-border/60 bg-card/70 backdrop-blur-sm overflow-hidden transition-all duration-300 ${c.border} hover:shadow-lg`}>
                  {/* Header */}
                  <div className={`p-6 pb-5 bg-gradient-to-br ${s.gradient} border-b border-border/40`}>
                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4 ${c.icon}`}>
                      <s.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{s.title}</h3>
                    <p className="text-muted-foreground text-sm">{s.subtitle}</p>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.description}</p>
                    <ul className="space-y-3">
                      {s.steps.map((step, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${c.dot}`} />
                          <div>
                            <span className="text-sm font-semibold">{step.label}</span>
                            <span className="text-xs text-muted-foreground ml-2">— {step.detail}</span>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => navigate("/contact")}
                      className={`mt-5 flex items-center gap-1.5 text-sm font-semibold ${c.tag.split(" ")[0]} opacity-70 group-hover:opacity-100 transition-opacity`}
                      data-testid={`button-service-${i}`}
                    >
                      En savoir plus <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
