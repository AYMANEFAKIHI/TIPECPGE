import { Link } from "wouter";
import { SiInstagram, SiTiktok, SiWhatsapp } from "react-icons/si";
import { FlaskConical, Mail, Phone, MapPin } from "lucide-react";

const sitemapMain = [
  { label: "Accueil", path: "/" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
  { label: "Études de cas", path: "/etudes-de-cas" },
];

const sitemapCNC = [
  { label: "Dashboard CNC 2026", path: "/cnc-2026" },
  { label: "Filières", path: "/filieres" },
  { label: "Explorer les écoles", path: "/ecoles" },
  { label: "Calculateur de note", path: "/calculateur" },
];

const sitemapTipe = [
  { label: "Méthodologie", path: "/methodologie" },
  { label: "Ressources", path: "/ressources" },
  { label: "Thèmes TIPE", path: "/methodologie" },
];

export const Footer = () => (
  <footer className="bg-muted/20 border-t border-border/50 pt-16 pb-8 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

        {/* Brand — spans 2 cols */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5 font-bold text-lg mb-4">
            <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center shadow-sm shadow-primary/10">
              <FlaskConical className="w-4 h-4 text-primary" />
            </div>
            <span className="font-mono text-xl">TIPE <span className="text-primary">CPGE</span></span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xs">
            La référence marocaine pour la préparation du TIPE. Simulations scientifiques, coaching oral et accompagnement personnalisé pour les concours des grandes écoles.
          </p>
          {/* Contact infos */}
          <div className="space-y-2 mb-5">
            <a href="tel:+212712177517" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5 shrink-0" />
              +212 712 177 517
            </a>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              Rabat, Maroc
            </div>
          </div>
          {/* Socials */}
          <div className="flex gap-3">
            <a href="https://www.instagram.com/tipe_cpge/" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-border/60 bg-card/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
              aria-label="Instagram">
              <SiInstagram className="w-3.5 h-3.5" />
            </a>
            <a href="https://www.tiktok.com/@tipe.cpge" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-border/60 bg-card/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
              aria-label="TikTok">
              <SiTiktok className="w-3.5 h-3.5" />
            </a>
            <a href="https://wa.me/212712177517" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-border/60 bg-card/60 flex items-center justify-center text-muted-foreground hover:text-[#25D366] hover:border-[#25D366]/40 hover:bg-[#25D366]/5 transition-all"
              aria-label="WhatsApp">
              <SiWhatsapp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Sitemap cols */}
        <div>
          <div className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider mb-4">Général</div>
          <ul className="space-y-2.5">
            {sitemapMain.map((l) => (
              <li key={l.path}>
                <Link href={l.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-4">CNC 2026</div>
          <ul className="space-y-2.5">
            {sitemapCNC.map((l) => (
              <li key={l.path}>
                <Link href={l.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs font-mono font-bold text-accent uppercase tracking-wider mb-4">Guide TIPE</div>
          <ul className="space-y-2.5">
            {sitemapTipe.map((l) => (
              <li key={l.path}>
                <Link href={l.path} className="text-sm text-muted-foreground hover:text-accent transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
          {/* Trust badge */}
          <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2.5">
            <div className="text-[10px] font-mono font-bold text-primary uppercase tracking-wider mb-1">Thème 2025-2026</div>
            <div className="text-sm font-semibold">"Cycles, Boucles"</div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/40 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground gap-3">
        <p className="font-mono">© 2025 TIPE CPGE · Tous droits réservés</p>
        <p className="font-mono text-primary/40">
          <span className="text-primary">{">"}</span> ./run --mode=réussite --target=grande_école
        </p>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-primary/60">CNC 2026 · Session active</span>
        </div>
      </div>
    </div>
  </footer>
);
