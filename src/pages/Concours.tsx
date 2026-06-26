import { motion } from "framer-motion";
import { Link } from "wouter";
import { FileText, GraduationCap, Mic, MapPin, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { QuickLinks } from "@/components/layout/QuickLinks";
import { useSEO } from "@/lib/useSEO";

const steps = [
  {
    icon: FileText,
    title: "1. Admissibilité (Écrit)",
    color: "#3b82f6",
    desc: "Épreuves écrites spécifiques à chaque filière : Mathématiques I & II, Physique I & II, Chimie, Informatique, Sciences Industrielles (ou TSI), Culture Arabe & Traduction, Français, Anglais.",
    detail: "Seuil pédagogique fixé à 4/20 sur la moyenne pondérée des matières de spécialité. Une note de zéro à n'importe quelle épreuve est éliminatoire.",
  },
  {
    icon: Mic,
    title: "2. Admission (Oral TIPE)",
    color: "#8b5cf6",
    desc: "Une seule épreuve d'admission : l'oral TIPE, coefficient 8, réservé aux candidats déclarés admissibles à l'issue de l'écrit.",
    detail: "40 minutes au total : lecture de la fiche F2 par le jury (5 min), présentation (15 min), questions (15 min), délibération (5 min).",
  },
  {
    icon: GraduationCap,
    title: "3. Classement & Affectation",
    color: "#22c55e",
    desc: "Note finale = (Moyenne écrite × 44 + Note TIPE × 8) / 52. Le classement général déclenche l'affectation en ligne dans les écoles.",
    detail: "Les candidats choisissent leurs écoles par ordre de préférence selon leur rang au classement national, dans la limite des places disponibles.",
  },
];

export default function ConcoursPage() {
  useSEO();
  return (
    <Layout>
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-4 border border-primary/20">
              concours.cnc2026
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">Le Concours National Commun 2026</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Vue d'ensemble du processus : de l'inscription à l'affectation dans une école d'ingénieurs.
            </p>
          </motion.div>

          <div className="space-y-5 mb-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 flex gap-5"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${s.color}1a`, border: `1px solid ${s.color}40` }}>
                  <s.icon className="w-6 h-6" style={{ color: s.color }} />
                </div>
                <div>
                  <h2 className="font-bold text-lg mb-2" style={{ color: s.color }}>{s.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">{s.desc}</p>
                  <p className="text-xs text-muted-foreground/80 leading-relaxed border-l-2 pl-3" style={{ borderColor: `${s.color}40` }}>{s.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Eligibility quick facts */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 mb-8">
            <h3 className="font-bold mb-4 flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /> En bref</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div><div className="text-muted-foreground text-xs mb-1">Filières concernées</div><div className="font-bold">MP, PSI, TSI</div></div>
              <div><div className="text-muted-foreground text-xs mb-1">Tentatives max</div><div className="font-bold">3 (successives)</div></div>
              <div><div className="text-muted-foreground text-xs mb-1">Âge limite</div><div className="font-bold">25 ans (au 31/12/2026)</div></div>
              <div><div className="text-muted-foreground text-xs mb-1">Frais de dossier</div><div className="font-bold">500 MAD / 50 €</div></div>
            </div>
          </motion.div>

          <Link href="/cnc-2026" className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline">
            Voir le dashboard complet et le calendrier <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <QuickLinks
        items={[
          { label: "Dashboard & calendrier", href: "/cnc-2026" },
          { label: "Calculateur de notes", href: "/calculateur" },
          { label: "Explorer les écoles", href: "/ecoles" },
        ]}
      />
    </Layout>
  );
}
