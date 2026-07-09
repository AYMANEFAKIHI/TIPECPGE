import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send, Loader2, Terminal } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "wouter";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

const WHATSAPP_URL =
  "https://wa.me/212712177517?text=Bonjour%20TIPE%20CPGE%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20vos%20services";

const GREETING =
  "Bonjour 👋 Je suis l'assistant TIPE CPGE. Posez-moi vos questions sur les packs, les tarifs ou le déroulement — je réponds tout de suite.";

const QUICK = ["Quel pack pour moi ?", "C'est quoi la MCOT ?", "Combien ça coûte ?"];

export const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const next: Msg[] = [...msgs, { role: "user", content: trimmed }];
    setMsgs(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.reply) {
        setMsgs((m) => [...m, { role: "assistant", content: data.reply }]);
      } else {
        setMsgs((m) => [
          ...m,
          {
            role: "assistant",
            content:
              (data && data.error) ||
              "Désolé, je rencontre un souci technique. Le plus simple : écrivez-nous directement sur WhatsApp 👇",
          },
        ]);
      }
    } catch {
      setMsgs((m) => [
        ...m,
        {
          role: "assistant",
          content: "Connexion impossible. Écrivez-nous directement sur WhatsApp 👇",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  const display: Msg[] = [{ role: "assistant", content: GREETING }, ...msgs];

  return (
    <>
      {/* Launcher — bottom-left, aucune collision avec le bouton WhatsApp (bottom-right) */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setOpen(true)}
            aria-label="Ouvrir l'assistant TIPE CPGE"
            className="fixed bottom-6 left-6 z-50 flex items-center gap-2 h-14 pl-4 pr-5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30 hover:scale-105 transition-transform font-semibold"
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-sm hidden sm:inline">Une question ?</span>
            <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-primary border-2 border-background animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Panneau */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", damping: 24, stiffness: 260 }}
            className="fixed z-50 flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/95 backdrop-blur-xl shadow-2xl shadow-black/40
                       bottom-4 left-4 right-4 top-20
                       sm:top-auto sm:right-auto sm:bottom-6 sm:left-6 sm:h-[560px] sm:w-[380px] sm:max-h-[calc(100vh-3rem)]"
            role="dialog"
            aria-label="Assistant TIPE CPGE"
          >
            <div className="h-0.5 bg-gradient-to-r from-primary via-accent to-primary shrink-0" />
            {/* Barre titre style terminal */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/30 shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-primary" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-bold">Assistant TIPE CPGE</div>
                  <div className="text-[11px] font-mono text-primary/70 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> en ligne · réponse instantanée
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer l'assistant"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {display.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-muted/60 border border-border/50 rounded-bl-sm"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-muted/60 border border-border/50 rounded-2xl rounded-bl-sm px-4 py-3">
                    <span className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </span>
                  </div>
                </div>
              )}

              {/* Suggestions au démarrage */}
              {msgs.length === 0 && !loading && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {QUICK.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="text-xs font-mono px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Raccourcis de contact — WhatsApp en priorité */}
            <div className="px-3 pt-2 flex items-center gap-2 shrink-0">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 h-9 rounded-lg bg-[#25d366]/10 border border-[#25d366]/30 text-[#25d366] text-xs font-semibold hover:bg-[#25d366]/20 transition-colors"
              >
                <SiWhatsapp className="w-3.5 h-3.5" /> WhatsApp
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex-1 flex items-center justify-center h-9 rounded-lg border border-border/60 text-xs font-semibold text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                Formulaire de contact
              </Link>
            </div>

            {/* Saisie */}
            <form onSubmit={onSubmit} className="p-3 flex items-center gap-2 shrink-0">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Écrivez votre question…"
                aria-label="Votre message"
                className="flex h-11 w-full rounded-lg border border-border/60 bg-background/50 px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/60 focus:border-primary/60 transition-colors"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Envoyer"
                className="w-11 h-11 shrink-0 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shadow-md shadow-primary/20 hover:scale-105 transition-transform disabled:opacity-50 disabled:scale-100"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </form>

            <div className="pb-2 text-center text-[10px] font-mono text-muted-foreground/50 shrink-0">
              # assistant automatique — pour un cas précis, contactez-nous
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
