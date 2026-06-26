import { motion } from "framer-motion";
import { ClipboardList, UserCheck, Cake, RefreshCcw, CreditCard, FileCheck, Ban } from "lucide-react";

const conditions = [
  { icon: UserCheck, title: "2 années CPGE complètes", desc: "MP, PSI ou TSI — publique, privée, Maroc ou étranger" },
  { icon: Cake, title: "Moins de 25 ans", desc: "Condition vérifiée au 31 décembre 2026" },
  { icon: RefreshCcw, title: "Maximum 3 tentatives", desc: "Successives uniquement. Changement de filière interdit à l'inscription" },
];

const steps = [
  { num: 1, color: "primary", title: "Inscription sur le portail", desc: "Créer un compte sur insea-cnc2026.ma → Recevoir login et mot de passe par email" },
  { num: 2, color: "primary", title: "Compléter la fiche F1", desc: "Renseigner infos personnelles, filière, centre CPGE. Validation obligatoire par le responsable du centre" },
  { num: 3, color: "accent", title: "Payer les frais de dossier", desc: "500 MAD (Maroc) ou 50€ (étranger) — Carte bancaire (Visa/Mastercard) ou Cash Plus / BaridCash / DamaneCash" },
  { num: 4, color: "yellow", title: "Saisir les 4 phases TIPE", desc: "Phase 1 (titre + ancrage) → Phase 2 (MCOT) → Phase 3 (slides + DOT) → Phase 4 (validation directeur)" },
  { num: 5, color: "primary", title: "Télécharger la convocation", desc: "Dès le 25 avril 2026 — Imprimer et présenter à chaque épreuve avec pièce d'identité (CIN/passeport)" },
];

const forbidden = [
  "Changer de filière à l'inscription",
  "Emmener un GSM même éteint",
  "Calculatrice programmable ou graphique",
  "Emporter les sujets avant la fin de l'épreuve",
  "Quitter la salle dans la 1ère heure ou les 15 dernières minutes",
];

const colorMap: Record<string, string> = {
  primary: "bg-primary/10 text-primary border-primary/20",
  accent: "bg-accent/10 text-accent border-accent/20",
  yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
};

export const CNCRegistrationGuide = () => (
  <section id="cnc-inscription" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-4 border border-primary/20">
          <ClipboardList className="w-3 h-3" /> cnc2026.registration
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-3">Guide d'inscription</h2>
        <p className="text-muted-foreground text-lg max-w-2xl">Toute la procédure, étape par étape, pour ne rien oublier.</p>
      </motion.div>

      {/* Conditions */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid sm:grid-cols-3 gap-4 mb-8">
        {conditions.map((c) => (
          <div key={c.title} className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-5">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
              <c.icon className="w-5 h-5 text-primary" />
            </div>
            <div className="font-bold text-sm mb-1">{c.title}</div>
            <div className="text-xs text-muted-foreground leading-relaxed">{c.desc}</div>
          </div>
        ))}
      </motion.div>

      {/* Steps */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 mb-6">
        <h3 className="font-bold text-lg mb-5 flex items-center gap-2">
          <FileCheck className="w-5 h-5 text-primary" /> Procédure complète
        </h3>
        <div className="space-y-3">
          {steps.map((s) => (
            <div key={s.num} className="flex items-start gap-4 p-4 rounded-lg border border-border/40 bg-muted/20">
              <div className={`w-8 h-8 rounded-full border flex items-center justify-center font-mono font-bold text-sm shrink-0 ${colorMap[s.color]}`}>
                {s.num}
              </div>
              <div>
                <div className="text-sm font-bold mb-1">{s.title}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Forbidden */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-red-500/30 bg-red-500/5 p-6">
        <h3 className="font-bold text-base mb-3 flex items-center gap-2 text-red-400">
          <Ban className="w-5 h-5" /> À ne jamais faire
        </h3>
        <div className="flex flex-wrap gap-2">
          {forbidden.map((f) => (
            <span key={f} className="text-xs px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400">{f}</span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
