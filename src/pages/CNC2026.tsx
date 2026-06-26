import { Layout } from "@/components/layout/Layout";
import { CNCDashboard } from "@/components/home/CNCDashboard";
import { CNCCalendar } from "@/components/home/CNCCalendar";
import { CNCRegistrationGuide } from "@/components/home/CNCRegistrationGuide";
import { QuickLinks } from "@/components/layout/QuickLinks";
import { useSEO } from "@/lib/useSEO";

export default function CNC2026Page() {
  useSEO();
  return (
    <Layout>
      <CNCDashboard />
      <CNCCalendar />
      <CNCRegistrationGuide />
      <QuickLinks
        items={[
          { label: "Calculer ma note finale", href: "/calculateur" },
          { label: "Explorer les écoles", href: "/ecoles" },
          { label: "Voir les filières", href: "/filieres" },
        ]}
      />
    </Layout>
  );
}
