import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { FlaskConical, ChevronDown, Terminal, Cpu } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

/* ─── Animated counter ─── */
const useCountUp = (target: number, duration = 2000, inView = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, inView]);
  return count;
};

const StatCard = ({ value, label, prefix = "", suffix = "" }: {
  value: number; label: string; prefix?: string; suffix?: string;
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, 1800, inView);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <div className="text-3xl md:text-4xl font-black font-mono text-primary tabular-nums">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground text-center">{label}</div>
    </div>
  );
};

/* ─── Python code snippet ─── */
const PythonSnippet = () => (
  <div className="font-mono text-[11px] leading-[1.7]">
    <div><span className="text-blue-400">import</span> <span className="text-emerald-400">numpy</span> <span className="text-blue-400">as</span> <span className="text-foreground/80">np</span></div>
    <div><span className="text-blue-400">import</span> <span className="text-emerald-400">matplotlib.pyplot</span> <span className="text-blue-400">as</span> <span className="text-foreground/80">plt</span></div>
    <div className="mt-1 text-muted-foreground/60"># Simulation — oscillateur amorti</div>
    <div>
      <span className="text-yellow-300">t</span>
      <span className="text-foreground/50"> = </span>
      <span className="text-emerald-400">np</span><span className="text-foreground/50">.</span><span className="text-sky-300">linspace</span>
      <span className="text-foreground/50">(</span><span className="text-orange-400">0</span>
      <span className="text-foreground/50">, </span><span className="text-orange-400">10</span>
      <span className="text-foreground/50">, </span><span className="text-orange-400">1000</span>
      <span className="text-foreground/50">)</span>
    </div>
    <div>
      <span className="text-yellow-300">y</span>
      <span className="text-foreground/50"> = </span>
      <span className="text-emerald-400">np</span><span className="text-foreground/50">.</span><span className="text-sky-300">exp</span>
      <span className="text-foreground/50">(-</span><span className="text-orange-400">0.3</span>
      <span className="text-foreground/50">*</span><span className="text-yellow-300">t</span>
      <span className="text-foreground/50">) * </span>
      <span className="text-emerald-400">np</span><span className="text-foreground/50">.</span><span className="text-sky-300">cos</span>
      <span className="text-foreground/50">(</span><span className="text-orange-400">2</span>
      <span className="text-foreground/50">*</span><span className="text-emerald-400">np</span>
      <span className="text-foreground/50">.</span><span className="text-orange-400">pi</span>
      <span className="text-foreground/50">*</span><span className="text-yellow-300">t</span>
      <span className="text-foreground/50">)</span>
    </div>
    <div>
      <span className="text-emerald-400">plt</span><span className="text-foreground/50">.</span><span className="text-sky-300">plot</span>
      <span className="text-foreground/50">(</span><span className="text-yellow-300">t</span>
      <span className="text-foreground/50">, </span><span className="text-yellow-300">y</span>
      <span className="text-foreground/50">, </span><span className="text-orange-300">'g-'</span>
      <span className="text-foreground/50">, lw=</span><span className="text-orange-400">2</span>
      <span className="text-foreground/50">)</span>
    </div>
    <div>
      <span className="text-emerald-400">plt</span><span className="text-foreground/50">.</span><span className="text-sky-300">title</span>
      <span className="text-foreground/50">(</span><span className="text-orange-300">'Oscillateur amorti'</span>
      <span className="text-foreground/50">)</span>
    </div>
    <div><span className="text-emerald-400">plt</span><span className="text-foreground/50">.</span><span className="text-sky-300">show</span><span className="text-foreground/50">()</span></div>
    <div className="mt-1.5 flex items-center gap-1.5">
      <span className="text-primary">❯</span>
      <span className="text-muted-foreground/60">python simulation.py</span>
      <span className="text-primary cursor-blink font-bold">▋</span>
    </div>
  </div>
);

