import { useEffect, useState, useRef } from "react";
import { ScrollReveal } from "../ScrollReveal";

const stats = [
  { label: "Silent diseases undiagnosed", value: 72, suffix: "%" },
  { label: "Years before detection", value: 7, suffix: " yrs" },
  { label: "Rising metabolic disorders", value: 340, suffix: "M+" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl font-bold text-gradient-primary">
      {count}{suffix}
    </span>
  );
};

const ProblemSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          The <span className="text-gradient-primary">Silent</span> Health Crisis
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Most serious diseases develop silently for years. By the time symptoms appear, significant damage has already occurred.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <ScrollReveal key={i}>
            <div className="glass-panel p-8 text-center">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-3 text-sm uppercase tracking-widest">{stat.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
