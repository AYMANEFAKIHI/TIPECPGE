import { Layout } from "@/components/layout/Layout";
import { SchoolsExplorer } from "@/components/home/SchoolsExplorer";
import { StatsDashboard } from "@/components/home/StatsDashboard";
import { QuickLinks } from "@/components/layout/QuickLinks";
import { useSEO } from "@/lib/useSEO";

export default function EcolesPage() {
  useSEO();
  return (
    <Layout>
      <SchoolsExplorer />
      <StatsDashboard />
      <QuickLinks
        items={[
          { label: "Comparer les filières", href: "/filieres" },
          { label: "Calculer ma note finale", href: "/calculateur" },
          { label: "Contacter un conseiller", href: "/contact" },
        ]}
      />
    </Layout>
  );
}
