import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { Clock, ArrowLeft, ArrowRight, Lightbulb, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/useSEO";
import { getGuide, type GuideBlock } from "@/lib/guides.data";

const Block = ({ block }: { block: GuideBlock }) => {
  switch (block.type) {
    case "p":
      return <p className="text-muted-foreground leading-relaxed mb-4">{block.text}</p>;
    case "h3":
      return <h3 className="text-base font-bold mt-6 mb-2 text-primary">{block.text}</h3>;
    case "list":
      return (
        <ul className="space-y-2 mb-5">
          {block.items.map((it, i) => (
            <li key={i} className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
              <CheckCircle2 className="w-4 h-4 text-primary/60 shrink-0 mt-1" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 mb-5">
          <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed">{block.text}</p>
        </div>
      );
  }
};

export default function GuideArticle() {
  useSEO();
  const params = useParams();
  const guide = getGuide(params.slug ?? "");

  if (!guide) {
    return (
      <Layout>
        <section className="py-32 text-center">
          <div className="container mx-auto px-4 max-w-lg">
            <h1 className="text-2xl font-bold mb-3">Guide introuvable</h1>
            <p className="text-muted-foreground mb-6">Ce guide n'existe pas ou a été déplacé.</p>
            <Link href="/guides">
              <Button className="rounded-lg">Voir tous les guides</Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 max-w-2xl relative z-10">
          <Link href="/guides" className="inline-flex items-center gap-1.5 text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Tous les guides
          </Link>

          <motion.header initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">{guide.category}</span>
              <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" /> {guide.readMinutes} min de lecture
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{guide.h1}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{guide.intro}</p>
          </motion.header>

          <div className="prose-none">
            {guide.sections.map((s) => (
              <section key={s.h2} className="mb-8">
                <h2 className="text-xl font-bold mb-4 pb-2 border-b border-border/50">{s.h2}</h2>
                {s.blocks.map((b, i) => (
                  <Block key={i} block={b} />
                ))}
              </section>
            ))}
          </div>

          {/* Liens internes */}
          <div className="mt-10 rounded-xl border border-border/60 bg-card/60 p-6">
            <div className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-4">Pour aller plus loin</div>
            <ul className="space-y-2.5">
              {guide.related.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-primary/60" /> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA conversion */}
          <div className="mt-8 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-accent/5 p-8 text-center">
            <h2 className="text-xl font-bold mb-2">Besoin d'un accompagnement personnalisé ?</h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
              Nos encadrants vous aident à chaque étape — du choix du sujet à la simulation d'oral. Premier échange gratuit et sans engagement.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-lg font-semibold shadow-lg shadow-primary/25">Démarrer mon accompagnement</Button>
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
