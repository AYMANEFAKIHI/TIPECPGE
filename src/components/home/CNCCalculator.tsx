"use client";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Calculator, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

type Filiere = "MP" | "PSI" | "TSI";

const MATIERES: Record<Filiere, { key: string; label: string; coeff: number; isSpec: boolean }[]> = {
  MP: [
    { key: "math1", label: "Mathématiques I", coeff: 7, isSpec: true },
    { key: "math2", label: "Mathématiques II", coeff: 7, isSpec: true },
    { key: "phys1", label: "Physique I", coeff: 5, isSpec: true },
    { key: "phys2", label: "Physique II", coeff: 5, isSpec: true },
    { key: "chimie", label: "Chimie", coeff: 3, isSpec: true },
    { key: "info", label: "Informatique", coeff: 3, isSpec: true },
    { key: "si", label: "Sciences Industrielles", coeff: 4, isSpec: true },
    { key: "arabe", label: "Culture Arabe & Traduction", coeff: 3, isSpec: false },
    { key: "francais", label: "Français", coeff: 4, isSpec: false },
    { key: "anglais", label: "Anglais", coeff: 3, isSpec: false },
  ],
  PSI: [
    { key: "math1", label: "Mathématiques I", coeff: 5.5, isSpec: true },
    { key: "math2", label: "Mathématiques II", coeff: 5.5, isSpec: true },
    { key: "phys1", label: "Physique I", coeff: 5.5, isSpec: true },
    { key: "phys2", label: "Physique II", coeff: 5.5, isSpec: true },
    { key: "chimie", label: "Chimie", coeff: 3, isSpec: true },
    { key: "info", label: "Informatique", coeff: 3, isSpec: true },
    { key: "si", label: "Sciences Industrielles", coeff: 6, isSpec: true },
    { key: "arabe", label: "Culture Arabe & Traduction", coeff: 3, isSpec: false },
    { key: "francais", label: "Français", coeff: 4, isSpec: false },
    { key: "anglais", label: "Anglais", coeff: 3, isSpec: false },
  ],
  TSI: [
    { key: "math1", label: "Mathématiques I", coeff: 6, isSpec: true },
    { key: "math2", label: "Mathématiques II", coeff: 6, isSpec: true },
    { key: "phys1", label: "Physique I", coeff: 5, isSpec: true },
    { key: "phys2", label: "Physique II", coeff: 5, isSpec: true },
    { key: "chimie", label: "Chimie", coeff: 2, isSpec: true },
    { key: "info", label: "Informatique", coeff: 3, isSpec: true },
    { key: "tsi", label: "Technologies & Sciences Industrielles", coeff: 7, isSpec: true },
    { key: "arabe", label: "Culture Arabe & Traduction", coeff: 3, isSpec: false },
    { key: "francais", label: "Français", coeff: 4, isSpec: false },
    { key: "anglais", label: "Anglais", coeff: 3, isSpec: false },
  ],
};

const FILIERE_TABS: Filiere[] = ["MP", "PSI", "TSI"];

