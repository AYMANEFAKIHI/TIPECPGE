import { motion } from "framer-motion";
import { Calendar, FileText, PenTool, Mic, Upload, CheckCircle2, BookOpen } from "lucide-react";

const timeline = [
  {
    color: "hsl(var(--primary))",
    icon: Calendar,
    date: "3 fév – 3 mars 2026",
    title: "Inscriptions + Fiche F1",
    desc: "Portail insea-cnc2026.ma — Paiement 500 MAD obligatoire — Validation par le responsable CPGE",
    badge: "Terminé",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
  },
  {
    color: "hsl(var(--primary))",
    icon: BookOpen,
    date: "3 fév – 9 avr 2026",
    title: "TIPE Phase 1 — Titre & ancrage",
    desc: "Saisir : titre du sujet · motivations (50 mots max) · ancrage au thème (50 mots max) · nom du prof encadrant · déclaration de groupe si besoin",
    badge: "Terminé",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
  },
  {
    color: "#f59e0b",
    icon: FileText,
    date: "10 avr – 14 mai 2026",
    title: "TIPE Phase 2 — MCOT",
    desc: "Mise en Cohérence des Objectifs du TIPE : positionnement thématique · 5 mots clés FR + 5 EN · bibliographie commentée (650 mots max) · problématique (50 mots) · objectifs (100 mots) · 2 à 10 références",
    badge: "En cours",
    badgeColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    warning: "⚠️ Aucune modification acceptée après le 14 mai 17h00",
  },
  {
    color: "#ef4444",
    icon: PenTool,
    date: "14–19 mai 2026",
    title: "Épreuves d'admissibilité (Écrit)",
    desc: "5 jours d'épreuves dans 25 centres au Maroc. Convocations disponibles dès le 25 avril sur le portail. Pièce d'identité obligatoire à chaque épreuve.",
    badge: "Critique",
    badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
  },
  {
    color: "#3b82f6",
    icon: Upload,
    date: "15 mai – 8 juin 2026",
    title: "TIPE Phase 3 — Slides + DOT",
    desc: "Téléverser la présentation PDF (max 5 Mo) · Saisir le plan (50 mots max) · Rédiger le Déroulé Opérationnel du TIPE (DOT, 50 mots par étape) · Fiche F2 signée par prof encadrant + directeur des études",
    badge: "À venir",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    color: "#3b82f6",
    icon: CheckCircle2,
    date: "8–11 juin 2026",
    title: "TIPE Phase 4 — Validation administrative",
    desc: "Le directeur des études valide les fiches F2 de tous les élèves du centre sur le portail avant le 11 juin 12h00. Sans cette validation, le candidat ne peut pas passer l'oral.",
    badge: "À venir",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    warning: "⚠️ Aucune validation acceptée après le 11 juin 12h00",
  },
  {
    color: "#8b5cf6",
    icon: Mic,
    date: "29 juin – 11 juil 2026",
    title: "Épreuve orale TIPE (Admission)",
    desc: "40 minutes en tout. Coefficient 8. Note finale = (Écrit×44 + TIPE×8) / 52. Dimanche 5 juillet exclu. Planning détaillé publié ultérieurement.",
    badge: "À venir",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  {
    color: "hsl(var(--primary))",
    icon: CheckCircle2,
    date: "à partir du 30 juil 2026",
    title: "Affectation en ligne",
    desc: "Choix des écoles par ordre de préférence selon le classement final. Guide d'affectation publié à temps sur le portail. Résultats affichés à l'INSEA Rabat et en ligne.",
    badge: "Final",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
  },
];

const examSchedule = [
  { day: "Jeu 14 mai", items: [
    { time: "08h00–12h00", label: "Mathématiques I", dur: "4h", all: true },
    { time: "14h00–16h00", label: "Culture Arabe & Traduction", dur: "2h", all: true },
    { time: "17h00–19h00", label: "Anglais", dur: "2h", all: true },
  ]},
  { day: "Ven 15 mai", items: [
    { time: "08h00–12h00", label: "Physique I", dur: "4h", all: true },
    { time: "15h00–17h00", label: "Informatique", dur: "2h", all: true },
  ]},
  { day: "Sam 16 mai", items: [
    { time: "08h00–12h00", label: "Mathématiques II", dur: "4h", all: true },
    { time: "14h00–18h00", label: "Français", dur: "4h", all: true },
  ]},
  { day: "Lun 18 mai", items: [
    { time: "08h00–12h00", label: "Physique II", dur: "4h", all: true },
    { time: "14h00–16h00", label: "Chimie (MP & TSI)", dur: "2h", all: false },
    { time: "14h00–17h00", label: "Chimie (PSI uniquement)", dur: "3h", all: false },
  ]},
  { day: "Mar 19 mai", items: [
    { time: "08h00–12h00", label: "Sciences Industrielles (MP & PSI)", dur: "4h", all: false },
    { time: "08h00–11h00", label: "TSI — Élec", dur: "3h", all: false },
    { time: "11h30–14h30", label: "TSI — Mécanique", dur: "3h", all: false },
  ]},
];

const oralSteps = [
  { dur: "5 min", title: "Lecture de la fiche F2", desc: "Le jury lit ta fiche récapitulative TIPE en silence. Toi tu attends.", color: "text-primary" },
  { dur: "15 min", title: "Présentation orale", desc: "Tu présentes ton travail avec tes slides (vidéoprojecteur + tableau disponibles). Aucune expérience ni vidéo ne sont autorisées en salle.", color: "text-blue-400" },
  { dur: "15 min", title: "Questions du jury", desc: "Questions techniques approfondies : méthode, résultats, limites, bibliographie. Le jury peut sortir du sujet pour évaluer ta culture scientifique.", color: "text-yellow-400" },
  { dur: "5 min", title: "Délibération", desc: "Tu sors de la salle. Le jury délibère et attribue la note sur 20 (coefficient 8).", color: "text-purple-400" },
];

const evalCriteria = [
  "Recherche & Investigation",
  "Justesse scientifique & Pertinence",
  "Capacité à apprendre & Appropriation",
  "Ouverture & Curiosité",
  "Questionnement & Méthode",
  "Résolution de problèmes & Technique",
  "Communication & Présentation & Échange",
];

export const CNCCalendar = () => (
  <section id="cnc-calendrier" className="py-24 bg-muted/20 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono font-semibold mb-4 border border-accent/20">
          cnc2026.calendar
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-3">Calendrier complet CNC 2026</h2>
        <p className="text-muted-foreground text-lg max-w-2xl">Thème TIPE 2025-2026 : <strong className="text-primary">"Cycles, Boucles"</strong></p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 mb-10">
        {/* Timeline */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-6">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><Calendar className="w-5 h-5 text-primary" /> Timeline officielle</h3>
          <div className="relative">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4 pb-6 last:pb-0 relative">
                {i < timeline.length - 1 && (
                  <div className="absolute left-[15px] top-8 bottom-0 w-px bg-border/60" />
                )}
                <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 z-10 bg-card" style={{ borderColor: item.color }}>
                  <item.icon className="w-3.5 h-3.5" style={{ color: item.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-muted-foreground">{item.date}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.badgeColor}`}>{item.badge}</span>
                  </div>
                  <div className="text-sm font-bold mb-1">{item.title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                  {item.warning && (
                    <div className="mt-2 text-xs text-yellow-400 font-semibold bg-yellow-500/10 rounded px-2 py-1 border border-yellow-500/20">{item.warning}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          {/* Exam schedule */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><PenTool className="w-5 h-5 text-primary" /> Planning épreuves écrites</h3>
            <div className="space-y-3">
              {examSchedule.map((day) => (
                <div key={day.day} className="rounded-lg border border-border/40 bg-muted/20 overflow-hidden">
                  <div className="px-3 py-2 bg-primary/10 border-b border-border/40">
                    <span className="text-xs font-mono font-bold text-primary">{day.day}</span>
                  </div>
                  <div className="divide-y divide-border/30">
                    {day.items.map((it) => (
                      <div key={it.label} className="flex items-center gap-3 px-3 py-2">
                        <span className="text-xs font-mono text-muted-foreground w-28 shrink-0">{it.time}</span>
                        <span className="text-xs flex-1">{it.label}</span>
                        <span className="text-[10px] font-mono text-primary bg-primary/10 px-1.5 py-0.5 rounded">{it.dur}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Oral TIPE breakdown */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Mic className="w-5 h-5 text-purple-400" /> Déroulé oral TIPE — 40 min au total</h3>
            <div className="space-y-3 mb-5">
              {oralSteps.map((s, i) => (
                <div key={i} className="flex gap-3">
                  <div className={`text-xs font-mono font-bold w-12 shrink-0 mt-0.5 ${s.color}`}>{s.dur}</div>
                  <div>
                    <div className={`text-sm font-semibold ${s.color}`}>{s.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border/40 pt-4">
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Critères d'évaluation du jury</div>
              <div className="flex flex-wrap gap-1.5">
                {evalCriteria.map((c) => (
                  <span key={c} className="text-[11px] px-2 py-1 rounded-full bg-muted/60 border border-border/40 text-muted-foreground">{c}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);
