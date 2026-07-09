import { motion } from "framer-motion";
import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Contact } from "@/components/home/Contact";
import { useSEO } from "@/lib/useSEO";

const contactInfo = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+212 712 177 517",
    href: "https://wa.me/212712177517?text=Bonjour%20TIPE%20CPGE%2C%20je%20veux%20en%20savoir%20plus",
    color: "text-[#25D366]",
    bg: "bg-[#25D366]/10 border-[#25D366]/20",
    hint: "Réponse instantanée",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+212 712 177 517",
    href: "tel:+212712177517",
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20",
    hint: "Lun–Sam · 9h–20h",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Rabat, Maroc",
    href: null,
    color: "text-muted-foreground",
    bg: "bg-muted/40 border-border/60",
    hint: "Sessions en visio",
  },
];

const reassurance = [
  { icon: Clock, text: "Réponse garantie sous 24h" },
  { icon: MessageCircle, text: "Premier échange gratuit et sans engagement" },
  { icon: Phone, text: "Disponible 7j/7 sur WhatsApp" },
];

export default function ContactPage() {
  useSEO();
  return (
    <Layout>
      {/* Header section */}
      <section className="pt-24 pb-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-4 border border-primary/20">
              contact.init()
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Parlons de votre TIPE</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Remplissez le formulaire ou contactez-nous directement — premier échange gratuit et sans engagement.
            </p>
          </motion.div>

          {/* Contact cards */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {contactInfo.map((c, i) => {
              const el = (
                <div className={`rounded-xl border ${c.bg} p-4 flex flex-col gap-2 h-full transition-all hover:scale-[1.02]`}>
                  <div className={`w-9 h-9 rounded-lg ${c.bg} flex items-center justify-center`}>
                    <c.icon className={`w-4 h-4 ${c.color}`} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-mono">{c.label}</div>
                    <div className={`text-sm font-bold ${c.color}`}>{c.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{c.hint}</div>
                  </div>
                </div>
              );
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.07 }}>
                  {c.href ? <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{el}</a> : el}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Reassurance bar */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-2">
            {reassurance.map((r, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <r.icon className="w-4 h-4 text-primary shrink-0" />
                {r.text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <Contact />
    </Layout>
  );
}