/* ─── Live matplotlib-style Canvas plot ─── */
const SimulationPlot = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const progressRef = useRef(0);
  const POINTS = 300;

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;

    const PAD_L = 36, PAD_R = 10, PAD_T = 14, PAD_B = 28;
    const plotW = W - PAD_L - PAD_R;
    const plotH = H - PAD_T - PAD_B;

    // Background
    ctx.fillStyle = "#0a120e";
    ctx.fillRect(0, 0, W, H);

    // Plot area background
    ctx.fillStyle = "#0d1a12";
    ctx.fillRect(PAD_L, PAD_T, plotW, plotH);

    // Grid lines
    ctx.strokeStyle = "rgba(34,197,94,0.10)";
    ctx.lineWidth = 0.5;
    const GRID_X = 5, GRID_Y = 4;
    for (let i = 0; i <= GRID_X; i++) {
      const x = PAD_L + (i / GRID_X) * plotW;
      ctx.beginPath(); ctx.moveTo(x, PAD_T); ctx.lineTo(x, PAD_T + plotH); ctx.stroke();
    }
    for (let i = 0; i <= GRID_Y; i++) {
      const y = PAD_T + (i / GRID_Y) * plotH;
      ctx.beginPath(); ctx.moveTo(PAD_L, y); ctx.lineTo(PAD_L + plotW, y); ctx.stroke();
    }

    // Axes
    ctx.strokeStyle = "rgba(34,197,94,0.35)";
    ctx.lineWidth = 1;
    // x-axis at center
    const midY = PAD_T + plotH / 2;
    ctx.beginPath(); ctx.moveTo(PAD_L, midY); ctx.lineTo(PAD_L + plotW, midY); ctx.stroke();
    // y-axis
    ctx.beginPath(); ctx.moveTo(PAD_L, PAD_T); ctx.lineTo(PAD_L, PAD_T + plotH); ctx.stroke();

    // Tick labels — x
    ctx.fillStyle = "rgba(34,197,94,0.55)";
    ctx.font = `${Math.floor(H * 0.07)}px JetBrains Mono, monospace`;
    ctx.textAlign = "center";
    for (let i = 0; i <= GRID_X; i++) {
      const x = PAD_L + (i / GRID_X) * plotW;
      ctx.fillText(String(i * 2), x, PAD_T + plotH + 11);
    }
    // Tick labels — y
    ctx.textAlign = "right";
    const yLabels = ["1", ".5", "0", "-.5", "-1"];
    for (let i = 0; i <= GRID_Y; i++) {
      const y = PAD_T + (i / GRID_Y) * plotH + 3;
      ctx.fillText(yLabels[i], PAD_L - 4, y);
    }

    // Envelope (dashed decay lines)
    ctx.setLineDash([3, 4]);
    ctx.strokeStyle = "rgba(34,197,94,0.18)";
    ctx.lineWidth = 1;
    // upper envelope
    ctx.beginPath();
    for (let i = 0; i < POINTS; i++) {
      const tVal = (i / POINTS) * 10;
      const env = Math.exp(-0.3 * tVal);
      const px = PAD_L + (i / POINTS) * plotW;
      const py = midY - env * (plotH / 2 - 4);
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.stroke();
    // lower envelope
    ctx.beginPath();
    for (let i = 0; i < POINTS; i++) {
      const tVal = (i / POINTS) * 10;
      const env = Math.exp(-0.3 * tVal);
      const px = PAD_L + (i / POINTS) * plotW;
      const py = midY + env * (plotH / 2 - 4);
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // Glow behind wave
    const progress = Math.min(progressRef.current, POINTS);
    if (progress > 1) {
      ctx.save();
      ctx.beginPath();
      for (let i = 0; i < progress; i++) {
        const tVal = (i / POINTS) * 10;
        const yVal = Math.exp(-0.3 * tVal) * Math.cos(2 * Math.PI * tVal);
        const px = PAD_L + (i / POINTS) * plotW;
        const py = midY - yVal * (plotH / 2 - 4);
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.strokeStyle = "rgba(34,197,94,0.12)";
      ctx.lineWidth = 6;
      ctx.stroke();
      ctx.restore();
    }

    // Main wave line
    if (progress > 1) {
      ctx.beginPath();
      for (let i = 0; i < progress; i++) {
        const tVal = (i / POINTS) * 10;
        const yVal = Math.exp(-0.3 * tVal) * Math.cos(2 * Math.PI * tVal);
        const px = PAD_L + (i / POINTS) * plotW;
        const py = midY - yVal * (plotH / 2 - 4);
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      const grad = ctx.createLinearGradient(PAD_L, 0, PAD_L + plotW, 0);
      grad.addColorStop(0, "rgba(52,211,153,0.9)");
      grad.addColorStop(0.5, "rgba(34,197,94,1)");
      grad.addColorStop(1, "rgba(16,185,129,0.7)");
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.lineJoin = "round";
      ctx.stroke();

      // Dot at current drawing position
      if (progress < POINTS) {
        const i = Math.floor(progress);
        const tVal = (i / POINTS) * 10;
        const yVal = Math.exp(-0.3 * tVal) * Math.cos(2 * Math.PI * tVal);
        const px = PAD_L + (i / POINTS) * plotW;
        const py = midY - yVal * (plotH / 2 - 4);
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#22c55e";
        ctx.shadowColor = "#22c55e";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Title
    ctx.textAlign = "center";
    ctx.fillStyle = "rgba(34,197,94,0.6)";
    ctx.font = `${Math.floor(H * 0.075)}px JetBrains Mono, monospace`;
    ctx.fillText("Oscillateur amorti", PAD_L + plotW / 2, PAD_T - 2);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let visible = true;
    const SPEED = 2.5; // points per frame

    // Ne pas animer quand le canvas est hors de l'écran (économie batterie/CPU)
    const obs = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    obs.observe(canvas);

    const loop = () => {
      if (visible) {
        progressRef.current += SPEED;
        if (progressRef.current > POINTS + 60) progressRef.current = 0; // restart with a pause
        draw();
      }
      animRef.current = requestAnimationFrame(loop);
    };
    animRef.current = requestAnimationFrame(loop);

    return () => { obs.disconnect(); cancelAnimationFrame(animRef.current); };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      width={320}
      height={160}
      className="w-full h-full"
      style={{ display: "block" }}
    />
  );
};

/* ─── Hero section ─── */
export const Hero = () => {
  const [, navigate] = useLocation();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="top" className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />

      {/* ── Floating Python code window — top right ── */}
      <motion.div
        initial={{ opacity: 0, x: 60, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.75, duration: 0.7, ease: "easeOut" }}
        className="absolute top-28 right-3 lg:right-12 w-60 lg:w-72 hidden md:block z-10"
      >
        <div className="rounded-xl overflow-hidden border border-border/70 bg-[#0d1a12]/90 backdrop-blur-xl shadow-2xl shadow-black/40">
          {/* Title bar */}
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/40 bg-black/30">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/70" />
            <span className="text-[10px] text-muted-foreground font-mono ml-1.5 opacity-70">simulation.py</span>
          </div>
          <div className="p-3.5">
            <PythonSnippet />
          </div>
        </div>
      </motion.div>

      {/* ── Floating matplotlib output — bottom right ── */}
      <motion.div
        initial={{ opacity: 0, x: 60, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7, ease: "easeOut" }}
        className="absolute bottom-28 right-3 lg:right-12 w-60 lg:w-72 hidden md:block z-10"
      >
        <div className="rounded-xl overflow-hidden border border-border/70 bg-[#0a120e]/95 backdrop-blur-xl shadow-2xl shadow-black/50">
          {/* matplotlib window bar */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-border/40 bg-black/30">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary/70" />
            </div>
            <span className="text-[10px] text-muted-foreground font-mono opacity-70">Figure 1</span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-mono text-primary">RUNNING</span>
            </div>
          </div>
          {/* Canvas */}
          <div className="p-1.5 bg-[#0a120e]">
            <SimulationPlot />
          </div>
          {/* Status bar */}
          <div className="flex items-center justify-between px-3 py-1.5 bg-black/40 border-t border-border/30">
            <span className="text-[9px] font-mono text-muted-foreground/50">matplotlib 3.8.0</span>
            <span className="text-[9px] font-mono text-primary/60">numpy · scipy</span>
          </div>
        </div>
      </motion.div>

      {/* ── Floating CPU chip — left ── */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:block opacity-[0.12]"
      >
        <Cpu className="w-24 h-24 text-primary" />
      </motion.div>

      {/* ── Main content ── */}
      <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl z-10 relative">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-8 border border-primary/25 font-mono"
        >
          <FlaskConical className="w-4 h-4" />
          Votre référence TIPE au Maroc
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, type: "spring", stiffness: 80 }}
          className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6"
        >
          Réussissez votre TIPE<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
            et intégrez l'école de vos rêves
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Simulations expérimentales, préparation orale, accompagnement scientifique — tout ce qu'il faut pour transformer votre TIPE en avantage compétitif.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            size="lg"
            className="rounded-lg w-full sm:w-auto text-base h-12 px-8 shadow-lg shadow-primary/25 hover:scale-105 transition-transform font-semibold glow-pulse"
            onClick={() => navigate("/contact")}
            data-testid="button-hero-cta"
          >
            <Terminal className="w-4 h-4 mr-2" />
            Commencer maintenant
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-lg w-full sm:w-auto text-base h-12 px-8 border-border/60 hover:border-primary/50 hover:bg-primary/5 transition-all font-semibold"
            onClick={() => scrollTo("services")}
            data-testid="button-hero-services"
          >
            Découvrir nos services
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border/50"
        >
          <StatCard value={200} label="Étudiants accompagnés" prefix="+" />
          <StatCard value={95} label="Taux de réussite" suffix="%" />
          <StatCard value={50} label="Grandes Écoles intégrées" prefix="+" />
          <StatCard value={6} label="Années d'expérience" suffix="+" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        onClick={() => scrollTo("features")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/50 hover:text-primary transition-colors"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
};
