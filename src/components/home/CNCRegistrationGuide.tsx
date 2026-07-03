import { motion } from "framer-motion";
import { ClipboardList, UserCheck, Cake, RefreshCcw, FileCheck, Ban } from "lucide-react";

const conditions = [
  { icon: UserCheck, title: "2 années CPGE",         desc: "MP, PSI ou TSI — publique ou privée" },
  { icon: Cake,       title: "Moins de 25 ans",       desc: "Au 31 décembre 2026" },
  { icon: RefreshCcw, title: "Max 3 tentatives",      desc: "Successives — changement de filière interdit" },
];

const steps = [
  { num: 1, color: "primary", title: "Inscription sur le portail",  desc: "insea-cnc2026.ma → compte + mot de passe par email" },
  { num: 2, color: "primary", title: "Compléter la fiche F1",       desc: "Infos personnelles, filière, centre — validée par le responsable CPGE" },
  { num: 3, color: "accent",  title: "Payer les frais",             desc: "500 MAD (Maroc) · 50€ (étranger) — CB ou Cash Plus / BaridCash" },
  { num: 4, color: "yellow",  title: "Saisir les 4 phases TIPE",    desc: "Phase 1 → 2 (MCOT) → 3 (Slides + DOT) → 4 (Validation directeur)" },
  { num: 5, color: "primary", title: "Télécharger la convocation",  desc: "Dès le 25 avril — Imprimer + CIN à chaque épreuve" },
];

const forbidden = [
  "GSM même éteint",
  "Calculatrice programmable",
  "Quitter dans la 1ère heure",
  "Changer de filière à l'inscription",
  "Emporter les sujets avant la fin",
];

const colorMap: Record<string, string> = {
  primary: "bg-primary/10 text-primary border-primary/20",
  accent:  "bg-accent/10 text-accent border-accent/20",
  yellow:  "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
};

export const CNCRegistrationGuide = () => (
  <section id="cnc-inscription" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-4 border border-primary/20">
          <ClipboardList className="w-3 h-3" /> cnc2026.inscription
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-3">Guide d'inscription</h2>
        <p className="text-muted-foreground text-lg">La procédure complète, simplifiée.</p>
      </motion.div>

      {/* Conditions */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid sm:grid-cols-3 gap-4 mb-6">
        {conditions.map((c) => (
          <div key={c.title} className="rounded-xl border border-border/60 bg-card/80 p-4 flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <c.icon className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="font-bold text-sm">{c.title}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{c.desc}</div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Steps */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 mb-5">
        <h3 className="font-bold text-base mb-4 flex items-center gap-2">
          <FileCheck className="w-4 h-4 text-primary" /> Étapes à suivre
        </h3>
        <div className="space-y-2">
          {steps.map((s) => (
            <div key={s.num} className="flex items-start gap-3 p-3 rounded-lg border border-border/40 bg-muted/20">
              <div className={`w-7 h-7 rounded-full border flex items-center justify-center font-mono font-bold text-xs shrink-0 ${colorMap[s.color]}`}>
                {s.num}
              </div>
              <div>
                <div className="text-sm font-bold">{s.title}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Forbidden */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">
        <h3 className="font-bold text-sm mb-3 flex items-center gap-2 text-red-400">
          <Ban className="w-4 h-4" /> Strictement interdit
        </h3>
        <div className="flex flex-wrap gap-2">
          {forbidden.map((f) => (
            <span key={f} className="text-xs px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400">{f}</span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
