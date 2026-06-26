import { motion } from "framer-motion";
import { Lightbulb, ThumbsUp, ThumbsDown, Users, Clock } from "lucide-react";

const goldenRules = [
  "Choisi au plus tôt",
  "Motivé, motivant, maîtrisable",
  "Ni trop élémentaire, ni trop ambitieux",
  "Met en rapport théorie et applications concrètes",
  "À caractère multidisciplinaire (souhaité)",
  "S'inscrit dans la durée d'une année complète",
  "Présenté de façon convaincante en 15 min",
];

const technicalTips = [
  { title: "Ne jamais attendre la dernière limite", desc: "Erreurs de téléversement, décalage d'horloge, saturation réseau — chaque année, des centaines de candidats sont pénalisés." },
  { title: "Vérifier systématiquement les téléversements", desc: "Aucune clé USB acceptée le jour J. Si le fichier est mauvais, le candidat présente sans support." },
  { title: "Numéroter les diapositives", desc: "Indispensable pour fluidifier l'échange avec le jury." },
  { title: "Ne pas mentionner le nom du lycée", desc: "N'apporte rien à la qualité de la prestation." },
  { title: "Mentionner sa spécialité si pertinent", desc: "Ex : spécialité « Informatique » en MP." },
  { title: "Soigner les Positionnements Thématiques", desc: "Le 1er Pos. Th. a une importance majeure. Pas besoin d'en donner 3 si le sujet est très pointu — 1 ou 2 suffisent parfois." },
];

const examinerDos = [
  "S'approprier son sujet, bien formuler le problème",
  "Mettre en avant la méthodologie et les résultats",
  "Souligner sa propre plus-value",
  "Préciser les hypothèses de travail choisies",
  "Se questionner / se remettre en cause sur les échecs",
  "Soigner la forme (légendes, police, n° diapos)",
  "Ne pas négliger les incertitudes expérimentales",
  "Mentionner les crédits (URL en petit, bas de diapo)",
  "Répéter devant un public critique",
];

const examinerDonts = [
  "Confondre contact industriel et « tourisme industriel »",
  "Négliger rigueur et précision (unités, ordres de grandeur)",
  "Présenter le même contenu que les autres membres du groupe",
  "Oublier l'adéquation au thème de l'année",
];

export const TIPETips = () => (
  <section id="tipe-conseils" className="py-24 bg-muted/20 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono font-semibold mb-4 border border-accent/20">
          <Lightbulb className="w-3 h-3" /> tipe.examiner_feedback
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-3">Retour d'expérience & conseils</h2>
        <p className="text-muted-foreground text-lg max-w-2xl">Ce que les examinateurs attendent vraiment — directement issu des rapports officiels.</p>
      </motion.div>

      {/* Golden rules */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-primary/30 bg-primary/5 p-6 mb-6">
        <h3 className="font-bold text-base mb-4 flex items-center gap-2 text-primary"><Lightbulb className="w-5 h-5" /> Les 7 qualités d'un bon sujet de TIPE</h3>
        <div className="flex flex-wrap gap-2">
          {goldenRules.map((r) => (
            <span key={r} className="text-xs px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium">{r}</span>
          ))}
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* Examiner Dos */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-6">
          <h3 className="font-bold text-base mb-4 flex items-center gap-2"><ThumbsUp className="w-5 h-5 text-primary" /> Ce que veulent les examinateurs</h3>
          <div className="space-y-2.5">
            {examinerDos.map((d) => (
              <div key={d} className="flex items-start gap-2.5 text-sm">
                <span className="text-primary mt-0.5">✓</span>
                <span className="text-muted-foreground">{d}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Examiner Don'ts */}
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-6">
          <h3 className="font-bold text-base mb-4 flex items-center gap-2"><ThumbsDown className="w-5 h-5 text-red-400" /> Pièges à éviter absolument</h3>
          <div className="space-y-2.5">
            {examinerDonts.map((d) => (
              <div key={d} className="flex items-start gap-2.5 text-sm">
                <span className="text-red-400 mt-0.5">✗</span>
                <span className="text-muted-foreground">{d}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-border/40 flex items-start gap-2.5 text-sm">
            <Users className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
            <span className="text-muted-foreground"><strong className="text-foreground">Travail de groupe :</strong> mentionner explicitement, dans la MCOT et la présentation, ce qui relève du commun vs de l'individuel — sans attendre que le jury le demande.</span>
          </div>
        </motion.div>
      </div>

      {/* Technical tips */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-6">
        <h3 className="font-bold text-base mb-5 flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /> Conseils techniques essentiels</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {technicalTips.map((t) => (
            <div key={t.title} className="p-4 rounded-lg border border-border/40 bg-muted/20">
              <div className="text-sm font-bold mb-1.5">{t.title}</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{t.desc}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
