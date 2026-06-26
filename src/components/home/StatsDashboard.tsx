"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, Compass } from "lucide-react";

const SCHOOL_SEATS = [
  { name: "R.ENSA (13 écoles)", mp: 678, psi: 235, tsi: 118 },
  { name: "EMI", mp: 406, psi: 72, tsi: 70 },
  { name: "EM6ISS", mp: 165, psi: 100, tsi: 75 },
  { name: "EHTP", mp: 254, psi: 33, tsi: 13 },
  { name: "ENSIAS", mp: 200, psi: 37, tsi: 44 },
  { name: "ENSMR", mp: 175, psi: 75, tsi: 50 },
  { name: "R.FST (8 écoles)", mp: 133, psi: 85, tsi: 43 },
  { name: "INSEA", mp: 172, psi: 44, tsi: 0 },
  { name: "ESITH", mp: 114, psi: 66, tsi: 71 },
  { name: "ENSEM", mp: 105, psi: 88, tsi: 65 },
];

const INTERESTS = [
  { id: "ia", label: "🤖 IA & Machine Learning" },
  { id: "data", label: "📊 Data Science" },
  { id: "cyber", label: "🔒 Cybersécurité" },
  { id: "civil", label: "🏗️ Génie Civil" },
  { id: "telecom", label: "📡 Télécom & Réseaux" },
  { id: "finance", label: "💹 Finance & Actuariat" },
  { id: "indus", label: "⚙️ Génie Industriel" },
  { id: "aero", label: "✈️ Aéronautique" },
  { id: "energie", label: "⚡ Énergie & Environnement" },
  { id: "biomed", label: "🏥 Biomédical" },
  { id: "meca", label: "🔧 Mécanique" },
  { id: "info", label: "💻 Informatique Générale" },
];

const SCHOOL_ORIENT = [
  { sigle: "ENSIAS", name: "ENSIAS", city: "Rabat", total: 281, domains: ["ia","data","cyber","info"], paid: false },
  { sigle: "INPT", name: "INPT", city: "Rabat", total: 246, domains: ["cyber","data","telecom","info","iot"], paid: false },
  { sigle: "EMI", name: "EMI", city: "Rabat", total: 548, domains: ["civil","elec","info","indus","meca","aero"], paid: false },
  { sigle: "INSEA", name: "INSEA", city: "Rabat", total: 216, domains: ["finance","data","stats","eco","ia"], paid: false },
  { sigle: "ENSMR", name: "Mines Rabat", city: "Rabat", total: 300, domains: ["civil","meca","indus","energie","mines"], paid: false },
  { sigle: "EHTP", name: "EHTP", city: "Casablanca", total: 300, domains: ["civil","elec","info","eau","transport"], paid: false },
  { sigle: "ENSEM", name: "ENSEM", city: "Casablanca", total: 258, domains: ["elec","meca","indus","auto","energie"], paid: false },
  { sigle: "ESI", name: "ESI", city: "Rabat", total: 122, domains: ["cyber","data","info"], paid: false },
  { sigle: "AIAC", name: "AIAC", city: "Casablanca", total: 138, domains: ["aero","elec","info","indus"], paid: false },
  { sigle: "IAV", name: "IAV Hassan II", city: "Rabat", total: 43, domains: ["eau","civil","env","agri"], paid: false },
  { sigle: "R.ENSA", name: "Réseau ENSA", city: "National", total: 1031, domains: ["civil","elec","info","ia","indus","meca","eau","aero","energie","cyber"], paid: false },
  { sigle: "R.FST", name: "Réseau FST", city: "National", total: 261, domains: ["elec","meca","chimie","indus","info","finance","biomed"], paid: false },
  { sigle: "EM6ISS", name: "EM6ISS", city: "Plusieurs villes", total: 340, domains: ["biomed","info","ia","sante"], paid: true, fees: "55k MAD/an" },
  { sigle: "ISEM", name: "ISEM", city: "Casablanca", total: 80, domains: ["meca","civil","maritime"], paid: false },
];

const MAX_BAR = 1031;

