import { motion } from "framer-motion";
import { Calendar, FileText, PenTool, Mic, Upload, CheckCircle2, BookOpen } from "lucide-react";

const timeline = [
  { color: "hsl(var(--primary))", icon: Calendar,     date: "3 fév – 3 mars",  title: "Inscriptions + Fiche F1",        badge: "Terminé",   badgeColor: "bg-primary/10 text-primary border-primary/20",     desc: "Portail insea-cnc2026.ma · Paiement 500 MAD · Validation par le responsable CPGE" },
  { color: "hsl(var(--primary))", icon: BookOpen,     date: "3 fév – 9 avr",   title: "TIPE Phase 1 — Titre & ancrage", badge: "Terminé",   badgeColor: "bg-primary/10 text-primary border-primary/20",     desc: "Titre, motivations, ancrage au thème, nom du prof encadrant" },
  { color: "#f59e0b",             icon: FileText,     date: "10 avr – 14 mai", title: "TIPE Phase 2 — MCOT",            badge: "En cours",  badgeColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20", desc: "Problématique, 5 mots-clés, bibliographie, objectifs — clôture 14 mai 17h", warning: "⚠️ Aucune modif après le 14 mai 17h00" },
  { color: "#ef4444",             icon: PenTool,      date: "14–19 mai",        title: "Épreuves écrites",               badge: "Critique",  badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",      desc: "5 jours · 25 centres · Convocations dès le 25 avril · CIN obligatoire" },
  { color: "#3b82f6",             icon: Upload,       date: "15 mai – 8 juin",  title: "TIPE Phase 3 — Slides + DOT",   badge: "À venir",   badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",   desc: "PDF slides (5 Mo max) + DOT + Fiche F2 signée par l'encadrant" },
  { color: "#3b82f6",             icon: CheckCircle2, date: "8–11 juin",        title: "TIPE Phase 4 — Validation",     badge: "À venir",   badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",   desc: "Validation des fiches F2 par le directeur des études — avant 11 juin 12h", warning: "⚠️ Sans validation, pas d'oral" },
  { color: "#8b5cf6",             icon: Mic,          date: "29 juin – 11 juil",title: "Oral TIPE (Admission)",          badge: "À venir",   badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20", desc: "40 min · Coeff 8 · Note finale = (Écrit×44 + TIPE×8) / 52" },
  { color: "hsl(var(--primary))", icon: CheckCircle2, date: "dès le 30 juil",  title: "Affectation en ligne",           badge: "Final",     badgeColor: "bg-primary/10 text-primary border-primary/20",     desc: "Choix des écoles par ordre de préférence selon le classement" },
];

const examSchedule = [
  { day: "Jeu 14 mai", items: [{ time: "08h–12h", label: "Maths I", dur: "4h" }, { time: "14h–16h", label: "Culture Arabe & Traduction", dur: "2h" }, { time: "17h–19h", label: "Anglais", dur: "2h" }] },
  { day: "Ven 15 mai", items: [{ time: "08h–12h", label: "Physique I", dur: "4h" }, { time: "15h–17h", label: "Informatique", dur: "2h" }] },
  { day: "Sam 16 mai", items: [{ time: "08h–12h", label: "Maths II", dur: "4h" }, { time: "14h–18h", label: "Français", dur: "4h" }] },
  { day: "Lun 18 mai", items: [{ time: "08h–12h", label: "Physique II", dur: "4h" }, { time: "14h–16h", label: "Chimie (MP & TSI)", dur: "2h" }, { time: "14h–17h", label: "Chimie (PSI)", dur: "3h" }] },
  { day: "Mar 19 mai", items: [{ time: "08h–12h", label: "SI (MP & PSI)", dur: "4h" }, { time: "08h–11h", label: "TSI — Élec", dur: "3h" }, { time: "11h30–14h30", label: "TSI — Méca", dur: "3h" }] },
];

const oralSteps = [
  { dur: "5 min",  color: "text-primary",    title: "Lecture fiche F2",    desc: "Le jury lit ta fiche en silence" },
  { dur: "15 min", color: "text-blue-400",   title: "Présentation",        desc: "Tes slides, vidéoprojecteur + tableau" },
  { dur: "15 min", color: "text-yellow-400", title: "Questions jury",      desc: "Méthode, résultats, limites, biblio" },
  { dur: "5 min",  color: "text-purple-400", title: "Délibération",        desc: "Note /20 · Coeff 8" },
];

export const CNCCalendar = () => (
  <section id="cnc-calendrier" className="py-24 bg-muted/20 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono font-semibold mb-4 border border-accent/20">
          cnc2026.calendar
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-3">Calendrier CNC 2026</h2>
        <p className="text-muted-foreground text-lg">Thème TIPE 2025-2026 : <strong className="text-primary">"Cycles, Boucles"</strong></p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 mb-10">
        {/* Timeline */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-6">
          <h3 className="text-base font-bold mb-6 flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> Timeline officielle</h3>
          <div className="relative">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-3 pb-5 last:pb-0 relative">
                {i < timeline.length - 1 && <div className="absolute left-[13px] top-7 bottom-0 w-px bg-border/60" />}
                <div className="w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 z-10 bg-card" style={{ borderColor: item.color }}>
                  <item.icon className="w-3 h-3" style={{ color: item.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <span className="text-[11px] font-mono text-muted-foreground">{item.date}</span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full border ${item.badgeColor}`}>{item.badge}</span>
                  </div>
                  <div className="text-sm font-bold mb-0.5">{item.title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                  {item.warning && <div className="mt-1 text-xs text-yellow-400 font-semibold">{item.warning}</div>}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          {/* Exam schedule */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-6">
            <h3 className="text-base font-bold mb-4 flex items-center gap-2"><PenTool className="w-4 h-4 text-primary" /> Planning écrits</h3>
            <div className="space-y-2">
              {examSchedule.map((day) => (
                <div key={day.day} className="rounded-lg border border-border/40 bg-muted/20 overflow-hidden">
                  <div className="px-3 py-1.5 bg-primary/10 border-b border-border/40">
                    <span className="text-xs font-mono font-bold text-primary">{day.day}</span>
                  </div>
                  <div className="divide-y divide-border/20">
                    {day.items.map((it) => (
                      <div key={it.label} className="flex items-center gap-3 px-3 py-1.5">
                        <span className="text-[11px] font-mono text-muted-foreground w-24 shrink-0">{it.time}</span>
                        <span className="text-xs flex-1">{it.label}</span>
                        <span className="text-[10px] font-mono text-primary bg-primary/10 px-1.5 py-0.5 rounded">{it.dur}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Oral breakdown */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-6">
            <h3 className="text-base font-bold mb-4 flex items-center gap-2"><Mic className="w-4 h-4 text-purple-400" /> Oral TIPE — 40 min</h3>
            <div className="space-y-3">
              {oralSteps.map((s, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className={`text-xs font-mono font-bold w-12 shrink-0 mt-0.5 ${s.color}`}>{s.dur}</span>
                  <div>
                    <div className={`text-sm font-semibold ${s.color}`}>{s.title}</div>
                    <div className="text-xs text-muted-foreground">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);
