"use client";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Circle, Clock } from "lucide-react";

interface TimelineEvent {
  id: string;
  label: string;
  start: string; // ISO date
  end: string; // ISO date
  description: string;
  color: string;
}

const EVENTS: TimelineEvent[] = [
  { id: "inscriptions", label: "Inscriptions", start: "2026-02-03", end: "2026-03-03", description: "Inscription sur le portail insea-cnc2026.ma, validation de la fiche F1, paiement des frais de dossier (500 MAD).", color: "#22c55e" },
  { id: "tipe1", label: "TIPE Phase 1", start: "2026-02-03", end: "2026-04-09", description: "Saisie du titre, des motivations, de l'ancrage au thème et déclaration du professeur encadrant.", color: "#10b981" },
  { id: "tipe2", label: "TIPE Phase 2 — MCOT", start: "2026-04-10", end: "2026-05-14", description: "Saisie de la Mise en Cohérence des Objectifs du TIPE : positionnement, bibliographie, problématique, objectifs.", color: "#f59e0b" },
  { id: "ecrit", label: "Épreuves écrites", start: "2026-05-14", end: "2026-05-19", description: "5 jours d'épreuves d'admissibilité dans les centres CPGE à travers le Maroc.", color: "#ef4444" },
  { id: "tipe3", label: "TIPE Phase 3 — DOT + Slides", start: "2026-05-15", end: "2026-06-08", description: "Téléversement des slides de présentation, saisie du Déroulé Opérationnel du TIPE et de la fiche F2.", color: "#3b82f6" },
  { id: "tipe4", label: "TIPE Phase 4 — Validation", start: "2026-06-08", end: "2026-06-11", description: "Validation administrative des fiches F2 par le directeur des études du centre CPGE.", color: "#6366f1" },
  { id: "oral", label: "Oral TIPE", start: "2026-06-29", end: "2026-07-11", description: "Épreuve d'admission orale TIPE — coefficient 8. 40 minutes par candidat (dimanche 5 juillet exclu).", color: "#8b5cf6" },
  { id: "affectation", label: "Affectation en ligne", start: "2026-07-30", end: "2026-08-15", description: "Choix des écoles par ordre de préférence selon le classement final. Résultats publiés en ligne.", color: "#06b6d4" },
];

const TIMELINE_START = new Date(EVENTS[0].start).getTime();
const TIMELINE_END = new Date(EVENTS[EVENTS.length - 1].end).getTime();
const TIMELINE_SPAN = TIMELINE_END - TIMELINE_START;

const dateToPct = (iso: string) => {
  const t = new Date(iso).getTime();
  return Math.max(0, Math.min(100, ((t - TIMELINE_START) / TIMELINE_SPAN) * 100));
};

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", { day: "2-digit", month: "short" });

type Status = "done" | "active" | "upcoming";

const getStatus = (ev: TimelineEvent, now: number): Status => {
  const start = new Date(ev.start).getTime();
  const end = new Date(ev.end).getTime();
  if (now > end) return "done";
  if (now >= start && now <= end) return "active";
  return "upcoming";
};

const STATUS_LABEL: Record<Status, string> = {
  done: "Terminé",
  active: "En cours",
  upcoming: "À venir",
};

