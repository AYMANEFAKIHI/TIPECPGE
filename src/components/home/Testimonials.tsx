import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/primitives";
import { Star, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback, useState } from "react";

const testimonials = [
  {
    name: "Rania Ahdidou",
    school: "ENSA Marrakech",
    filiere: "MP",
    text: "L'accompagnement de TIPE CPGE a complètement transformé mon approche du TIPE. La méthodologie en 6 étapes m'a permis de structurer mon travail dès le début, et la simulation d'oral m'a donné une vraie confiance le jour J. Je recommande à tous les CPGÉISTES.",
    initials: "RA",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    name: "Meryem Laghbach",
    school: "EMI Rabat",
    filiere: "PSI",
    text: "Grâce à TIPE CPGE, j'ai pu finaliser ma MCOT en un temps record. L'équipe est réactive, les retours sont précis et vraiment adaptés aux exigences du jury. J'ai intégré l'EMI avec un dossier TIPE solide que je n'aurais pas pu construire seule.",
    initials: "ML",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    name: "Niama Guissi",
    school: "Centrale Casablanca",
    filiere: "MP",
    text: "Ce qui m'a le plus aidée, c'est la relecture critique de mon positionnement thématique et les conseils sur la simulation Python. L'équipe comprend vraiment les attentes du CNC. Une expérience d'accompagnement sérieuse et bienveillante.",
    initials: "NG",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    name: "Anas Charbil",
    school: "ENSEM Casablanca",
    filiere: "TSI",
    text: "En tant qu'étudiant en TSI, je pensais que le TIPE serait un obstacle. TIPE CPGE m'a montré comment valoriser mon profil technique. Les retours sur ma présentation et le travail sur le DOT ont été décisifs pour mon admission.",
    initials: "AC",
    gradient: "from-orange-500 to-amber-400",
  },
];

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    const autoplay = setInterval(() => emblaApi.scrollNext(), 5500);
    return () => {
      clearInterval(autoplay);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono font-semibold mb-4 border border-accent/20">
            etudiants.reviews[]
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ce que disent nos étudiants</h2>
          <p className="text-muted-foreground text-lg">La réussite de nos étudiants parle d'elle-même.</p>
        </motion.div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing max-w-4xl mx-auto" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-[0_0_100%] md:flex-[0_0_70%] min-w-0 px-3">
                <div className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-8 h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-primary/20" />
                  </div>

                  <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-8 italic">
                    "{t.text}"
                  </p>

                  <div className="flex items-center gap-4 pt-5 border-t border-border/50">
                    <Avatar className="w-12 h-12 ring-2 ring-border">
                      <AvatarFallback className={`bg-gradient-to-br ${t.gradient} text-white font-bold text-sm`}>
                        {t.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-base">{t.name}</div>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-mono text-primary text-xs">{t.filiere}</span>
                        {" · "}
                        {t.school}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === selectedIndex ? "w-6 bg-primary" : "w-1.5 bg-border"
              }`}
              data-testid={`button-testimonial-dot-${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
