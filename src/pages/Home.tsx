import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Services } from "@/components/home/Services";
import { Pricing } from "@/components/home/Pricing";
import { Testimonials } from "@/components/home/Testimonials";
import { About } from "@/components/home/About";
import { FAQ } from "@/components/home/FAQSimple";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Social } from "@/components/home/Social";
import { useSEO } from "@/lib/useSEO";

const PLATFORM_LINKS = [
  { label: "Dashboard CNC 2026",   desc: "Calendrier, countdown, alertes en temps réel",       href: "/cnc-2026" },
  { label: "Calculateur de notes", desc: "Ta note finale estimée selon les coefficients officiels", href: "/calculateur" },
  { label: "Écoles & filières",    desc: "19 écoles, places, frais, spécialités",               href: "/ecoles" },
  { label: "Méthodologie TIPE",    desc: "Notre méthode en 6 étapes, MCOT, DOT, oral",          href: "/methodologie" },
];

const PlatformTeaser = () => (
  <section className="py-20 bg-muted/20 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-4 border border-primary/20">
          plateforme.cnc2026
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">La plateforme complète CNC 2026</h2>
        <p className="text-muted-foreground text-lg max-w-2xl">Bien plus qu'un site — un outil complet pour suivre, calculer et réussir ton concours.</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 gap-4">
        {PLATFORM_LINKS.map((l, i) => (
          <motion.div key={l.href} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
            <Link href={l.href} className="block rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-5 hover:border-primary/40 transition-all group">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-bold text-sm">{l.label}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </div>
              <p className="text-xs text-muted-foreground">{l.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default function Home() {
  useSEO();
  return (
    <Layout noBreadcrumbs>
      <Hero />
      <Features />
      <Services />
      <PlatformTeaser />
      <Pricing />
      <Testimonials />
      <About />
      <FAQ />
      <FinalCTA />
      <Social />
    </Layout>
  );
}
