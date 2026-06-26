import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Qu'est-ce que le TIPE exactement ?", a: "Le TIPE (Travaux d'Initiative Personnelle Encadrés) est une épreuve orale des concours des grandes écoles d'ingénieurs. L'étudiant mène un projet de recherche scientifique sur un thème imposé annuellement, le présente devant un jury et répond à des questions techniques approfondies." },
  { q: "Comment se déroule concrètement l'accompagnement ?", a: "Selon le pack choisi, l'accompagnement peut inclure des sessions individuelles en visioconférence, des échanges asynchrones pour les questions ponctuelles, et des simulations complètes d'oral en conditions réelles avec feedback détaillé." },
  { q: "Les packs sont-ils cumulables ?", a: "Oui, les packs sont conçus pour se compléter. Le Pack VIP intègre tous les services (du choix de sujet jusqu'à la simulation orale) à un tarif préférentiel. Il est idéal pour un accompagnement de A à Z sans interruption." },
  { q: "Quels concours préparez-vous ?", a: "Nous préparons aux concours des grandes écoles marocaines (CNAEM, ISCAE, EMI) et françaises accessibles depuis le Maroc (Mines-Ponts, Centrale-Supélec, X-ENS, CCINP). Chaque concours a ses spécificités que nos encadrants connaissent." },
  { q: "Comment se passe le paiement ?", a: "Nous acceptons les virements bancaires, Cash Plus et Orange Money. Le paiement peut être fractionné selon le pack. Les détails vous seront communiqués lors de la confirmation de votre inscription par notre équipe." },
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono font-semibold mb-4 border border-accent/20">faq.findAll()</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Questions fréquentes</h2>
          <p className="text-muted-foreground text-lg">Tout ce que vous devez savoir avant de commencer.</p>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
              <div className={`border rounded-xl px-6 transition-colors hover:border-primary/30 ${open === i ? "border-primary/40 bg-card/80" : "border-border/60 bg-card/60"} backdrop-blur-sm`}>
                <button className="w-full flex items-center justify-between py-5 text-left gap-3" onClick={() => setOpen(open === i ? null : i)}>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-primary/40 text-sm shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-base font-semibold hover:text-primary transition-colors">{faq.q}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${open === i ? "rotate-180 text-primary" : ""}`} />
                </button>
                {open === i && (
                  <div className="text-muted-foreground leading-relaxed pb-5 pl-9 text-sm">{faq.a}</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
