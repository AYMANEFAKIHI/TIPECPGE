import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Calculator, Check, X } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { useSEO } from "@/lib/useSEO";

const FILIERES = [
  {
    code: "MP",
    name: "Mathématiques et Physique",
    color: "#3b82f6",
    desc: "La filière la plus généraliste, avec une forte dominante mathématique. Idéale pour viser les écoles les plus sélectives.",
    matieres: [
      { label: "Mathématiques I", coeff: 7 },
      { label: "Mathématiques II", coeff: 7 },
      { label: "Physique I", coeff: 5 },
      { label: "Physique II", coeff: 5 },
      { label: "Sciences Industrielles", coeff: 4 },
      { label: "Chimie", coeff: 3 },
      { label: "Informatique", coeff: 3 },
    ],
    places: 2917,
    debouches: ["EMI", "EHTP", "ENSIAS", "INPT", "ENSMR", "INSEA"],
    pourQui: ["Tu aimes les maths abstraites", "Tu veux le plus large choix d'écoles", "Tu es à l'aise avec la théorie pure"],
    pasPourQui: ["Tu préfères les applications concrètes", "Les maths abstraites ne te motivent pas"],
  },
  {
    code: "PSI",
    name: "Physique et Sciences de l'Ingénieur",
    color: "#22c55e",
    desc: "Un équilibre entre physique appliquée et sciences industrielles — parfaite pour les futurs ingénieurs orientés conception et systèmes.",
    matieres: [
      { label: "Sciences Industrielles", coeff: 6 },
      { label: "Mathématiques I", coeff: 5.5 },
      { label: "Mathématiques II", coeff: 5.5 },
      { label: "Physique I", coeff: 5.5 },
      { label: "Physique II", coeff: 5.5 },
      { label: "Chimie", coeff: 3 },
      { label: "Informatique", coeff: 3 },
    ],
    places: 1003,
    debouches: ["ENSEM", "ENSMR", "EM6ISS", "Réseau ENSA", "Réseau FST"],
    pourQui: ["Tu aimes comprendre comment les systèmes fonctionnent", "Tu es attiré par la mécanique et l'électronique", "Tu veux un bon équilibre théorie/pratique"],
    pasPourQui: ["Tu veux te spécialiser uniquement en maths pures", "Les sciences industrielles ne t'intéressent pas"],
  },
  {
    code: "TSI",
    name: "Technologie et Sciences Industrielles",
    color: "#f59e0b",
    desc: "Pour les bacheliers STI2D souhaitant poursuivre vers l'ingénierie avec une approche très orientée technologie et conception.",
    matieres: [
      { label: "Technologies & Sciences Industrielles", coeff: 7 },
      { label: "Mathématiques I", coeff: 6 },
      { label: "Mathématiques II", coeff: 6 },
      { label: "Physique I", coeff: 5 },
      { label: "Physique II", coeff: 5 },
      { label: "Informatique", coeff: 3 },
      { label: "Chimie", coeff: 2 },
    ],
    places: 670,
    debouches: ["AIAC", "ESITH", "Réseau ENSA", "Réseau FST", "EHTP"],
    pourQui: ["Tu viens d'un bac technologique (STI2D)", "Tu es passionné de technologie concrète", "Tu veux une voie reconnue vers l'ingénierie"],
    pasPourQui: ["Tu veux viser uniquement les écoles les plus sélectives", "Tu préfères les mathématiques pures"],
  },
];

export default function Filieres() {
  useSEO();
  return (
    <Layout>
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-4 border border-primary/20">
              filieres.cnc2026
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">Filières MP, PSI, TSI</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">Comprends les différences pour choisir ta voie ou simplement situer la tienne.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {FILIERES.map((f, i) => (
              <motion.div
                key={f.code}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm overflow-hidden"
              >
                <div className="h-1.5" style={{ backgroundColor: f.color }} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-black font-mono" style={{ color: f.color }}>{f.code}</span>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-muted/50 text-muted-foreground">{f.places.toLocaleString("fr-FR")} places</span>
                  </div>
                  <h2 className="text-sm font-bold mb-3">{f.name}</h2>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-5">{f.desc}</p>

                  <div className="mb-5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Coefficients principaux</div>
                    <div className="space-y-1.5">
                      {f.matieres.map((m) => (
                        <div key={m.label} className="flex justify-between text-xs">
                          <span className="text-muted-foreground">{m.label}</span>
                          <span className="font-mono font-bold" style={{ color: f.color }}>{m.coeff}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Débouchés principaux</div>
                    <div className="flex flex-wrap gap-1.5">
                      {f.debouches.map((d) => (
                        <span key={d} className="text-[10px] font-mono px-2 py-1 rounded bg-muted/40 border border-border/40">{d}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-primary mb-2">Cette filière est pour toi si...</div>
                    <div className="space-y-1.5">
                      {f.pourQui.map((p) => (
                        <div key={p} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                          <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" /> {p}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-red-400 mb-2">Pas idéal si...</div>
                    <div className="space-y-1.5">
                      {f.pasPourQui.map((p) => (
                        <div key={p} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                          <X className="w-3 h-3 text-red-400 shrink-0 mt-0.5" /> {p}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA to calculator */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-10 rounded-xl border border-primary/30 bg-primary/5 p-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Calculator className="w-6 h-6 text-primary shrink-0" />
              <div>
                <div className="font-bold text-sm">Connais déjà ta filière ?</div>
                <div className="text-xs text-muted-foreground">Calcule ta note finale estimée avec les coefficients officiels.</div>
              </div>
            </div>
            <Link href="/calculateur" className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity shrink-0">
              Calculateur de notes <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
