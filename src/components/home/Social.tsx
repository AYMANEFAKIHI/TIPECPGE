import { motion } from "framer-motion";
import { SiInstagram, SiTiktok } from "react-icons/si";
import { ExternalLink } from "lucide-react";

export const Social = () => {
  return (
    <section className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-4 border border-primary/20">
            social_media.links[]
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Retrouvez-nous</h2>
          <p className="text-muted-foreground text-lg">Conseils TIPE, astuces concours, témoignages — chaque semaine.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/tipe_cpge/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="group block"
            data-testid="link-instagram"
          >
            <div className="relative rounded-xl border border-border/60 bg-card/70 backdrop-blur-sm overflow-hidden p-6 hover:border-pink-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center shadow-lg">
                    <SiInstagram className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">@tipe_cpge</div>
                    <div className="text-sm text-muted-foreground">Instagram</div>
                    <div className="text-xs font-mono text-pink-500 mt-0.5">Conseils · Photos · Stories</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black font-mono text-foreground">10K+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">abonnés</div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground mt-2 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </motion.a>

          {/* TikTok */}
          <motion.a
            href="https://www.tiktok.com/@tipe.cpge"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="group block"
            data-testid="link-tiktok"
          >
            <div className="relative rounded-xl border border-border/60 bg-card/70 backdrop-blur-sm overflow-hidden p-6 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center shadow-lg border border-border/40">
                    <SiTiktok className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">@tipe.cpge</div>
                    <div className="text-sm text-muted-foreground">TikTok</div>
                    <div className="text-xs font-mono text-cyan-500 mt-0.5">Vidéos · Tutos · Oraux</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black font-mono text-foreground">50K+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">vues</div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground mt-2 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
