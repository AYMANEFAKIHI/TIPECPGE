import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send, Terminal, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const FORMSPREE_URL = "https://formspree.io/f/xpqgdpep";

const packs = [
  "Pack 1 – Conseil",
  "Pack 2 – Question",
  "Pack 3 – Faisabilité",
  "Pack 4 – MCOT",
  "Pack 5 – Présentation",
  "Pack VIP",
  "Pack CNAEM / ISCAE",
];

const inputCls = "flex h-11 w-full rounded-md border border-border/60 bg-background/50 px-3 py-2 text-sm font-mono placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/60 focus:border-primary/60 transition-colors";

export const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [vals, setVals] = useState({ firstName: "", lastName: "", email: "", phone: "", pack: "" });
  const [errs, setErrs] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (vals.firstName.length < 2) e.firstName = "Le prénom est requis";
    if (vals.lastName.length < 2) e.lastName = "Le nom est requis";
    if (!vals.email.includes("@")) e.email = "Email invalide";
    if (vals.phone.length < 9) e.phone = "Numéro invalide";
    if (!vals.pack) e.pack = "Veuillez choisir un pack";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate();
    if (Object.keys(found).length) { setErrs(found); return; }
    setLoading(true);
    setServerError("");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          prenom: vals.firstName,
          nom: vals.lastName,
          email: vals.email,
          telephone: vals.phone,
          pack: vals.pack,
        }),
      });
      if (res.ok) {
        setSuccess(true);
        setVals({ firstName: "", lastName: "", email: "", phone: "", pack: "" });
        setTimeout(() => setSuccess(false), 6000);
      } else {
        setServerError("Une erreur est survenue. Réessayez ou contactez-nous sur WhatsApp.");
      }
    } catch {
      setServerError("Connexion impossible. Vérifiez votre réseau.");
    } finally {
      setLoading(false);
    }
  };

  const set = (k: keyof typeof vals) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setVals((v) => ({ ...v, [k]: e.target.value }));

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 max-w-2xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-4 border border-primary/20">
            <Terminal className="w-3 h-3" /> contact.submit()
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Prêt à réussir ?</h2>
          <p className="text-muted-foreground text-lg">Remplissez ce formulaire — nous vous répondons sous 24h.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative rounded-xl border border-border/60 bg-card/80 backdrop-blur-xl overflow-hidden shadow-xl shadow-black/10">
          <div className="h-0.5 bg-gradient-to-r from-primary via-accent to-primary" />
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border/50 bg-muted/30">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/70" />
            <span className="text-xs font-mono text-muted-foreground ml-2">nouveau_dossier.form</span>
          </div>
          <AnimatePresence>
            {success && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 bg-card/97 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
                  className="w-20 h-20 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Demande envoyée !</h3>
                <p className="text-muted-foreground">Notre équipe vous contactera dans les plus brefs délais.</p>
                <div className="mt-4 font-mono text-xs text-primary/60">status: 200 OK · message: "Votre dossier a été reçu"</div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="p-7 md:p-9">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {(["firstName", "lastName"] as const).map((name) => (
                  <div key={name} className="space-y-1.5">
                    <label className="text-sm font-mono text-muted-foreground">{name === "firstName" ? "prénom" : "nom"}</label>
                    <input className={inputCls} placeholder={name === "firstName" ? "Ahmed" : "Benali"} value={vals[name]} onChange={set(name)} />
                    {errs[name] && <p className="text-xs text-red-500">{errs[name]}</p>}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-mono text-muted-foreground">email</label>
                  <input type="email" className={inputCls} placeholder="ahmed@email.com" value={vals.email} onChange={set("email")} />
                  {errs.email && <p className="text-xs text-red-500">{errs.email}</p>}
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-mono text-muted-foreground">téléphone</label>
                  <input type="tel" className={inputCls} placeholder="06 00 00 00 00" value={vals.phone} onChange={set("phone")} />
                  {errs.phone && <p className="text-xs text-red-500">{errs.phone}</p>}
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-mono text-muted-foreground">pack_choisi</label>
                <select className={inputCls} value={vals.pack} onChange={set("pack")}>
                  <option value="">Sélectionnez un pack</option>
                  {packs.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
                {errs.pack && <p className="text-xs text-red-500">{errs.pack}</p>}
              </div>
              {serverError && (
                <p className="text-sm text-red-500 font-mono bg-red-500/10 border border-red-500/20 rounded-md px-3 py-2">
                  ⚠ {serverError}
                </p>
              )}
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full h-12 font-semibold rounded-lg shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform mt-2 disabled:opacity-60 disabled:scale-100"
              >
                {loading
                  ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Envoi en cours…</>
                  : <><Send className="w-4 h-4 mr-2" /> Envoyer ma demande</>
                }
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
