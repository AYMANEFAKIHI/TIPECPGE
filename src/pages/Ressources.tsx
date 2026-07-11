import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { TIPEThemesExplorer } from "@/components/home/TIPEThemesExplorer";
import { QuickLinks } from "@/components/layout/QuickLinks";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/useSEO";

const ResourcesCTA = () => {
  const [, navigate] = useLocation();
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 max-w-2xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-4 border border-primary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Accompagnement disponible
          </div>
          <h3 className="text-2xl font-bold mb-3">Un thème vous intéresse ?</h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
            Nos encadrants peuvent vous aider à positionner votre sujet, valider sa faisabilité et le raccrocher au thème officiel "Sobriété, efficacité et optimisation".
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button onClick={() => navigate("/contact")} className="w-full sm:w-auto rounded-lg font-semibold">
              Discuter de mon sujet <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <a href="https://wa.me/212712177517?text=Bonjour%2C%20je%20veux%20valider%20mon%20sujet%20TIPE" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full rounded-lg font-semibold border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/10">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function RessourcesPage() {
  useSEO();
  return (
    <Layout>
      <TIPEThemesExplorer />
      <ResourcesCTA />
      <QuickLinks
        items={[
          { label: "Voir notre méthodologie", href: "/methodologie" },
          { label: "Études de cas", href: "/etudes-de-cas" },
          { label: "Nous contacter", href: "/contact" },
        ]}
      />
    </Layout>
  );
}
