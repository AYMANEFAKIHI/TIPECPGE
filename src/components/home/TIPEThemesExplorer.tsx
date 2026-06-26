"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Atom, Cpu, Cog, Sigma, Beaker } from "lucide-react";

const DISCIPLINES = [
  {
    id: "chimie", label: "Chimie", icon: Beaker, color: "#f59e0b",
    themes: [
      { name: "Chimie Analytique", kw: "Spectroscopies, Chromatographies, Adsorption, Analyse élémentaire, Électrochimie" },
      { name: "Chimie Théorique - Générale", kw: "Atomistique, Chimie quantique, Dynamique Moléculaire, Modélisation, Cinétique, Thermodynamique, Thermochimie, Chimie nucléaire/radiochimie" },
      { name: "Chimie Organique", kw: "Mécanismes réactionnels, Stéréochimie, Conformation, Synthèse, Purification, Biochimie, Polymères" },
      { name: "Chimie Inorganique", kw: "Synthèse (métaux, alliages, céramiques, semi-conducteurs), Chimie en solution, Liaisons chimiques, Cristallographie" },
      { name: "Génie Chimique", kw: "Opérations unitaires, Production industrielle, Changements d'échelle, Bilans matière et énergie" },
    ],
  },
  {
    id: "info", label: "Informatique", icon: Cpu, color: "#3b82f6",
    themes: [
      { name: "Informatique pratique", kw: "Programmation, Intelligence artificielle, Machine learning, Réseaux de neurones, Algorithmes génétiques, Big data, Cloud computing, Systèmes d'exploitation" },
      { name: "Informatique Théorique", kw: "Algorithmique, Structures de données, Complexité, Théorie des langages, Machines de Turing, Cryptographie (RSA), Codage, Parallélisme" },
      { name: "Technologies informatiques", kw: "Architecture des ordinateurs, Périphériques, Processeurs, Systèmes embarqués, Robotique, Capteurs" },
    ],
  },
  {
    id: "si", label: "Sciences Industrielles", icon: Cog, color: "#8b5cf6",
    themes: [
      { name: "Traitement du Signal", kw: "Traitement d'image, Analyse spectrale, Échantillonnage temporel ou spatial" },
      { name: "Génie Électrique", kw: "Électrotechnique, Télécommunications, Génie électronique, Électronique de puissance" },
      { name: "Génie Mécanique", kw: "Conception de produit, Génie civil, Automatisation, Métrologie, CAO, Maintenance, RDM, Métallurgie" },
      { name: "Génie Énergétique", kw: "Production, Transport, Conversion et utilisation de l'énergie, Énergies renouvelables" },
      { name: "Automatique", kw: "Asservissement, Identification, Estimation, Observation" },
      { name: "Électronique", kw: "Électronique analogique, numérique, informatique industrielle, micro-électronique" },
    ],
  },
  {
    id: "math", label: "Mathématiques", icon: Sigma, color: "#ef4444",
    themes: [
      { name: "Géométrie", kw: "Espaces métriques, hilbertiens, Géométrie euclidienne/projective/hyperbolique, Topologie différentielle, Trigonométrie" },
      { name: "Algèbre", kw: "Arithmétique, Combinatoire, Théorie des nombres, Groupes/anneaux/corps, Algèbre linéaire, Courbes elliptiques" },
      { name: "Analyse", kw: "Analyse de Fourier, Laplace, Équations différentielles (EDO/EDP), Variable complexe, Systèmes dynamiques" },
      { name: "Mathématiques Appliquées", kw: "Mathématiques discrètes, Graphes, Flots maximaux, Automates cellulaires, Percolation, Optimisation" },
      { name: "Autres (Proba/Stats)", kw: "Probabilités, Statistiques, Chaînes de Markov, Calcul stochastique, Files d'attente, Méthodes Monte Carlo, Biomathématiques" },
    ],
  },
  {
    id: "physique", label: "Physique", icon: Atom, color: "#22c55e",
    themes: [
      { name: "Physique Théorique", kw: "Physique quantique, Particules élémentaires, Relativité, Espace-temps, Physique statistique, Boltzmann, Physique nucléaire" },
      { name: "Mécanique", kw: "Mécanique newtonienne, Mécanique des fluides, Navier-Stokes, Turbulences, Microfluidique, Mécanique des matériaux" },
      { name: "Physique de la Matière", kw: "Cristallographie, Ferromagnétisme, Piézoélectricité, Supraconducteur, Thermodynamique, Diagrammes de phases, Plasmas" },
      { name: "Physique Ondulatoire", kw: "Optique, Diffraction, Interférence, Laser, Électromagnétisme, Équations de Maxwell, Acoustique" },
      { name: "Physique Interdisciplinaire", kw: "Astrophysique, Exoplanètes, Biophysique, Géophysique, Sismologie, Spectrométrie de masse, Nanotechnologies" },
    ],
  },
];

export const TIPEThemesExplorer = () => {
  const [search, setSearch] = useState("");
  const [activeDiscipline, setActiveDiscipline] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return DISCIPLINES
      .filter((d) => activeDiscipline === "all" || d.id === activeDiscipline)
      .map((d) => ({
        ...d,
        themes: d.themes.filter(
          (t) => !q || t.name.toLowerCase().includes(q) || t.kw.toLowerCase().includes(q)
        ),
      }))
      .filter((d) => d.themes.length > 0);
  }, [search, activeDiscipline]);

  const totalThemes = DISCIPLINES.reduce((acc, d) => acc + d.themes.length, 0);

  return (
    <section id="tipe-themes" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-4 border border-primary/20">
            tipe.thematic_positions
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3">Positionnements thématiques</h2>
          <p className="text-muted-foreground text-lg">{totalThemes} thèmes officiels — choisis-en jusqu'à 3, par ordre de priorité décroissante.</p>
        </motion.div>

        <div className="mb-6 space-y-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Rechercher un thème ou mot-clé (ex: machine learning, RDM, EDP...)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm text-sm font-mono focus:outline-none focus:ring-1 focus:ring-primary/50"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveDiscipline("all")}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${activeDiscipline === "all" ? "bg-primary text-primary-foreground border-primary" : "border-border/60 text-muted-foreground hover:border-border"}`}
            >
              Toutes disciplines
            </button>
            {DISCIPLINES.map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveDiscipline(d.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${activeDiscipline === d.id ? "text-white border-transparent" : "border-border/60 text-muted-foreground hover:border-border"}`}
                style={activeDiscipline === d.id ? { backgroundColor: d.color } : {}}
              >
                <d.icon className="w-3 h-3" /> {d.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filtered.map((d) => (
            <motion.div key={d.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${d.color}1a`, border: `1px solid ${d.color}40` }}>
                  <d.icon className="w-4 h-4" style={{ color: d.color }} />
                </div>
                <h3 className="font-bold text-lg" style={{ color: d.color }}>{d.label}</h3>
                <span className="text-xs font-mono text-muted-foreground">({d.themes.length} thème{d.themes.length > 1 ? "s" : ""})</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {d.themes.map((t) => (
                  <div key={t.name} className="p-4 rounded-lg border border-border/40 bg-muted/20">
                    <div className="text-sm font-bold mb-1.5">{t.name}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{t.kw}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-10 text-muted-foreground">
              <Search className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <div>Aucun thème ne correspond à cette recherche.</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
