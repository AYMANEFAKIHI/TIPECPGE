import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface QuickLinkItem {
  label: string;
  href: string;
}

interface QuickLinksProps {
  title?: string;
  items: QuickLinkItem[];
}

export const QuickLinks = ({ title = "Continuer votre lecture", items }: QuickLinksProps) => (
  <section className="py-12 border-t border-border/40">
    <div className="container mx-auto px-4 md:px-6">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider mb-4">{title}</div>
        <div className="flex flex-wrap gap-3">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/60 bg-card/60 hover:border-primary/40 hover:bg-primary/5 text-sm font-medium transition-all group"
            >
              {it.label}
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
