import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Search, BookOpen, Hammer, FlaskConical, PenTool, Mic2, ArrowRight, CheckCircle2,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { QuickLinks } from "@/components/layout/QuickLinks";
import { TIPEMethodology } from "@/components/home/TIPEMethodology";
import { TIPETips } from "@/components/home/TIPETips";
import { useSEO } from "@/lib/useSEO";

const WORKFLOW = [
  {
    num: "01",
    icon: Search,
    color: "#3b82f6",
    title: "Analyse du sujet",
    items: ["Comprendre le thème de l'année", "Définir des objectifs clairs", "Identifier les enjeux scientifiques"],
  },
  {
    num: "02",
    icon: BookOpen,
    color: "#22c55e",
    title: "Recherche scientifique",
    items: ["Revue de littérature ciblée", "Sources scientifiques fiables", "Étude d'exemples de TIPE précédents"],
  },
  {
    num: "03",
    icon: Hammer,
    color: "#f59e0b",
    title: "Construction du projet",
    items: ["Formulation de la problématique", "Raisonnement scientifique structuré", "Choix de l'approche expérimentale"],
  },
  {
    num: "04",
    icon: FlaskConical,
    color: "#8b5cf6",
    title: "Réalisation",
    items: ["Simulations numériques", "Expériences et protocoles", "Collecte et traitement des données"],
  },
  {
    num: "05",
    icon: PenTool,
    color: "#ef4444",
    title: "Rédaction",
    items: ["MCOT (Mise en Cohérence des Objectifs)", "DOT (Déroulé Opérationnel)", "Slides de présentation"],
  },
  {
    num: "06",
    icon: Mic2,
    color: "#06b6d4",
    title: "Préparation de l'oral",
    items: ["Attentes du jury", "Erreurs fréquentes à éviter", "Simulations d'oral en conditions réelles"],
  },
];

export default function MethodologiePage() {
  useSEO();
  return (
    <Layout>
      {/* Hero + 6-step workflow */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-4 border border-primary/20">
              methodologie.workflow
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">Notre méthodologie en 6 étapes</h1>
            <p className="text-muted-foreground text-lg">
              De l'analyse du sujet à la préparation de l'oral — voici exactement comment nous t'accompagnons.
            </p>
          </motion.div>

          {/* Visual horizontal connector on desktop */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
            {WORKFLOW.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-5 relative"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-muted-foreground">{step.num}</span>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${step.color}1a`, border: `1px solid ${step.color}40` }}>
                    <step.icon className="w-4.5 h-4.5" style={{ color: step.color }} />
                  </div>
                </div>
                <h3 className="font-bold text-sm mb-3" style={{ color: step.color }}>{step.title}</h3>
                <ul className="space-y-1.5">
                  {step.items.map((it) => (
                    <li key={it} className="text-[11px] text-muted-foreground leading-snug flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 shrink-0 mt-0.5" style={{ color: step.color }} />
                      {it}
                    </li>
                  ))}
                </ul>
                {i < WORKFLOW.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2.5 -translate-y-1/2 z-10">
                    <ArrowRight className="w-4 h-4 text-muted-foreground/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-center mt-8">
            <p className="text-xs text-muted-foreground font-mono">⏱️ Comprendre notre méthode complète prend moins de 2 minutes.</p>
          </motion.div>
        </div>
      </section>

      {/* Existing deep-dive content: MCOT/DOT + tips */}
      <TIPEMethodology />
      <TIPETips />

      <QuickLinks
        title="Voir comment ça se traduit en pratique"
        items={[
          { label: "Études de cas réels", href: "/etudes-de-cas" },
          { label: "Thèmes officiels du TIPE", href: "/ressources" },
          { label: "Démarrer mon accompagnement", href: "/contact" },
        ]}
      />
    </Layout>
  );
}
