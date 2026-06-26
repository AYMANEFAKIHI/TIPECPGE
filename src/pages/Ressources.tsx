import { Layout } from "@/components/layout/Layout";
import { TIPEThemesExplorer } from "@/components/home/TIPEThemesExplorer";
import { QuickLinks } from "@/components/layout/QuickLinks";
import { useSEO } from "@/lib/useSEO";

export default function RessourcesPage() {
  useSEO();
  return (
    <Layout>
      <TIPEThemesExplorer />
      <QuickLinks
        items={[
          { label: "Voir notre méthodologie", href: "/methodologie" },
          { label: "Études de cas", href: "/etudes-de-cas" },
          { label: "Poser une question", href: "/contact" },
        ]}
      />
    </Layout>
  );
}
