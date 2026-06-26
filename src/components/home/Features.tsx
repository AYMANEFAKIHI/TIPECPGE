import { motion } from "framer-motion";
import { Microscope, BarChart3, UserCheck } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Microscope,
      title: "Expertise scientifique",
      desc: "Nos encadrants sont des ingénieurs et docteurs formés aux méthodes expérimentales CPGE. Chaque sujet est traité avec rigueur scientifique.",
      tag: "TIPE · Expérimentation · Modélisation",
      color: "from-primary/20 to-primary/5",
      iconColor: "text-primary",
    },
    {
      icon: BarChart3,
      title: "Préparation aux concours",
      desc: "Simulations en conditions réelles, analyse de dossiers MCOT primés, et stratégies éprouvées pour les oraux Centrale, X, EMI et ISCAE.",
      tag: "Centrale · X-ENS · EMI · CNAEM",
      color: "from-accent/20 to-accent/5",
      iconColor: "text-accent",
    },
    {
      icon: UserCheck,
      title: "Encadrement personnalisé",
      desc: "Un suivi adapté à votre filière (MP, PC, PT, PSI), votre thème TIPE, et vos lacunes identifiées — pas de programme générique.",
      tag: "MP · PC · PT · PSI",
      color: "from-chart-3/20 to-chart-3/5",
      iconColor: "text-chart-3",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-4 border border-primary/20">
            pourquoi_nous_choisir.py
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Pourquoi nous choisir ?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une approche scientifique et rigoureuse — comme votre futur TIPE.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="relative h-full rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm p-7 overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Corner decoration */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg bg-card border border-border/80 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-primary/40 transition-all duration-300 shadow-sm`}>
                    <f.icon className={`w-6 h-6 ${f.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{f.desc}</p>
                  <div className="font-mono text-xs text-primary/70 bg-primary/5 border border-primary/10 rounded-md px-3 py-1.5">
                    # {f.tag}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