export const InteractiveTimeline = () => {
  const [now, setNow] = useState(() => Date.now());
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(id);
  }, []);

  const cursorPct = useMemo(() => {
    if (now < TIMELINE_START) return 0;
    if (now > TIMELINE_END) return 100;
    return ((now - TIMELINE_START) / TIMELINE_SPAN) * 100;
  }, [now]);

  const globalProgress = useMemo(() => Math.round(cursorPct), [cursorPct]);

  const todayLabel = useMemo(
    () => new Date(now).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" }),
    [now]
  );

  // Which column (index in EVENTS) the "today" flag should sit above,
  // aligned to the fixed-grid columns below rather than a date-proportional
  // position (which is what caused label overlap for adjacent phases).
  const activeIndex = useMemo(() => {
    const idx = EVENTS.findIndex((ev) => getStatus(ev, now) === "active");
    if (idx !== -1) return idx;
    const nextIdx = EVENTS.findIndex((ev) => getStatus(ev, now) === "upcoming");
    return nextIdx === -1 ? EVENTS.length - 1 : nextIdx;
  }, [now]);

  return (
    <div className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary" />
          <span className="font-mono text-sm font-semibold text-muted-foreground">Timeline interactive — Calendrier CNC 2026</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Aujourd'hui : {todayLabel}
        </div>
      </div>

      {/* Global progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs font-mono text-muted-foreground">Progression globale</span>
          <span className="text-sm font-mono font-bold text-primary">{globalProgress}%</span>
        </div>
        <div className="h-2 bg-muted/60 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
            initial={{ width: 0 }}
            animate={{ width: `${globalProgress}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Proportional date bar — purely visual, shows real relative durations */}
      <div className="relative h-2 mb-2 rounded-full overflow-hidden bg-muted/40">
        {EVENTS.map((ev) => {
          const left = dateToPct(ev.start);
          const width = Math.max(0.8, dateToPct(ev.end) - left);
          const status = getStatus(ev, now);
          return (
            <div
              key={ev.id}
              className="absolute top-0 h-full"
              style={{
                left: `${left}%`,
                width: `${width}%`,
                backgroundColor: status === "upcoming" ? "rgba(255,255,255,0.14)" : ev.color,
              }}
            >
              {status === "active" && (
                <motion.div
                  className="absolute inset-0"
                  style={{ backgroundColor: ev.color }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
            </div>
          );
        })}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-1 h-4 rounded-full bg-foreground shadow-lg z-10"
          style={{ left: `${cursorPct}%` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      </div>
      <div className="text-[10px] font-mono text-muted-foreground text-right mb-8">
        ↑ position réelle dans le temps (durées proportionnelles)
      </div>

      {/* Fixed-grid event columns — guarantees no label overlap regardless of date proximity */}
      <div className="overflow-x-auto pb-2 -mx-1 px-1">
        <div
          className="grid gap-2 min-w-[920px] md:min-w-0"
          style={{ gridTemplateColumns: `repeat(${EVENTS.length}, minmax(0, 1fr))` }}
        >
          {EVENTS.map((ev, i) => {
            const status = getStatus(ev, now);
            const isHovered = hovered === ev.id;
            const isCursorHere = i === activeIndex;
            return (
              <div key={ev.id} className="relative flex flex-col items-stretch">
                {/* Cursor flag above the current column */}
                <div className="h-6 flex items-end justify-center mb-1.5">
                  <AnimatePresence>
                    {isCursorHere && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="px-2 py-0.5 rounded-md bg-primary text-primary-foreground text-[10px] font-mono font-bold whitespace-nowrap shadow-md shadow-primary/30"
                      >
                        Aujourd'hui
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Segment chip */}
                <button
                  type="button"
                  onMouseEnter={() => setHovered(ev.id)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(ev.id)}
                  onBlur={() => setHovered(null)}
                  className="relative h-2 rounded-full mb-3 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  style={{ backgroundColor: status === "upcoming" ? "rgba(255,255,255,0.14)" : ev.color }}
                >
                  {status === "active" && (
                    <motion.span
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: ev.color }}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}
                </button>

                {/* Label block — fixed column width, never overlaps a neighbor */}
                <div
                  className="flex flex-col gap-1 cursor-pointer select-none"
                  onMouseEnter={() => setHovered(ev.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="flex items-start gap-1.5">
                    {status === "done" ? (
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: ev.color }} />
                    ) : status === "active" ? (
                      <span className="relative flex h-3.5 w-3.5 shrink-0 mt-0.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ backgroundColor: ev.color }} />
                        <Circle className="relative w-3.5 h-3.5 fill-current" style={{ color: ev.color }} />
                      </span>
                    ) : (
                      <Circle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-muted-foreground/40" />
                    )}
                    <span className={`text-[11px] font-bold leading-tight ${status === "upcoming" ? "text-muted-foreground" : ""}`}>
                      {ev.label}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground ml-5">
                    {fmtDate(ev.start)} – {fmtDate(ev.end)}
                  </span>
                </div>

                {/* Hover tooltip */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute z-30 top-full mt-2 left-0 w-56 p-3 rounded-lg border border-border/60 bg-card shadow-xl shadow-black/30"
                    >
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: ev.color }} />
                        <span className="text-xs font-bold">{ev.label}</span>
                      </div>
                      <div className="text-[10px] font-mono text-muted-foreground mb-2">
                        {fmtDate(ev.start)} → {fmtDate(ev.end)}
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">{ev.description}</p>
                      <div className="mt-2 pt-2 border-t border-border/40">
                        <span
                          className="text-[10px] font-bold uppercase tracking-wide"
                          style={{ color: status === "upcoming" ? "var(--muted-foreground)" : ev.color }}
                        >
                          {status === "done" ? "✓ " : status === "active" ? "● " : ""}{STATUS_LABEL[status]}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 pt-4 mt-2 border-t border-border/40">
        <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground"><CheckCircle2 className="w-3 h-3 text-primary" /> Terminé</span>
        <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground"><Circle className="w-3 h-3 fill-current text-yellow-400" /> En cours</span>
        <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground"><Circle className="w-3 h-3 text-muted-foreground/40" /> À venir</span>
      </div>
    </div>
  );
};
