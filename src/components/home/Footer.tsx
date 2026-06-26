import { Link } from "wouter";
import { SiInstagram, SiTiktok, SiWhatsapp } from "react-icons/si";
import { FlaskConical } from "lucide-react";

const sitemapMain = [
  { label: "Accueil", path: "/" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const sitemapCNC = [
  { label: "Dashboard CNC 2026", path: "/cnc-2026" },
  { label: "Filières", path: "/filieres" },
  { label: "Écoles", path: "/ecoles" },
  { label: "Calculateur", path: "/calculateur" },
];

const sitemapTipe = [
  { label: "Méthodologie", path: "/methodologie" },
  { label: "Ressources", path: "/ressources" },
  { label: "Études de cas", path: "/etudes-de-cas" },
];

export const Footer = () => {
  return (
    <footer className="bg-muted/20 border-t border-border/50 pt-14 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 font-bold text-lg mb-3">
              <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <FlaskConical className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="font-mono">TIPE <span className="text-primary">CPGE</span></span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              L'excellence académique, à votre portée. Simulations, coaching, préparation orale — tout pour réussir vos concours.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://www.instagram.com/tipe_cpge/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <SiInstagram className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@tipe.cpge" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="TikTok">
                <SiTiktok className="w-4 h-4" />
              </a>
              <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#25D366] transition-colors" aria-label="WhatsApp">
                <SiWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div className="flex flex-wrap gap-10 text-sm">
            <div>
              <div className="font-semibold text-foreground mb-3 font-mono text-xs text-muted-foreground uppercase tracking-wider">Général</div>
              <ul className="space-y-2">
                {sitemapMain.map((l) => (
                  <li key={l.path}>
                    <Link href={l.path} className="text-muted-foreground hover:text-primary transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-semibold text-foreground mb-3 font-mono text-xs text-primary uppercase tracking-wider">CNC 2026</div>
              <ul className="space-y-2">
                {sitemapCNC.map((l) => (
                  <li key={l.path}>
                    <Link href={l.path} className="text-muted-foreground hover:text-primary transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-semibold text-foreground mb-3 font-mono text-xs text-accent uppercase tracking-wider">Guide TIPE</div>
              <ul className="space-y-2">
                {sitemapTipe.map((l) => (
                  <li key={l.path}>
                    <Link href={l.path} className="text-muted-foreground hover:text-accent transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground font-mono gap-2">
          <p>© 2024 TIPE CPGE. Tous droits réservés.</p>
          <p className="text-primary/50">
            <span className="text-primary">{">"}</span> ./run --mode=réussite --target=grande_école
          </p>
        </div>
      </div>
    </footer>
  );
};
