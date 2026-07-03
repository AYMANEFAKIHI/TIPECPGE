import { motion } from "framer-motion";
import { Rocket, Users, TrendingUp, Award, GraduationCap, Star } from "lucide-react";

const milestones = [
  { year: "2019", icon: Rocket,      title: "Fondation",               desc: "Créé par une équipe d'ingénieurs et de professeurs CPGE pour rendre la préparation TIPE accessible à tous les étudiants marocains." },
  { year: "2021", icon: Users,       title: "100+ étudiants",          desc: "Premier cap symbolique. Nos premières promotions intègrent Centrale, X, EMI et ISCAE avec des dossiers TIPE remarqués par les jurys." },
  { year: "2023", icon: TrendingUp,  title: "Expansion CNAEM & ISCAE", desc: "Lancement des packs dédiés aux concours des grandes écoles de gestion marocaines. Taux de réussite consolidé à 95%." },
  { year: "2025", icon: Award,       title: "200+ réussites",          desc: "Plus de 200 étudiants ont intégré leur école grâce à TIPE CPGE. Notre méthode — rigoureuse, scientifique, humaine — continue d'évoluer." },
];

const values = [
  { icon: GraduationCap, label: "Rigueur scientifique",  desc: "Nous traitons chaque TIPE comme une vraie démarche de recherche." },
  { icon: Star,           label: "Excellence personnalisée", desc: "Pas de programme générique — chaque étudiant a son propre parcours." },
  { icon: Users,          label: "Communauté CPGE",       desc: "Un réseau d'étudiants et d'encadrants qui partagent les mêmes ambitions." },
];

export const About = () => (
  <section id="about" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-4 border border-primary/20">
          git log --oneline
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Notre Histoire</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">De l'idée à la référence nationale — une construction méthodique, comme un bon TIPE.</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
          {milestones.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }} className="flex gap-5 mb-8 last:mb-0 relative">
              <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center shrink-0 z-10">
                <m.icon className="w-4 h-4 text-primary" />
              </div>
              <div className="pt-1.5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono font-black text-primary text-lg">{m.year}</span>
                  <span className="text-sm font-bold">{m.title}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div className="flex flex-col gap-4">
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="rounded-xl border border-primary/20 bg-primary/5 p-6 mb-2">
            <div className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-2">Notre mission</div>
            <p className="text-base leading-relaxed">
              Permettre à chaque étudiant CPGE marocain d'aborder le TIPE avec méthode, confiance et rigueur scientifique — pour que l'oral devienne un avantage, pas une source d'anxiété.
            </p>
          </motion.div>

          {values.map((v, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 items-start rounded-xl border border-border/60 bg-card/60 p-5 hover:border-primary/30 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <v.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="font-bold text-sm mb-0.5">{v.label}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{v.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
