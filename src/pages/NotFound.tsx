import { Link } from "wouter";
import { ArrowRight, Home as HomeIcon } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { useSEO } from "@/lib/useSEO";

export default function NotFound() {
  useSEO();
  return (
    <Layout noBreadcrumbs>
      <section className="py-32 flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <div className="text-6xl font-black font-mono text-primary mb-4">404</div>
          <h1 className="text-2xl font-bold mb-3">Page introuvable</h1>
          <p className="text-muted-foreground text-sm mb-8">
            La page que tu cherches n'existe pas ou a été déplacée.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
            <HomeIcon className="w-4 h-4" /> Retour à l'accueil <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
