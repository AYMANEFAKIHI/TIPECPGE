import { motion } from "framer-motion";
import { Target, BookOpen, HelpCircle, ListChecks, Presentation, GitCommit, FileCheck2, AlertCircle } from "lucide-react";

const criteria = [
  { group: "Potentiel Scientifique", color: "primary", items: [
    { title: "Pertinence et justesse scientifiques", icon: Target },
    { title: "Appropriation et capacité à apprendre", icon: BookOpen },
    { title: "Ouverture et Curiosité", icon: HelpCircle },
  ]},
  { group: "Démarche Scientifique", color: "accent", items: [
    { title: "Questionnement et Méthode", icon: ListChecks },
    { title: "Résolution de problème", icon: GitCommit },
    { title: "Communication - Présentation - Échange", icon: Presentation },
  ]},
];

const mcotParts = [
  { num: 1, title: "Positionnements thématiques & mots-clés", desc: "3 thèmes max (1 ou 2 possibles), par ordre de priorité décroissante. Le 1er doit être dans la discipline de la filière. + 5 mots-clés FR et EN.", limit: null },
  { num: 2, title: "Bibliographie commentée", desc: "Synthèse du contexte scientifique avec renvois numérotés [1], [2]... vers articles, ouvrages, sites. Permet l'appropriation du sujet.", limit: "650 mots max" },
  { num: 3, title: "Problématique retenue", desc: "Questionnement scientifique clair, justifié par la bibliographie. Commune en cas de groupe.", limit: "50 mots max" },
  { num: 4, title: "Objectifs du TIPE", desc: "Ce que le candidat compte atteindre. Spécifique à chaque membre — la contribution individuelle doit être claire.", limit: "100 mots max" },
  { num: 5, title: "Références bibliographiques", desc: "2 à 10 références, numérotées [N°], fiables et exploitables. Pas de contacts personnels ici (réservés au DOT).", limit: "2-10 réf." },
];

const dotExamples = [
  "Début Mars : Rencontre avec un expert en vibration des machines tournantes → lecture de [n] et [m]",
  "Décision fin mai — suite à [2] — d'étudier la sensibilité via le conditionnement des matrices. Infructueux : facteurs non indépendants",
  "Février 2024 : Série d'expériences en variant a et b → conjecture d'une loi empirique, validité réduite",
  "Janvier 2024 : Échec de la synthèse d'un organomagnésien → révision des conditions de l'expérience",
  "Mai 2024 : Réussite de la synthèse + calcul du rendement",
];

export const TIPEMethodology = () => (
  <section id="tipe-methodologie" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-4 border border-primary/20">
          tipe.methodology_guide
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-3">Guide méthodologique TIPE</h2>
        <p className="text-muted-foreground text-lg max-w-2xl">MCOT, DOT, présentation — les attendus pédagogiques officiels expliqués clairement.</p>
      </motion.div>

      {/* Evaluation criteria */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 mb-8">
        <h3 className="font-bold text-lg mb-5 flex items-center gap-2"><FileCheck2 className="w-5 h-5 text-primary" /> Les 6 critères d'évaluation officiels</h3>
        <div className="grid md:grid-cols-2 gap-5">
          {criteria.map((g) => (
            <div key={g.group} className={`rounded-lg border p-4 ${g.color === "primary" ? "border-primary/30 bg-primary/5" : "border-accent/30 bg-accent/5"}`}>
              <div className={`text-sm font-bold mb-3 ${g.color === "primary" ? "text-primary" : "text-accent"}`}>{g.group}</div>
              <div className="space-y-2.5">
                {g.items.map((it) => (
                  <div key={it.title} className="flex items-center gap-2.5">
                    <it.icon className={`w-4 h-4 shrink-0 ${g.color === "primary" ? "text-primary" : "text-accent"}`} />
                    <span className="text-sm">{it.title}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* MCOT breakdown */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 mb-8">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary" /> MCOT — Mise en Cohérence des Objectifs du TIPE</h3>
        <p className="text-xs text-muted-foreground mb-5">5 parties à saisir dans cet ordre précis sur le portail :</p>
        <div className="space-y-3">
          {mcotParts.map((p) => (
            <div key={p.num} className="flex gap-4 p-4 rounded-lg border border-border/40 bg-muted/20">
              <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-mono font-bold text-sm shrink-0">{p.num}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-sm font-bold">{p.title}</span>
                  {p.limit && <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 shrink-0">{p.limit}</span>}
                </div>
                <div className="text-xs text-muted-foreground leading-relaxed">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* DOT */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-6">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><GitCommit className="w-5 h-5 text-accent" /> DOT — Déroulé Opérationnel</h3>
          <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
            4 à 8 faits marquants (jalons) chronologiques, <strong className="text-foreground">strictement factuels</strong> — pas un plan, pas de résultats/interprétations. Inclut échecs et difficultés surmontées ou non. <span className="text-yellow-400 font-semibold">50 mots max par étape.</span>
          </p>
          <div className="space-y-2">
            {dotExamples.map((ex, i) => (
              <div key={i} className="text-xs p-3 rounded-lg bg-muted/30 border border-border/30 font-mono leading-relaxed text-muted-foreground">
                {ex}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-6">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><Presentation className="w-5 h-5 text-primary" /> Présentation orale (15 min)</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2.5"><AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span><strong>Format PDF</strong>, max 5 Mo, 4/3 paysage. Pas de vidéo, audio, ni animations PowerPoint/Keynote.</span></div>
            <div className="flex items-start gap-2.5"><AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>Max <strong>10 lignes par diapo</strong>, éviter les phrases complètes ("Saisie des données" plutôt que "Nous avons saisi les données").</span></div>
            <div className="flex items-start gap-2.5"><AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span><strong>Numéroter toutes les diapositives</strong> — facilite l'entretien avec le jury.</span></div>
            <div className="flex items-start gap-2.5"><AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>Référencer toute illustration externe (URL en bas de diapo).</span></div>
            <div className="flex items-start gap-2.5"><AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>Programmes informatiques : <strong>listings papier en double exemplaire</strong>, fond blanc recommandé.</span></div>
            <div className="flex items-start gap-2.5"><AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /><span className="text-red-400">Absence de dépôt = note zéro possible. Vérifier le fichier après upload.</span></div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
