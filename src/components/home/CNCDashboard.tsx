"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle, Clock, CheckCircle2,
  XCircle, Info
} from "lucide-react";

const TARGET_DATE = new Date("2026-05-14T08:00:00");

const alerts = [
  { type: "danger", icon: XCircle, title: "Note zéro = élimination définitive", desc: "Toute absence à une épreuve ou note 0 entraîne l'élimination du concours" },
  { type: "warning", icon: Clock, title: "Retard = note zéro automatique", desc: "Il est impossible de rejoindre la salle après le début de l'épreuve" },
  { type: "info", icon: Info, title: "Seuil spécialité : 4/20 minimum", desc: "Moyenne pondérée des matières scientifiques inférieure à 4/20 → non admissible" },
  { type: "warning", icon: AlertTriangle, title: "GSM interdit même éteint", desc: "Tout téléphone en salle entraîne une exclusion immédiate du concours" },
];

export const CNCDashboard = () => {
  const [countdown, setCountdown] = useState({ j: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = TARGET_DATE.getTime() - Date.now();
      if (diff <= 0) { setCountdown({ j: 0, h: 0, m: 0, s: 0 }); return; }
      setCountdown({
        j: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const alertColors: Record<string, string> = {
    danger: "border-red-500/30 bg-red-500/5 text-red-400",
    warning: "border-yellow-500/30 bg-yellow-500/5 text-yellow-400",
    info: "border-primary/30 bg-primary/5 text-primary",
  };

  return (
    <section id="cnc-dashboard" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-4 border border-primary/20">
            cnc2026.dashboard
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3">Dashboard CNC 2026</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">Toutes les informations essentielles pour ne rien manquer.</p>
        </motion.div>

        {/* Countdown */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 mb-6">
          <div className="flex items-center gap-2 mb-5">
            <Clock className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm font-semibold text-muted-foreground">Compte à rebours — Épreuves écrites (14 mai 2026)</span>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[
              { val: countdown.j, unit: "Jours" },
              { val: countdown.h, unit: "Heures" },
              { val: countdown.m, unit: "Minutes" },
              { val: countdown.s, unit: "Secondes" },
            ].map((c) => (
              <div key={c.unit} className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-center">
                <div className="text-3xl md:text-4xl font-black font-mono text-primary">{String(c.val).padStart(2, "0")}</div>
                <div className="text-xs font-mono text-muted-foreground mt-1 uppercase tracking-wider">{c.unit}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Alerts */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 mb-6">
          <div className="flex items-center gap-2 mb-5">
            <AlertTriangle className="w-4 h-4 text-yellow-400" />
            <span className="font-mono text-sm font-semibold text-muted-foreground">Alertes importantes</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {alerts.map((a) => (
              <div key={a.title} className={`rounded-lg border p-3 ${alertColors[a.type]}`}>
                <div className="flex items-start gap-2.5">
                  <a.icon className="w-4 h-4 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold">{a.title}</div>
                    <div className="text-xs opacity-80 mt-0.5 leading-relaxed">{a.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { val: "4 590", label: "Places totales", sub: "Toutes filières confondues" },
            { val: "2 917", label: "Places MP", sub: "63.5% des places" },
            { val: "1 003", label: "Places PSI", sub: "21.8% des places" },
            { val: "670", label: "Places TSI", sub: "14.6% des places" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-border/60 bg-card/70 p-5 text-center">
              <div className="text-2xl md:text-3xl font-black font-mono text-primary mb-1">{s.val}</div>
              <div className="text-sm font-semibold">{s.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
