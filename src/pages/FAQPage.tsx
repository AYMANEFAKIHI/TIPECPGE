import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { useLocation } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/useSEO";

const faqCategories = [
  {
    category: "Le TIPE",
    faqs: [
      { q: "Qu'est-ce que le TIPE exactement ?", a: "Le TIPE (Travaux d'Initiative Personnelle Encadrés) est une épreuve orale des concours des grandes écoles d'ingénieurs. L'étudiant mène un projet de recherche scientifique sur un thème imposé annuellement, le présente devant un jury et répond à des questions techniques approfondies. Coefficient 8 sur 52 au CNC." },
      { q: "Quand commencer son TIPE ?", a: "Idéalement dès le début de la 2ème année CPGE (septembre/octobre), au plus tard en janvier. Plus tôt vous commencez, plus vous avez de temps pour la recherche, les simulations et la rédaction de la MCOT. Les délais officiels commencent en février." },
      { q: "Quel sujet TIPE choisir pour le thème 'Sobriété, efficacité et optimisation' 2026-2027 ?", a: "Le thème est volontairement large et couvre toutes les filières autour de l'économie de ressources et du rendement. En MP : algorithmes d'optimisation, recherche du minimum d'énergie, compression de données. En PSI : rendement thermodynamique d'un moteur, optimisation d'une structure mécanique, efficacité énergétique. En TSI : optimisation de procédés industriels, régulation pour réduire la consommation, gestion intelligente de l'énergie. Nous vous aidons à trouver un sujet original et faisable selon votre profil." },
      { q: "Est-ce que je peux changer de sujet TIPE en cours d'année ?", a: "Techniquement oui, mais c'est risqué. La Phase 1 (titre + ancrage) se clôt en avril — après cette date, tout changement implique de reprendre la procédure depuis le début avec validation de votre encadrant. Nous recommandons de bien valider le sujet avant la soumission de la Phase 1." },
    ],
  },
  {
    category: "Nos packs",
    faqs: [
      { q: "Quelle est la différence entre le Pack Accompagnement et le Pack VIP ?", a: "Le Pack Accompagnement (800 DH) couvre le conseil, le choix de sujet et les questions ponctuelles. Le Pack VIP (3 000 DH) intègre tout : accompagnement de A à Z, faisabilité, rédaction MCOT, préparation slides et 3 simulations d'oral. C'est le pack pour ne rien laisser au hasard." },
      { q: "Les packs sont-ils cumulables ?", a: "Oui. Par exemple : Pack Faisabilité + Pack MCOT + Pack Présentation = 2 600 DH (vs Pack VIP à 3 000 DH). Le VIP est plus avantageux si vous avez besoin des 3. Contactez-nous pour une offre personnalisée selon votre situation." },
      { q: "Comment se passe concrètement l'accompagnement ?", a: "Selon le pack choisi : sessions individuelles en visioconférence (Google Meet / Zoom), échanges asynchrones WhatsApp pour les questions urgentes, et révisions de documents partagés (Google Docs). Tout se fait à distance — vous pouvez être n'importe où au Maroc." },
      { q: "À quel moment de l'année puis-je commencer ?", a: "N'importe quand, mais les moments clés sont : dès septembre (choix de sujet), avant avril (finalisation MCOT), avant mai (slides et oral). Pour le Pack Présentation, nous recommandons de commencer au moins 3 semaines avant l'oral." },
    ],
  },
  {
    category: "Paiement & logistique",
    faqs: [
      { q: "Comment se passe le paiement ?", a: "Nous acceptons les virements bancaires (CIH, Attijariwafa, BCP), Cash Plus, Orange Money et BaridCash. Le paiement peut être fractionné (50% au démarrage, 50% à mi-parcours) pour les packs à partir du Pack Présentation. Les détails sont communiqués lors de la confirmation." },
      { q: "Y a-t-il une garantie de résultats ?", a: "Nous ne pouvons pas garantir une note ou une admission — les concours dépendent de nombreux facteurs. Ce que nous garantissons : un TIPE structuré, une MCOT conforme, et une préparation orale sérieuse. Nos 95% de taux de réussite reflètent l'engagement de nos étudiants autant que le nôtre." },
      { q: "Préparez-vous aussi les concours CNAEM et ISCAE ?", a: "Oui. Le Pack CNAEM / ISCAE (3 000 DH) est dédié aux concours des grandes écoles de gestion marocaines. Il couvre l'écrit (culture générale, logique, maths) et l'oral (présentation personnelle, actualité économique). Nos encadrants connaissent les attendus spécifiques de ces concours." },
    ],
  },
];

const FAQItem = ({ q, a, i }: { q: string; a: string; i: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
      <div className={`border rounded-xl px-6 transition-colors hover:border-primary/30 cursor-pointer ${open ? "border-primary/40 bg-card/80" : "border-border/60 bg-card/60"} backdrop-blur-sm`}
        onClick={() => setOpen(!open)}>
        <div className="flex items-center justify-between py-4 gap-3">
          <div className="flex items-start gap-3">
            <span className="font-mono text-primary/40 text-xs shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-sm font-semibold">{q}</span>
          </div>
          <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180 text-primary" : ""}`} />
        </div>
        {open && <div className="text-muted-foreground leading-relaxed pb-4 pl-7 text-sm">{a}</div>}
      </div>
    </motion.div>
  );
};

export default function FAQPage() {
  useSEO();
  const [, navigate] = useLocation();
  let globalIdx = 0;

  return (
    <Layout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono font-semibold mb-4 border border-accent/20">
              faq.findAll()
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Questions fréquentes</h1>
            <p className="text-muted-foreground text-lg">Tout ce que vous devez savoir avant de commencer.</p>
          </motion.div>

          <div className="space-y-10">
            {faqCategories.map((cat) => (
              <div key={cat.category}>
                <div className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                  <div className="h-px flex-1 bg-primary/20" />
                  {cat.category}
                  <div className="h-px flex-1 bg-primary/20" />
                </div>
                <div className="space-y-2">
                  {cat.faqs.map((faq) => {
                    const idx = globalIdx++;
                    return <FAQItem key={faq.q} q={faq.q} a={faq.a} i={idx} />;
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* CTA final */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-16 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Votre question n'est pas ici ?</h3>
            <p className="text-muted-foreground text-sm mb-6">Contactez-nous directement — nous répondons sous 24h.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button onClick={() => navigate("/contact")} className="w-full sm:w-auto rounded-lg font-semibold">
                Poser ma question
              </Button>
              <a href="https://wa.me/212712177517?text=Bonjour%2C%20j%27ai%20une%20question%20sur%20TIPE%20CPGE" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full rounded-lg font-semibold border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/10">
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp direct
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
