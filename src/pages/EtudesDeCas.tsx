import { motion } from "framer-motion";
import { TrendingUp, Target, Lightbulb, Award, Quote } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { QuickLinks } from "@/components/layout/QuickLinks";
import { useSEO } from "@/lib/useSEO";

interface CaseStudy {
  name: string;
  filiere: string;
  ecole: string;
  subject: string;
  color: string;
  contexte: string;
  probleme: string;
  solution: string;
  resultats: { label: string; before: string; after: string }[];
  technologies: string[];
  timeline: { phase: string; desc: string }[];
  temoignage: string;
}

const CASES: CaseStudy[] = [
  {
    name: "Rania A.",
    filiere: "MP",
    ecole: "Admise à l'ENSA Marrakech",
    subject: "Modélisation de la trajectoire d'un ballon de basket : angle de tir optimal",
    color: "#8b5cf6",
    contexte: "Rania avait choisi un sujet de mécanique classique mais peinait à dépasser la simple application des lois de Newton. Son projet manquait de profondeur scientifique et d'un questionnement original malgré plusieurs semaines de travail.",
    probleme: "Aucune problématique claire, pas de protocole expérimental, présentation à 3 semaines de l'oral sans simulation numérique fonctionnelle. Le jury aurait posé une question sur le lien avec le thème de l'année et elle n'aurait pas su répondre.",
    solution: "Reformulation de la problématique autour de l'angle optimal de tir selon la distance et la résistance de l'air. Construction d'une simulation Python avec visualisation matplotlib et comparaison à des mesures vidéo réelles. Lien explicite avec le thème « Transition » établi via l'analyse du régime transitoire balistique.",
    resultats: [
      { label: "Clarté de la problématique", before: "Vague", after: "Précise et originale" },
      { label: "Simulation fonctionnelle", before: "Absente", after: "Python + données réelles" },
      { label: "Confiance à l'oral", before: "Faible", after: "Élevée (3 simulations)" },
    ],
    technologies: ["Python", "Matplotlib", "NumPy", "Analyse vidéo (tracking)"],
    timeline: [
      { phase: "Semaine 1-2", desc: "Recadrage de la problématique et bibliographie ciblée" },
      { phase: "Semaine 3-5", desc: "Développement de la simulation et premiers résultats" },
      { phase: "Semaine 6", desc: "Rédaction MCOT et DOT" },
      { phase: "Semaine 7-8", desc: "3 simulations d'oral en conditions réelles" },
    ],
    temoignage: "Je pensais que mon sujet était trop simple pour intéresser un jury. L'équipe m'a aidé à trouver l'angle qui rendait mon travail vraiment personnel. La simulation d'oral m'a évité toutes les questions pièges.",
  },
  {
    name: "Meryem L.",
    filiere: "PSI",
    ecole: "Admise à l'EMI Rabat",
    subject: "Optimisation thermique d'un moteur Stirling : modélisation et validation expérimentale",
    color: "#22c55e",
    contexte: "Meryem travaillait sur un moteur Stirling depuis le début de l'année mais son DOT ressemblait à un journal de bord sans lien clair avec ses objectifs MCOT. Elle manquait de données expérimentales exploitables et de rigueur dans le traitement des mesures.",
    probleme: "Incohérence entre les objectifs annoncés et le travail réellement présenté. Mesures expérimentales bruitées sans estimation d'incertitude. Le jury aurait pu invalider ses conclusions sur le rendement.",
    solution: "Restructuration complète du DOT en 6 jalons factuels alignés sur la MCOT. Mise en place d'un protocole de mesure rigoureux avec calcul d'incertitudes (méthode GUM), et ajout d'une comparaison théorie/expérience sur le rendement thermodynamique.",
    resultats: [
      { label: "Cohérence MCOT / DOT", before: "Faible", after: "Alignement total" },
      { label: "Rigueur expérimentale", before: "Mesures non quantifiées", after: "Incertitudes calculées" },
      { label: "Note d'oral simulée", before: "11/20", after: "16.5/20" },
    ],
    technologies: ["Capteurs de température", "Acquisition de données", "Python (traitement statistique)", "Méthode GUM"],
    timeline: [
      { phase: "Semaine 1", desc: "Audit du travail existant et diagnostic des lacunes" },
      { phase: "Semaine 2-3", desc: "Refonte du protocole expérimental et nouvelles mesures" },
      { phase: "Semaine 4", desc: "Réécriture complète du DOT et de la MCOT" },
      { phase: "Semaine 5-6", desc: "2 simulations d'oral + ajustements slides" },
    ],
    temoignage: "Mon DOT n'avait aucun sens avant. On m'a appris à raconter une vraie histoire scientifique, avec mes échecs inclus. Le jury a justement posé une question sur une de mes mesures ratées — j'étais prête.",
  },
  {
    name: "Anas C.",
    filiere: "TSI",
    ecole: "Admis à l'ENSEM Casablanca",
    subject: "Optimisation du flux de trafic urbain par modélisation de files d'attente",
    color: "#f59e0b",
    contexte: "Anas, en filière TSI, avait un sujet original sur la gestion du trafic par feux intelligents. Mais sa présentation était beaucoup trop dense en formules mathématiques et en code, illisible pour un jury non-spécialiste en théorie des files d'attente.",
    probleme: "15 lignes de texte par diapositive, formules Poisson affichées brutes sans explication, aucun schéma d'architecture du système, vocabulaire trop technique. Le profil TSI était sous-valorisé par rapport aux MP.",
    solution: "Refonte complète des slides : suppression des formules brutes (déplacées en annexe), ajout de schémas d'intersections animés, mise en valeur de la simulation Python M/D/1, et construction d'un narratif en 4 temps centré sur l'impact réel (réduction de 28% du temps d'attente).",
    resultats: [
      { label: "Lisibilité des slides", before: "Surchargée", after: "Épurée, 1 idée / diapo" },
      { label: "Compréhension jury non-expert", before: "Difficile", after: "Fluide" },
      { label: "Valorisation profil TSI", before: "Implicite", after: "Explicite et différenciant" },
    ],
    technologies: ["Python (SimPy)", "Modèle M/D/1 (Poisson)", "Graphviz", "Simulation d'intersections"],
    timeline: [
      { phase: "Semaine 1", desc: "Diagnostic de la présentation existante" },
      { phase: "Semaine 2", desc: "Refonte visuelle complète des slides" },
      { phase: "Semaine 3", desc: "Travail sur la vulgarisation du discours technique" },
      { phase: "Semaine 4", desc: "Simulation d'oral devant un jury non-informaticien" },
    ],
    temoignage: "J'étais tellement dans mon sujet que j'oubliais que le jury n'est pas forcément spécialiste. Apprendre à vulgariser sans perdre en rigueur scientifique a été le vrai déclic pour moi.",
  },
];

