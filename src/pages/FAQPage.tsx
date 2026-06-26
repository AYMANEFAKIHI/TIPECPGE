import { Layout } from "@/components/layout/Layout";
import { FAQ } from "@/components/home/FAQSimple";
import { QuickLinks } from "@/components/layout/QuickLinks";
import { useSEO } from "@/lib/useSEO";

export default function FAQPage() {
  useSEO();
  return (
    <Layout>
      <FAQ />
      <QuickLinks
        items={[
          { label: "Voir le dashboard CNC 2026", href: "/cnc-2026" },
          { label: "Notre méthodologie", href: "/methodologie" },
          { label: "Nous contacter", href: "/contact" },
        ]}
      />
    </Layout>
  );
}
