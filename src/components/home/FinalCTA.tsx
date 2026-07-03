import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  const [, navigate] = useLocation();
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-6 border border-primary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Session CNC 2026 — Places limitées
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6">
            Votre grande école<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
              vous attend.
            </span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Rejoignez les 200+ étudiants qui ont transformé leur TIPE en avantage décisif. Commencez maintenant — le CNC 2026 n'attend pas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button size="lg"
              className="h-13 px-8 rounded-xl text-base font-semibold shadow-xl shadow-primary/25 hover:scale-105 transition-transform glow-pulse"
              onClick={() => navigate("/contact")}>
              Démarrer maintenant <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <a href="https://wa.me/212712177517?text=Bonjour%20TIPE%20CPGE%2C%20je%20veux%20en%20savoir%20plus" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline"
                className="h-13 px-8 rounded-xl text-base font-semibold border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]/50 transition-all">
                <MessageCircle className="w-4 h-4 mr-2" /> Contacter sur WhatsApp
              </Button>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            {[
              "✓ Réponse sous 24h",
              "✓ Packs personnalisables",
              "✓ 95% de taux de réussite",
              "✓ 200+ étudiants accompagnés",
            ].map((t) => (
              <span key={t} className="font-mono">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