const StatPill = ({ label, before, after, color }: { label: string; before: string; after: string; color: string }) => (
  <div className="rounded-lg border border-border/40 bg-muted/20 p-3">
    <div className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground mb-2">{label}</div>
    <div className="flex items-center gap-2 text-xs">
      <span className="px-2 py-1 rounded bg-muted/60 text-muted-foreground line-through opacity-70">{before}</span>
      <TrendingUp className="w-3 h-3 shrink-0" style={{ color }} />
      <span className="px-2 py-1 rounded font-semibold" style={{ backgroundColor: `${color}1a`, color }}>{after}</span>
    </div>
  </div>
);

const CaseStudyCard = ({ c, index }: { c: CaseStudy; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm overflow-hidden"
  >
    <div className="h-1.5" style={{ backgroundColor: c.color }} />
    <div className="p-6 md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded" style={{ backgroundColor: `${c.color}1a`, color: c.color }}>{c.filiere}</span>
            <span className="text-xs font-mono text-muted-foreground flex items-center gap-1"><Award className="w-3 h-3" /> {c.ecole}</span>
          </div>
          <h3 className="text-lg font-bold leading-snug max-w-2xl">{c.subject}</h3>
          <p className="text-sm text-muted-foreground mt-1">— {c.name}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="rounded-lg border border-border/40 bg-muted/20 p-4">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
            <Lightbulb className="w-3.5 h-3.5" /> Contexte
          </div>
          <p className="text-sm leading-relaxed">{c.contexte}</p>
        </div>
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wide text-red-400">
            <Target className="w-3.5 h-3.5" /> Problème
          </div>
          <p className="text-sm leading-relaxed">{c.probleme}</p>
        </div>
        <div className="rounded-lg border border-border/40 p-4" style={{ backgroundColor: `${c.color}08`, borderColor: `${c.color}30` }}>
          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wide" style={{ color: c.color }}>
            <TrendingUp className="w-3.5 h-3.5" /> Solution
          </div>
          <p className="text-sm leading-relaxed">{c.solution}</p>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">Résultats</h4>
        <div className="grid sm:grid-cols-3 gap-3">
          {c.resultats.map((r) => <StatPill key={r.label} {...r} color={c.color} />)}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">Timeline</h4>
          <div className="space-y-2">
            {c.timeline.map((t, i) => (
              <div key={i} className="flex gap-3 text-sm">
                <span className="font-mono text-xs font-bold shrink-0 pt-0.5" style={{ color: c.color }}>{t.phase}</span>
                <span className="text-muted-foreground">{t.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">Technologies utilisées</h4>
          <div className="flex flex-wrap gap-2">
            {c.technologies.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-full border border-border/60 bg-muted/30 font-mono">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border/40 bg-muted/20 p-4 flex gap-3">
        <Quote className="w-4 h-4 shrink-0 mt-0.5" style={{ color: c.color }} />
        <p className="text-sm italic text-foreground/80 leading-relaxed">"{c.temoignage}"</p>
      </div>
    </div>
  </motion.div>
);

export default function EtudesDeCasPage() {
  useSEO();
  return (
    <Layout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-4 border border-primary/20">
              reussites.map(etudiant =&gt; ecole)
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Études de cas</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Des situations réelles, des problèmes concrets, des résultats mesurables. Voici comment nos étudiants ont transformé leur TIPE.
            </p>
          </motion.div>
          <div className="space-y-8 max-w-5xl mx-auto">
            {CASES.map((c, i) => <CaseStudyCard key={c.name} c={c} index={i} />)}
          </div>
        </div>
      </section>
      <QuickLinks
        items={[
          { label: "Voir notre méthodologie", href: "/methodologie" },
          { label: "Nos packs d'accompagnement", href: "/#pricing" },
          { label: "Nous contacter", href: "/contact" },
        ]}
      />
    </Layout>
  );
}
