"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Users, BookOpen, ExternalLink } from "lucide-react";

const ALL_SCHOOLS = [
  { sigle: "EMI", name: "École Mohammadia d'Ingénieurs", city: "Rabat", mp: 406, psi: 72, tsi: 70, total: 548, paid: false, url: "www.emi.ac.ma", domains: ["civil","elec","info","indus","meca"], specs: ["Génie Civil","Génie Électrique","Génie Informatique & digitalisation","Génie Industriel","Génie Mécanique","Génie des Procédés","Génie Réseaux & Télécoms","Génie Minéral","Génie Modélisation & Info. Scientifique"] },
  { sigle: "EHTP", name: "École Hassania des Travaux Publics", city: "Casablanca", mp: 254, psi: 33, tsi: 13, total: 300, paid: false, url: "www.ehtp.ac.ma", domains: ["civil","elec","info","eau","transport"], specs: ["Civil Engineering","Computer Science","Electrical & Energy Engineering","Geomatics","Hydraulic & Water Resources","Materials Science","Mathematics & Systems","Meteorology","Transportation & Logistics"] },
  { sigle: "ENSEM", name: "École Nationale Supérieure d'Électricité et de Mécanique", city: "Casablanca", mp: 105, psi: 88, tsi: 65, total: 258, paid: false, url: "www.ensem.ac.ma", domains: ["elec","meca","indus","auto"], specs: ["Génie des Systèmes Électriques","Génie Systèmes Mécaniques","Automatique & Robotique","Génie Industriel","Génie Logiciel","Plasturgie Auto. & Aéro.","QMSI"] },
  { sigle: "ENSIAS", name: "École Nationale Supérieure d'Informatique et d'Analyse des Systèmes", city: "Rabat", mp: 200, psi: 37, tsi: 44, total: 281, paid: false, url: "www.ensias.um5.ac.ma", domains: ["ia","cyber","data","info"], specs: ["Intelligence Artificielle","Cybersécurité & Cloud","Data & Software Sciences","Génie Logiciel","Business Intelligence","Digital Finance","Smart Supply Chain"] },
  { sigle: "ENSMR", name: "École Nationale Supérieure des Mines de Rabat", city: "Rabat", mp: 175, psi: 75, tsi: 50, total: 300, paid: false, url: "www.mines-rabat.ma", domains: ["civil","meca","indus","energie","mines"], specs: ["Génie Civil & Minier","Génie des Matériaux","Génie des Mines & Environnement","Génie Électromécanique","Énergie & Procédés Industriels","Systèmes d'Info. & Production","Génie Industriel"] },
  { sigle: "INPT", name: "Institut National des Postes et Télécommunications", city: "Rabat", mp: 123, psi: 68, tsi: 55, total: 246, paid: false, url: "www.inpt.ac.ma", domains: ["cyber","data","telecom","info","iot"], specs: ["Cybersécurité & Confiance Numérique","Cloud & IoT","Data Science","Advanced Software Engineering","Smart ICT","Systèmes Embarqués"] },
  { sigle: "INSEA", name: "Institut National de Statistique et d'Économie Appliquée", city: "Rabat", mp: 172, psi: 44, tsi: 0, total: 216, paid: false, url: "www.insea.ac.ma", domains: ["finance","data","stats","eco"], specs: ["Actuariat-Finance","Biostatistique & Big Data","Data & Software Engineering","Data Science","Économie appliquée","Sciences de la Décision"] },
  { sigle: "AIAC", name: "Académie Internationale Mohammed VI de l'Aviation Civile", city: "Casablanca", mp: 78, psi: 30, tsi: 30, total: 138, paid: false, url: "www.aiac.ma", domains: ["aero","elec","info","indus"], specs: ["Génie Électrique Électronique & Télécoms","Génie Industriel & Productique","Génie Informatique"] },
  { sigle: "ESI", name: "École des Sciences de l'Information", city: "Rabat", mp: 100, psi: 22, tsi: 0, total: 122, paid: false, url: "www.esi.ac.ma", domains: ["cyber","data","info"], specs: ["Cyberdéfense & Sécurité SI","Ingénierie Information Numérique","Science des Données","Transformation Digitale"] },
  { sigle: "IAV", name: "Institut Agronomique et Vétérinaire Hassan II", city: "Rabat", mp: 23, psi: 10, tsi: 10, total: 43, paid: false, url: "www.iav.ac.ma", domains: ["eau","civil","env","agri"], specs: ["Génie Rural — Eau & Environnement","Génie Rural — Énergie & Agroéquipements","Sciences Géomatique & Topographie"] },
  { sigle: "ISEM", name: "Institut Supérieur d'Études Maritimes", city: "Casablanca", mp: 30, psi: 30, tsi: 20, total: 80, paid: false, url: "www.isem.ac.ma", domains: ["meca","civil","maritime"], specs: ["Sciences Navales","Mécanique Navale","Construction & Maintenance Navale"] },
  { sigle: "EM6ISS", name: "École Supérieure Mohammed VI d'Ingénieurs en Sciences de la Santé", city: "Casablanca / Rabat / Dakhla / Agadir", mp: 165, psi: 100, tsi: 75, total: 340, paid: true, fees: "55 000 MAD/an", url: "www.um6ss.ma", domains: ["biomed","info","ia","sante"], specs: ["Génie Biomédical","Génie Bio-Informatique","Génie Digital en Santé","Tech. Médicale & Pharma."] },
  { sigle: "ESITH", name: "École Supérieure des Industries du Textile et de l'Habillement", city: "Casablanca", mp: 114, psi: 66, tsi: 71, total: 251, paid: true, fees: "25 000 MAD/an*", url: "www.esith.ac.ma", domains: ["indus","info","chimie"], specs: ["Génie Industriel","Informatique & Management","Chimie & Matériaux","Textiles Intelligents"] },
  { sigle: "R.ENSA", name: "Réseau ENSA (13 écoles)", city: "National", mp: 678, psi: 235, tsi: 118, total: 1031, paid: false, url: "www.ensat.ac.ma", domains: ["civil","elec","info","ia","indus","meca","eau","aero"], specs: ["Génie Civil","Génie Informatique","Génie Électrique","Génie Mécatronique","IA & Data","Génie Industriel","Cybersécurité","Aéronautique","Énergie Renouvelable"] },
  { sigle: "R.FST", name: "Réseau FST (8 écoles)", city: "National", mp: 133, psi: 85, tsi: 43, total: 261, paid: false, url: "www.fstt.ac.ma", domains: ["elec","meca","chimie","indus","info","finance"], specs: ["Génie Électrique","Génie Mécanique","Agroalimentaire","Chimie","Biomédical","Finance & Actuariat","Logiciel & IA"] },
  { sigle: "EIA", name: "École d'Ingénieurs Abulcasis", city: "Rabat", mp: 19, psi: 5, tsi: 6, total: 30, paid: true, fees: "55 000 MAD/an", url: "www.uiass.ma", domains: ["info","chimie","pharma"], specs: ["Génie Informatique","Génie des Procédés Industriels & Pharmaceutiques"] },
  { sigle: "IST&I", name: "Institute of Science, Technology and Innovation (UM6P)", city: "Benguerir", mp: 7, psi: 3, tsi: 0, total: 10, paid: true, fees: "78 750 MAD/an", url: "physicsschool.um6p.ma", domains: ["physique","recherche"], specs: ["Ingénierie Physique"] },
  { sigle: "ERA", name: "École Royale de l'Air", city: "Marrakech", mp: 61, psi: 0, tsi: 0, total: 61, paid: false, url: "", domains: ["aero","elec"], specs: ["Recrutement interne uniquement (centre ERA)"] },
  { sigle: "ERN", name: "École Royale Navale", city: "Casablanca", mp: 74, psi: 0, tsi: 0, total: 74, paid: false, url: "", domains: ["maritime","meca"], specs: ["Recrutement interne uniquement (centre ERN)"] },
];

