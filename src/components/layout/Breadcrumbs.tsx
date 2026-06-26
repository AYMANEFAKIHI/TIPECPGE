import { Link, useLocation } from "wouter";
import { ChevronRight, Home } from "lucide-react";
import { getRouteMeta } from "@/lib/routes";

export const Breadcrumbs = () => {
  const [location] = useLocation();
  if (location === "/") return null;

  const meta = getRouteMeta(location);

  return (
    <div className="border-b border-border/40 bg-muted/10">
      <div className="container mx-auto px-4 md:px-6 py-3">
        <nav className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
          <Link href="/" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Home className="w-3 h-3" /> Accueil
          </Link>
          <ChevronRight className="w-3 h-3 opacity-50" />
          <span className="text-foreground font-semibold">{meta.label}</span>
        </nav>
      </div>
    </div>
  );
};
