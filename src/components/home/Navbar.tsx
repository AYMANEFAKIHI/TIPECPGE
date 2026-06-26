import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Moon, Sun, ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ROUTES } from "@/lib/routes";

const mainLinks = ROUTES.filter((r) => r.group === "main" && r.path !== "/");
const cncLinks = ROUTES.filter((r) => r.group === "cnc");
const tipeLinks = ROUTES.filter((r) => r.group === "tipe");

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cncOpen, setCncOpen] = useState(false);
  const [tipeOpen, setTipeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setCncOpen(false);
    setTipeOpen(false);
  }, [location]);

  const isActive = (path: string) => location === path;
  const isGroupActive = (paths: string[]) => paths.includes(location);

  const closeMenus = () => {
    setMobileOpen(false);
    setCncOpen(false);
    setTipeOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" onClick={closeMenus} className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center font-mono text-primary font-black text-sm">T</div>
            <span className="font-mono">TIPE <span className="text-primary">CPGE</span></span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg transition-all ${isActive("/") ? "text-primary bg-primary/10 font-semibold" : "text-muted-foreground hover:text-foreground hover:bg-muted/40"}`}
            >
              Accueil
            </Link>
            {mainLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-3 py-2 rounded-lg transition-all ${isActive(link.path) ? "text-primary bg-primary/10 font-semibold" : "text-muted-foreground hover:text-foreground hover:bg-muted/40"}`}
              >
                {link.label}
              </Link>
            ))}

            {/* CNC dropdown */}
            <div className="relative">
              <button
                onClick={() => { setCncOpen(!cncOpen); setTipeOpen(false); }}
                onBlur={() => setTimeout(() => setCncOpen(false), 150)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-semibold border transition-all ${
                  isGroupActive(cncLinks.map((l) => l.path))
                    ? "text-primary bg-primary/15 border-primary/30"
                    : "text-primary bg-primary/10 hover:bg-primary/20 border-primary/20"
                }`}
              >
                CNC 2026 <ChevronDown className={`w-3.5 h-3.5 transition-transform ${cncOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {cncOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-56 bg-card/95 backdrop-blur-xl border border-border/60 rounded-xl shadow-xl shadow-black/20 overflow-hidden z-50"
                  >
                    {cncLinks.map((l) => (
                      <Link
                        key={l.path}
                        href={l.path}
                        className={`block w-full text-left px-4 py-2.5 text-sm transition-colors font-medium ${
                          isActive(l.path) ? "bg-primary/10 text-primary" : "hover:bg-muted/60 hover:text-primary"
                        }`}
                      >
                        {l.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* TIPE Methodology dropdown */}
            <div className="relative">
              <button
                onClick={() => { setTipeOpen(!tipeOpen); setCncOpen(false); }}
                onBlur={() => setTimeout(() => setTipeOpen(false), 150)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-semibold border transition-all ${
                  isGroupActive(tipeLinks.map((l) => l.path))
                    ? "text-accent bg-accent/15 border-accent/30"
                    : "text-accent bg-accent/10 hover:bg-accent/20 border-accent/20"
                }`}
              >
                Guide TIPE <ChevronDown className={`w-3.5 h-3.5 transition-transform ${tipeOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {tipeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-60 bg-card/95 backdrop-blur-xl border border-border/60 rounded-xl shadow-xl shadow-black/20 overflow-hidden z-50"
                  >
                    {tipeLinks.map((l) => (
                      <Link
                        key={l.path}
                        href={l.path}
                        className={`block w-full text-left px-4 py-2.5 text-sm transition-colors font-medium ${
                          isActive(l.path) ? "bg-accent/10 text-accent" : "hover:bg-muted/60 hover:text-accent"
                        }`}
                      >
                        {l.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="rounded-lg w-9 h-9">
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Link href="/contact">
              <Button className="hidden md:flex rounded-lg h-9 text-sm font-semibold shadow-sm shadow-primary/20">
                Commencer
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="lg:hidden rounded-lg w-9 h-9" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-md overflow-auto max-h-[80vh]">
              <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
                <Link href="/" className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive("/") ? "bg-primary/10 text-primary" : "hover:bg-muted/60 hover:text-primary"}`}>
                  Accueil
                </Link>
                {mainLinks.map((link) => (
                  <Link key={link.path} href={link.path}
                    className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive(link.path) ? "bg-primary/10 text-primary" : "hover:bg-muted/60 hover:text-primary"}`}>
                    {link.label}
                  </Link>
                ))}
                <div className="text-xs font-mono font-bold text-primary px-3 py-1 mt-2 uppercase tracking-wider">CNC 2026</div>
                {cncLinks.map((link) => (
                  <Link key={link.path} href={link.path}
                    className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive(link.path) ? "bg-primary/10 text-primary" : "hover:bg-primary/10 hover:text-primary"}`}>
                    {link.label}
                  </Link>
                ))}
                <div className="text-xs font-mono font-bold text-accent px-3 py-1 mt-2 uppercase tracking-wider">Guide TIPE</div>
                {tipeLinks.map((link) => (
                  <Link key={link.path} href={link.path}
                    className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive(link.path) ? "bg-accent/10 text-accent" : "hover:bg-accent/10 hover:text-accent"}`}>
                    {link.label}
                  </Link>
                ))}
                <Link href="/contact">
                  <Button className="mt-3 w-full rounded-lg font-semibold">Commencer maintenant</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {isScrolled && (
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:flex">
            <div className="bg-card/90 backdrop-blur-md border border-border/60 py-2 px-2 pl-5 rounded-full shadow-2xl shadow-black/20 flex items-center gap-3">
              <span className="text-sm font-medium font-mono text-muted-foreground">
                <span className="text-primary">$</span> prêt à réussir votre TIPE ?
              </span>
              <Link href="/contact">
                <Button className="rounded-full h-9 text-sm font-semibold shadow-md shadow-primary/20">
                  Commencer <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
