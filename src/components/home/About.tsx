import { motion } from "framer-motion";
import { Rocket, Users, TrendingUp, Award } from "lucide-react";

const milestones = [
  {
    year: "2019",
    icon: Rocket,
    title: "Fondation de TIPE CPGE",
    desc: "Création de la plateforme par une équipe d'ingénieurs et de professeurs CPGE avec une mission claire : rendre la préparation TIPE accessible et efficace.",
  },
  {
    year: "2021",
    icon: Users,
    title: "100+ étudiants accompagnés",
    desc: "Premier cap symbolique franchi. Nos premières promotions intègrent Centrale, X, EMI et ISCAE avec des dossiers TIPE remarqués par les jurys.",
  },
  {
    year: "2023",
    icon: TrendingUp,
    title: "Expansion CNAEM & ISCAE",
    desc: "Lancement des packs dédiés aux concours des grandes écoles de gestion marocaines. Taux de réussite consolidé à 95%.",
  },
  {
    year: "2024",
    icon: Award,
    title: "200+ réussites",
    desc: "Plus de 200 étudiants ont intégré leur école de rêve grâce à TIPE CPGE. Notre méthode — rigoureuse, scientifique, humaine — continue d'évoluer.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-4 border border-primary/20">
            git log --oneline
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Notre Histoire</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            De l'idée à la référence nationale — une construction méthodique, comme un bon TIPE.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-transparent -translate-x-1/2" />

          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex gap-6 mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background -translate-x-1/2 mt-6 z-10 shadow-md shadow-primary/30" />

              {/* Spacer for alternating layout */}
              <div className="hidden md:block w-[calc(50%-2rem)]" />

              {/* Content card */}
              <div className="ml-12 md:ml-0 md:w-[calc(50%-2rem)] group">
                <div className="rounded-xl border border-border/60 bg-card/70 backdrop-blur-sm p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <m.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-mono text-2xl font-black text-primary">{m.year}</span>
                  </div>
                  <h3 className="font-bold text-base mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
