import { Layout } from "@/components/layout/Layout";
import { CNCCalculator } from "@/components/home/CNCCalculator";
import { QuickLinks } from "@/components/layout/QuickLinks";
import { useSEO } from "@/lib/useSEO";

export default function CalculateurPage() {
  useSEO();
  return (
    <Layout>
      <CNCCalculator />
      <QuickLinks
        items={[
          { label: "Voir les écoles accessibles", href: "/ecoles" },
          { label: "Comprendre les filières", href: "/filieres" },
          { label: "Parler à un conseiller", href: "/contact" },
        ]}
      />
    </Layout>
  );
}