const DOMAIN_FILTERS = [
  { id: "all", label: "Toutes" },
  { id: "info", label: "Informatique" },
  { id: "ia", label: "IA & Data" },
  { id: "cyber", label: "Cybersécurité" },
  { id: "civil", label: "Génie Civil" },
  { id: "elec", label: "Électrique" },
  { id: "meca", label: "Mécanique" },
  { id: "indus", label: "Industriel" },
  { id: "finance", label: "Finance" },
  { id: "aero", label: "Aéro." },
  { id: "biomed", label: "Biomédical" },
];

export const SchoolsExplorer = () => {
  const [search, setSearch] = useState("");
  const [domain, setDomain] = useState("all");
  const [filiere, setFiliere] = useState<"all" | "MP" | "PSI" | "TSI">("all");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return ALL_SCHOOLS.filter((s) => {
      const matchSearch = !q || s.name.toLowerCase().includes(q) || s.sigle.toLowerCase().includes(q) || s.city.toLowerCase().includes(q) || s.specs.some((sp) => sp.toLowerCase().includes(q));
      const matchDomain = domain === "all" || s.domains.includes(domain);
      const matchFiliere = filiere === "all" || (filiere === "MP" && s.mp > 0) || (filiere === "PSI" && s.psi > 0) || (filiere === "TSI" && s.tsi > 0);
      return matchSearch && matchDomain && matchFiliere;
    });
  }, [search, domain, filiere]);

  return (
    <section id="cnc-ecoles" className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono font-semibold mb-4 border border-accent/20">
            <BookOpen className="w-3 h-3" /> cnc2026.schools
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3">Explorer les écoles</h2>
          <p className="text-muted-foreground text-lg">19 établissements · 4 590 places · Tous les détails CNC 2026</p>
        </motion.div>

        {/* Filters */}
        <div className="mb-6 space-y-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Rechercher une école, ville, spécialité..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm text-sm font-mono focus:outline-none focus:ring-1 focus:ring-primary/50"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {DOMAIN_FILTERS.map((d) => (
              <button
                key={d.id}
                onClick={() => setDomain(d.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${domain === d.id ? "bg-primary text-primary-foreground border-primary" : "border-border/60 text-muted-foreground hover:border-border"}`}
              >
                {d.label}
              </button>
            ))}
            <div className="ml-2 flex gap-1.5">
              {(["all","MP","PSI","TSI"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFiliere(f)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold border transition-all ${filiere === f ? "bg-accent text-accent-foreground border-accent" : "border-border/60 text-muted-foreground hover:border-border"}`}
                >
                  {f === "all" ? "Toutes filières" : f}
                </button>
              ))}
            </div>
          </div>
          <div className="text-xs font-mono text-muted-foreground">{filtered.length} école{filtered.length !== 1 ? "s" : ""} trouvée{filtered.length !== 1 ? "s" : ""}</div>
        </div>

        {/* Schools grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((s, i) => (
            <motion.div
              key={s.sigle}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.05, 0.4) }}
              className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-5 hover:border-primary/40 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-xs font-mono font-bold text-primary mb-0.5">{s.sigle}</div>
                  <div className="text-sm font-bold leading-snug">{s.name}</div>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full border shrink-0 ml-2 ${s.paid ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" : "bg-primary/10 text-primary border-primary/20"}`}>
                  {s.paid ? "Payant" : "Gratuit"}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                <MapPin className="w-3 h-3" /> {s.city}
              </div>

              {s.paid && s.fees && (
                <div className="text-xs font-mono text-yellow-400 mb-3">💰 {s.fees}</div>
              )}

              <div className="flex gap-2 mb-3">
                {s.mp > 0 && <span className="text-xs font-mono bg-muted/60 px-2 py-1 rounded border border-border/40"><span className="text-primary font-bold">MP</span> {s.mp}</span>}
                {s.psi > 0 && <span className="text-xs font-mono bg-muted/60 px-2 py-1 rounded border border-border/40"><span className="text-accent font-bold">PSI</span> {s.psi}</span>}
                {s.tsi > 0 && <span className="text-xs font-mono bg-muted/60 px-2 py-1 rounded border border-border/40"><span className="text-yellow-400 font-bold">TSI</span> {s.tsi}</span>}
                <span className="text-xs font-mono text-muted-foreground flex items-center gap-1 ml-auto"><Users className="w-3 h-3" />{s.total} tot.</span>
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                {s.specs.slice(0, 4).map((sp) => (
                  <span key={sp} className="text-[10px] px-1.5 py-0.5 rounded bg-muted/50 border border-border/40 text-muted-foreground">{sp}</span>
                ))}
                {s.specs.length > 4 && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary">+{s.specs.length - 4}</span>
                )}
              </div>

              {s.url && (
                <a href={`https://${s.url}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-mono">
                  <ExternalLink className="w-3 h-3" /> {s.url}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
