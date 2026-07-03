import { motion } from "framer-motion";
import { Microscope, BarChart3, UserCheck, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Microscope,
    title: "Expertise scientifique",
    desc: "Nos encadrants sont des ingénieurs et docteurs formés aux méthodes expérimentales CPGE.",
    points: ["Rigueur scientifique sur chaque sujet", "Simulations Python et modélisation", "Maîtrise des thèmes TIPE annuels"],
    tag: "TIPE · Modélisation · Expérimentation",
    color: "primary",
  },
  {
    icon: BarChart3,
    title: "Préparation aux concours",
    desc: "Stratégies éprouvées pour les oraux Centrale, X, EMI, ISCAE et les concours marocains.",
    points: ["Analyse de dossiers MCOT primés", "Simulations d'oral en conditions réelles", "Feedback détaillé après chaque session"],
    tag: "Centrale · X-ENS · EMI · CNAEM",
    color: "accent",
  },
  {
    icon: UserCheck,
    title: "Suivi personnalisé",
    desc: "Un encadrement adapté à votre filière, votre thème et vos lacunes — pas de programme générique.",
    points: ["Diagnostic initial et plan d'action", "Ajustements hebdomadaires", "Disponibilité réactive (WhatsApp)"],
    tag: "MP · PSI · TSI",
    color: "chart-3",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; check: string }> = {
  primary: { bg: "bg-primary/10", border: "border-primary/20 group-hover:border-primary/50", text: "text-primary", check: "text-primary" },
  accent:  { bg: "bg-accent/10",  border: "border-accent/20 group-hover:border-accent/50",   text: "text-accent",  check: "text-accent"  },
  "chart-3": { bg: "bg-yellow-500/10", border: "border-yellow-500/20 group-hover:border-yellow-500/40", text: "text-yellow-400", check: "text-yellow-400" },
};

export const Features = () => (
  <section id="features" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-4 border border-primary/20">
          pourquoi_nous_choisir.py
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">Une approche scientifique et rigoureuse — comme votre futur TIPE.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, i) => {
          const c = colorMap[f.color];
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }} whileHover={{ y: -6 }} className="group">
              <div className={`h-full rounded-xl border bg-card/60 backdrop-blur-sm p-7 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/10 ${c.border}`}>
                <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <f.icon className={`w-6 h-6 ${c.text}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{f.desc}</p>
                <ul className="space-y-2 mb-5">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${c.check}`} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className={`font-mono text-xs ${c.text} ${c.bg} border ${c.border} rounded-md px-3 py-1.5 opacity-70`}>
                  # {f.tag}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
