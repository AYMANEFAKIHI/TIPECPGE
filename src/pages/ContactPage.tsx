import { Layout } from "@/components/layout/Layout";
import { Contact } from "@/components/home/Contact";
import { About } from "@/components/home/About";
import { Social } from "@/components/home/Social";
import { useSEO } from "@/lib/useSEO";

export default function ContactPage() {
  useSEO();
  return (
    <Layout>
      <Contact />
      <About />
      <Social />
    </Layout>
  );
}