export const StatsDashboard = () => {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [showRecs, setShowRecs] = useState(false);

  const toggle = (id: string) => {
    setSelected((prev) => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id); else n.add(id);
      return n;
    });
    setShowRecs(false);
  };

  const recommendations = SCHOOL_ORIENT
    .map((s) => ({ ...s, score: s.domains.filter((d) => selected.has(d)).length }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score || b.total - a.total)
    .slice(0, 6);

  return (
    <>
      {/* Stats */}
      <section id="cnc-stats" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-4 border border-primary/20">
              <BarChart3 className="w-3 h-3" /> cnc2026.statistics
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-3">Statistiques des places</h2>
            <p className="text-muted-foreground text-lg">Répartition officielle CNC 2026 — 4 590 places au total</p>
          </motion.div>

          {/* Bar chart by school */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 mb-6">
            <h3 className="font-bold mb-6 flex items-center gap-2 text-lg">Places par établissement (Top 10)</h3>
            <div className="space-y-4">
              {SCHOOL_SEATS.map((s) => {
                const total = s.mp + s.psi + s.tsi;
                return (
                  <div key={s.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium">{s.name}</span>
                      <span className="text-xs font-mono font-bold text-primary">{total} places</span>
                    </div>
                    <div className="flex h-5 rounded-full overflow-hidden gap-px" style={{ width: "100%" }}>
                      {s.mp > 0 && (
                        <div className="h-full bg-primary/80 flex items-center justify-center text-[9px] font-mono text-primary-foreground font-bold transition-all"
                          style={{ width: `${(s.mp / MAX_BAR) * 100}%` }}
                          title={`MP: ${s.mp}`}>
                          {s.mp > 30 ? `MP ${s.mp}` : ""}
                        </div>
                      )}
                      {s.psi > 0 && (
                        <div className="h-full bg-accent/80 flex items-center justify-center text-[9px] font-mono text-accent-foreground font-bold transition-all"
                          style={{ width: `${(s.psi / MAX_BAR) * 100}%` }}
                          title={`PSI: ${s.psi}`}>
                          {s.psi > 20 ? `PSI ${s.psi}` : ""}
                        </div>
                      )}
                      {s.tsi > 0 && (
                        <div className="h-full bg-yellow-500/80 flex items-center justify-center text-[9px] font-mono font-bold transition-all"
                          style={{ width: `${(s.tsi / MAX_BAR) * 100}%` }}
                          title={`TSI: ${s.tsi}`}>
                          {s.tsi > 20 ? `TSI ${s.tsi}` : ""}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-4 mt-5 pt-4 border-t border-border/40">
              <span className="flex items-center gap-2 text-xs text-muted-foreground"><span className="w-3 h-3 rounded-sm bg-primary/80 inline-block" />MP (2 917)</span>
              <span className="flex items-center gap-2 text-xs text-muted-foreground"><span className="w-3 h-3 rounded-sm bg-accent/80 inline-block" />PSI (1 003)</span>
              <span className="flex items-center gap-2 text-xs text-muted-foreground"><span className="w-3 h-3 rounded-sm bg-yellow-500/80 inline-block" />TSI (670)</span>
            </div>
          </motion.div>

          {/* Fees comparison */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-6">
            <h3 className="font-bold mb-4 text-lg">Frais de scolarité — Écoles payantes CNC 2026</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { name: "EIA", fees: "55 000 MAD/an", note: "Bourses selon mérite CNC", color: "yellow" },
                { name: "EM6ISS", fees: "55 000 MAD/an", note: "Bourses excellence & sociales (FM6SS)", color: "yellow" },
                { name: "ESITH", fees: "25 000 MAD/an", note: "Gratuit top 1000 MP / 200 PSI / 200 TSI", color: "green" },
                { name: "IST&I (UM6P)", fees: "78 750 MAD/an", note: "Bourses BUCS (social) + BE (excellence)", color: "red" },
                { name: "EAMR (Arts & Métiers)", fees: "50 000 MAD/an", note: "Grands Admis : exonéré S1-S3", color: "yellow" },
              ].map((e) => (
                <div key={e.name} className={`rounded-lg border p-4 ${e.color === "green" ? "border-primary/30 bg-primary/5" : e.color === "red" ? "border-red-500/30 bg-red-500/5" : "border-yellow-500/30 bg-yellow-500/5"}`}>
                  <div className="font-bold text-sm mb-1">{e.name}</div>
                  <div className={`text-lg font-black font-mono mb-1 ${e.color === "green" ? "text-primary" : e.color === "red" ? "text-red-400" : "text-yellow-400"}`}>{e.fees}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{e.note}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Orientation */}
      <section id="cnc-orientation" className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono font-semibold mb-4 border border-accent/20">
              <Compass className="w-3 h-3" /> cnc2026.orientation
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-3">Outil d'orientation</h2>
            <p className="text-muted-foreground text-lg">Sélectionne tes domaines d'intérêt → Reçois des recommandations personnalisées d'écoles.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 mb-6">
            <div className="flex flex-wrap gap-2 mb-5">
              {INTERESTS.map((i) => (
                <button
                  key={i.id}
                  onClick={() => toggle(i.id)}
                  className={`px-4 py-2 rounded-full text-sm border font-medium transition-all ${selected.has(i.id) ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20" : "border-border/60 text-muted-foreground hover:border-border hover:text-foreground"}`}
                >
                  {i.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => selected.size > 0 && setShowRecs(true)}
              disabled={selected.size === 0}
              className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors shadow-md shadow-primary/20"
            >
              Voir mes recommandations ({selected.size} intérêt{selected.size !== 1 ? "s" : ""})
            </button>
          </motion.div>

          {showRecs && recommendations.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
              {recommendations.map((r, i) => (
                <div key={r.sigle} className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-black font-mono text-primary text-sm shrink-0">
                      #{i + 1}
                    </div>
                    <div>
                      <div className="font-bold">{r.name} <span className="text-primary font-mono">({r.sigle})</span></div>
                      <div className="text-sm text-muted-foreground">{r.city} · {r.total} places · {r.paid ? <span className="text-yellow-400">{r.fees}</span> : <span className="text-primary">Gratuit</span>}</div>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {r.domains.filter((d) => selected.has(d)).map((d) => {
                          const interest = INTERESTS.find((i) => i.id === d);
                          return interest ? (
                            <span key={d} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-semibold">{interest.label}</span>
                          ) : null;
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-2xl font-black font-mono text-primary">{r.score}/{selected.size}</div>
                    <div className="text-xs text-muted-foreground">correspondances</div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {showRecs && recommendations.length === 0 && (
            <div className="text-center py-10 text-muted-foreground">
              <Compass className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <div>Aucune école ne correspond à ces critères. Essaie d'autres intérêts.</div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
