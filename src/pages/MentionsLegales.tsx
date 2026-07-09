import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { useSEO } from "@/lib/useSEO";

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "Éditeur du site",
    body: (
      <p>
        Le site <strong>TIPE CPGE</strong> (tipecpge.vercel.app) propose un accompagnement
        pédagogique pour la préparation du TIPE et des concours des grandes écoles au Maroc.
        Pour toute question&nbsp;:{" "}
        <a href="tel:+212712177517" className="text-primary hover:underline">+212 712 177 517</a>{" "}
        · <a href="https://wa.me/212712177517" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WhatsApp</a> · Rabat, Maroc.
      </p>
    ),
  },
  {
    title: "Données personnelles collectées",
    body: (
      <p>
        Via le formulaire de contact, nous collectons uniquement les informations que vous
        nous transmettez volontairement&nbsp;: <strong>prénom, nom, adresse e-mail, numéro
        de téléphone, pack souhaité et message</strong>. Aucune autre donnée n'est collectée
        à votre insu.
      </p>
    ),
  },
  {
    title: "Finalité du traitement",
    body: (
      <p>
        Ces données servent exclusivement à <strong>répondre à votre demande</strong> et à
        vous proposer l'accompagnement adapté. Elles ne sont ni vendues, ni louées, ni
        cédées à des tiers à des fins commerciales.
      </p>
    ),
  },
  {
    title: "Hébergement des données",
    body: (
      <p>
        Le formulaire est traité par le service <strong>Formspree</strong>, et le site est
        hébergé par <strong>Vercel</strong>. Ces prestataires peuvent stocker les données
        transmises sur leurs serveurs, conformément à leurs propres politiques de
        confidentialité.
      </p>
    ),
  },
  {
    title: "Durée de conservation",
    body: (
      <p>
        Vos données sont conservées le temps nécessaire au traitement de votre demande et à
        la relation d'accompagnement, puis supprimées sur simple demande de votre part.
      </p>
    ),
  },
  {
    title: "Vos droits",
    body: (
      <p>
        Conformément à la loi marocaine n°&nbsp;09-08 relative à la protection des personnes
        physiques à l'égard du traitement des données à caractère personnel, vous disposez
        d'un droit d'accès, de rectification et de suppression de vos données. Pour l'exercer,
        contactez-nous au{" "}
        <a href="tel:+212712177517" className="text-primary hover:underline">+212 712 177 517</a>{" "}
        ou via <a href="https://wa.me/212712177517" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WhatsApp</a>.
      </p>
    ),
  },
  {
    title: "Cookies & mesure d'audience",
    body: (
      <p>
        Le site utilise <strong>Vercel Analytics</strong> pour mesurer l'audience de manière
        anonyme (pages vues, provenance). Aucun cookie publicitaire ni traceur tiers n'est
        déposé.
      </p>
    ),
  },
];

export default function MentionsLegales() {
  useSEO();

  return (
    <Layout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-4 border border-primary/20">
              <ShieldCheck className="w-3 h-3" /> legal.md
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Mentions légales & Confidentialité</h1>
            <p className="text-muted-foreground text-lg">
              Transparence sur qui nous sommes et comment vos données sont traitées.
            </p>
          </motion.div>

          <div className="space-y-6">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm p-6"
              >
                <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <span className="font-mono text-primary/40 text-xs">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </h2>
                <div className="text-sm text-muted-foreground leading-relaxed">{s.body}</div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground/60 font-mono mt-10">
            # Dernière mise à jour&nbsp;: {new Date().toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}
          </p>
        </div>
      </section>
    </Layout>
  );
}
