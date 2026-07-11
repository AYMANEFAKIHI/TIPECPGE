import { motion } from "framer-motion";
import { Link } from "wouter";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { useSEO } from "@/lib/useSEO";
import { GUIDES } from "@/lib/guides.data";

export default function GuidesPage() {
  useSEO();

  return (
    <Layout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-4 border border-primary/20">
              <BookOpen className="w-3 h-3" /> guides.md
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Guides pratiques TIPE & CNC</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Des conseils concrets, tirés de notre accompagnement, pour chaque étape clé : choisir un sujet, rédiger la MCOT, réussir l'oral.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {GUIDES.map((g, i) => (
              <motion.div
                key={g.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={`/guides/${g.slug}`}
                  className="group flex flex-col h-full rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm p-6 hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">{g.category}</span>
                    <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {g.readMinutes} min
                    </span>
                  </div>
                  <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{g.label}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{g.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Lire le guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