export const CNCCalculator = () => {
  const [filiere, setFiliere] = useState<Filiere>("MP");
  const [grades, setGrades] = useState<Record<string, string>>({});
  const [tipe, setTipe] = useState("");

  const setGrade = useCallback((key: string, val: string) => {
    setGrades((prev) => ({ ...prev, [key]: val }));
  }, []);

  const mats = MATIERES[filiere];

  // Compute
  let totalPts = 0, totalCoeff = 0;
  let specPts = 0, specCoeff = 0;
  let hasZero = false;
  let allFilled = true;

  mats.forEach((m) => {
    const raw = grades[`${filiere}_${m.key}`];
    if (!raw || raw === "") { allFilled = false; return; }
    const v = parseFloat(raw);
    if (isNaN(v)) return;
    if (v === 0) hasZero = true;
    totalPts += v * m.coeff;
    totalCoeff += m.coeff;
    if (m.isSpec) { specPts += v * m.coeff; specCoeff += m.coeff; }
  });

  const writtenAvg = totalCoeff > 0 ? totalPts / totalCoeff : null;
  const specAvg = specCoeff > 0 ? specPts / specCoeff : null;
  const tipeVal = tipe !== "" ? parseFloat(tipe) : null;

  const finalScore =
    writtenAvg !== null && tipeVal !== null
      ? (writtenAvg * 44 + tipeVal * 8) / 52
      : null;

  const isEliminated = hasZero;
  const notAdmissible = !hasZero && specAvg !== null && specAvg < 4;
  const isOk = !isEliminated && !notAdmissible && specAvg !== null && specAvg >= 4;

  const inputKey = (key: string) => `${filiere}_${key}`;

  return (
    <section id="cnc-calculateur" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-4 border border-primary/20">
            <Calculator className="w-3 h-3" /> cnc2026.calculator
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3">Calculateur de notes officiel</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">Coefficients officiels CNC 2026 — Vérifie ton admissibilité et ta note finale.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Input panel */}
          <div className="lg:col-span-2 rounded-xl border border-border/60 bg-card/80 backdrop-blur-xl overflow-hidden">
            <div className="h-0.5 bg-gradient-to-r from-primary via-accent to-primary" />
            <div className="flex items-center gap-2 px-5 py-3 border-b border-border/50 bg-muted/30">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary/70" />
              <span className="text-xs font-mono text-muted-foreground ml-2">notes_cnc2026.calc</span>
            </div>
            <div className="p-5">
              {/* Filiere tabs */}
              <div className="flex gap-2 mb-6">
                {FILIERE_TABS.map((f) => (
                  <button
                    key={f}
                    onClick={() => { setFiliere(f); setGrades({}); setTipe(""); }}
                    className={`px-5 py-2 rounded-lg text-sm font-bold font-mono border transition-all ${
                      filiere === f
                        ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                        : "border-border/60 text-muted-foreground hover:text-foreground hover:border-border"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* Grade inputs */}
              <div className="space-y-2 mb-5">
                <div className="grid grid-cols-12 text-xs font-mono text-muted-foreground px-1 mb-1">
                  <span className="col-span-6">Matière</span>
                  <span className="col-span-2 text-center">Coeff.</span>
                  <span className="col-span-2 text-center">Type</span>
                  <span className="col-span-2 text-center">Note /20</span>
                </div>
                {mats.map((m) => {
                  const key = inputKey(m.key);
                  const val = grades[key] ?? "";
                  const num = val !== "" ? parseFloat(val) : null;
                  const isZero = num === 0;
                  return (
                    <div
                      key={m.key}
                      className={`grid grid-cols-12 items-center gap-2 px-3 py-2.5 rounded-lg border transition-colors ${
                        isZero ? "border-red-500/40 bg-red-500/5" : "border-border/40 bg-muted/20 hover:border-border/70"
                      }`}
                    >
                      <span className="col-span-6 text-sm font-medium">{m.label}</span>
                      <span className="col-span-2 text-center text-sm font-mono font-bold text-primary">{m.coeff}</span>
                      <span className="col-span-2 text-center">
                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${m.isSpec ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                          {m.isSpec ? "Spéc." : "Langue"}
                        </span>
                      </span>
                      <div className="col-span-2 flex justify-center">
                        <input
                          type="number"
                          min={0}
                          max={20}
                          step={0.25}
                          value={val}
                          onChange={(e) => setGrade(key, e.target.value)}
                          placeholder="—"
                          className={`w-16 text-center py-1.5 rounded-md border text-sm font-mono bg-background outline-none focus:ring-1 focus:ring-primary/50 transition-all ${
                            isZero ? "border-red-500 text-red-400" : "border-border/60 text-foreground"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* TIPE input */}
              <div className="border border-border/60 rounded-lg p-4 bg-muted/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold">Note TIPE (oral)</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Coefficient 8 — Sur 20</div>
                  </div>
                  <input
                    type="number"
                    min={0}
                    max={20}
                    step={0.25}
                    value={tipe}
                    onChange={(e) => setTipe(e.target.value)}
                    placeholder="—"
                    className="w-20 text-center py-2 rounded-md border border-border/60 text-sm font-mono bg-background outline-none focus:ring-1 focus:ring-primary/50"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Result panel */}
          <div className="flex flex-col gap-4">
            {/* Main result */}
            <div className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-5">
              <div className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-wider">Résultat</div>

              {writtenAvg !== null ? (
                <>
                  <div className="mb-4">
                    <div className="text-xs text-muted-foreground mb-1">Moyenne écrite pondérée</div>
                    <div className="text-3xl font-black font-mono text-primary">{writtenAvg.toFixed(2)}<span className="text-base text-muted-foreground">/20</span></div>
                    <div className="text-xs text-muted-foreground mt-0.5">Points écrit : {(writtenAvg * 44).toFixed(1)} (×44)</div>
                  </div>

                  {tipeVal !== null && (
                    <div className="mb-4 pt-4 border-t border-border/40">
                      <div className="text-xs text-muted-foreground mb-1">Note TIPE</div>
                      <div className="text-2xl font-black font-mono text-accent">{tipeVal.toFixed(2)}<span className="text-sm text-muted-foreground">/20</span></div>
                      <div className="text-xs text-muted-foreground mt-0.5">Points TIPE : {(tipeVal * 8).toFixed(1)} (×8)</div>
                    </div>
                  )}

                  {finalScore !== null && (
                    <div className="pt-4 border-t border-border/40">
                      <div className="text-xs text-muted-foreground mb-1">Note finale estimée</div>
                      <div className="text-4xl font-black font-mono text-foreground">{finalScore.toFixed(2)}<span className="text-base text-muted-foreground">/20</span></div>
                      <div className="text-xs text-muted-foreground mt-1">= (Écrit×44 + TIPE×8) / 52</div>
                    </div>
                  )}

                  {/* Status */}
                  <div className="mt-4 pt-4 border-t border-border/40">
                    {isEliminated && (
                      <div className="flex items-start gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-bold text-red-400">ÉLIMINÉ</div>
                          <div className="text-xs text-red-400/80 mt-0.5">Une note zéro est éliminatoire</div>
                        </div>
                      </div>
                    )}
                    {notAdmissible && (
                      <div className="flex items-start gap-2 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                        <AlertTriangle className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-bold text-yellow-400">NON ADMISSIBLE</div>
                          <div className="text-xs text-yellow-400/80 mt-0.5">Moy. spécialité {specAvg?.toFixed(2)}/20 &lt; seuil 4/20</div>
                        </div>
                      </div>
                    )}
                    {isOk && (
                      <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/10 border border-primary/30">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-bold text-primary">Seuil atteint ✓</div>
                          <div className="text-xs text-primary/80 mt-0.5">Moy. spécialité {specAvg?.toFixed(2)}/20 ≥ 4/20</div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="py-8 text-center text-muted-foreground">
                  <Calculator className="w-10 h-10 mx-auto mb-3 opacity-30" />
                  <div className="text-sm">Renseigne tes notes pour calculer</div>
                </div>
              )}
            </div>

            {/* Coefficients recap */}
            <div className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-5">
              <div className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-wider">Coefficients {filiere}</div>
              <div className="space-y-1.5">
                {mats.map((m) => (
                  <div key={m.key} className="flex justify-between text-xs">
                    <span className="text-muted-foreground truncate mr-2">{m.label}</span>
                    <span className="font-mono font-bold text-primary shrink-0">{m.coeff}</span>
                  </div>
                ))}
                <div className="pt-2 border-t border-border/40 flex justify-between text-xs">
                  <span className="font-bold">Total écrit</span>
                  <span className="font-mono font-bold text-primary">44</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="font-bold">TIPE</span>
                  <span className="font-mono font-bold text-accent">8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
