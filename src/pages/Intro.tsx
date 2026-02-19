import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReducedMotion } from 'framer-motion';

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

const revealStyle = (progress: number, start: number, end: number) => {
  const local = clamp((progress - start) / (end - start));
  return {
    opacity: local,
    transform: `translateY(${(1 - local) * 14}px)`,
    transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
  };
};

const detectLowPerf = () => {
  if (typeof window === 'undefined') return false;

  const nav = navigator as Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };
  const saveDataEnabled = Boolean(nav.connection?.saveData);
  const lowMemory = (nav.deviceMemory ?? 8) <= 4;
  const lowCpu = (navigator.hardwareConcurrency ?? 8) <= 4;
  return saveDataEnabled || lowMemory || lowCpu;
};

const Intro = () => {
  const reduceMotion = useReducedMotion();
  const touchStartY = useRef<number | null>(null);

  const lowPerfFallback = useMemo(() => {
    return detectLowPerf();
  }, []);

  const staticMode = reduceMotion || lowPerfFallback;
  const [progress, setProgress] = useState(() => (staticMode ? 1 : 0));
  const [isLocked, setIsLocked] = useState(() => !staticMode);
  const effectiveProgress = staticMode ? 1 : progress;
  const effectiveLock = staticMode ? false : isLocked;

  useEffect(() => {
    document.body.style.overflow = effectiveLock ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [effectiveLock]);

  useEffect(() => {
    if (!effectiveLock || staticMode) return;

    const updateProgress = (delta: number) => {
      setProgress((current) => {
        const next = clamp(current + delta);
        if (next >= 1) {
          setIsLocked(false);
          return 1;
        }
        return next;
      });
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      updateProgress(event.deltaY * 0.0007);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const allowed = ['ArrowDown', 'PageDown', ' ', 'ArrowUp', 'PageUp'];
      if (!allowed.includes(event.key)) return;
      event.preventDefault();
      const direction = ['ArrowDown', 'PageDown', ' '].includes(event.key) ? 1 : -1;
      updateProgress(direction * 0.04);
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0]?.clientY ?? null;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (touchStartY.current === null) return;
      const deltaY = touchStartY.current - event.touches[0].clientY;
      touchStartY.current = event.touches[0].clientY;
      event.preventDefault();
      updateProgress(deltaY * 0.0025);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [effectiveLock, staticMode]);

  const rotation = effectiveProgress * 360;

  return (
    <div className="bg-[#0F0F0F] text-[#E8E8E8] min-h-screen" style={{ fontFamily: 'IBM Plex Sans, system-ui, sans-serif' }}>
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(122,28,28,0.22),transparent_65%)]" />
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(0,0,0,0.52),transparent_40%,rgba(0,0,0,0.7))]" />
        <div className="absolute inset-0 film-grain mix-blend-soft-light pointer-events-none" style={{ opacity: 0.06 }} />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
          <p className="absolute top-8 left-6 md:left-10 text-[11px] tracking-[0.22em] uppercase text-[#B9B9B9]" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
            Documentary Edit Suite / Scroll to Reveal
          </p>

          <div className="mx-auto w-[280px] h-[380px] md:w-[360px] md:h-[460px] border border-white/20 bg-black/40 backdrop-blur-sm relative [perspective:1000px]">
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ transformStyle: 'preserve-3d', transform: `rotateY(${rotation}deg)`, transition: 'transform 0.1s linear' }}
            >
              <div className="w-[62%] h-[70%] rounded-[44%_44%_40%_40%] bg-gradient-to-b from-[#5e5e5e] via-[#2f2f2f] to-[#171717] border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.6)]" />
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/2 top-[25%] -translate-x-1/2 text-center" style={revealStyle(effectiveProgress, 0, 0.14)}>
              <h1 className="text-4xl md:text-6xl uppercase tracking-wide">DE VESH GOYAL</h1>
              <p className="mt-2 text-sm md:text-base text-[#C9C9C9]">Documentary Video Editor</p>
            </div>

            <div className="absolute right-8 md:right-16 top-[35%] text-right" style={revealStyle(effectiveProgress, 0.24, 0.38)}>
              <p className="text-sm md:text-base leading-7">Research<br />Structure<br />Geopolitics<br />War History</p>
            </div>

            <div className="absolute left-8 md:left-16 top-[56%]" style={revealStyle(effectiveProgress, 0.48, 0.62)}>
              <p className="text-sm md:text-base leading-7">Presets<br />Workflow Systems<br />Templates<br />Editing Assets</p>
            </div>

            <div className="absolute right-8 md:right-16 bottom-[18%] text-right" style={revealStyle(effectiveProgress, 0.72, 0.86)}>
              <p className="text-sm md:text-base leading-7">Narrative Architecture<br />Cinematic Minimalism</p>
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 bottom-12 md:bottom-14 flex flex-col sm:flex-row gap-4" style={revealStyle(effectiveProgress, 0.94, 1)}>
            <Link
              to="/portfolio"
              className="px-7 py-3 border border-[#7A1C1C] text-[#E8E8E8] hover:bg-[#7A1C1C]/20 transition-colors uppercase tracking-[0.14em] text-xs md:text-sm"
              style={{ fontFamily: 'IBM Plex Mono, monospace' }}
            >
              View My Work
            </Link>
            <Link
              to="/presets"
              className="px-7 py-3 border border-white/30 text-[#E8E8E8] hover:border-[#7A1C1C] hover:text-[#fff] transition-colors uppercase tracking-[0.14em] text-xs md:text-sm"
              style={{ fontFamily: 'IBM Plex Mono, monospace' }}
            >
              Explore Presets
            </Link>
          </div>

          {effectiveLock && !staticMode && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.2em] uppercase text-[#9d9d9d]" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
              Rotation {Math.round(effectiveProgress * 100)}%
            </div>
          )}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
        <p className="text-xs tracking-[0.22em] uppercase text-[#9f9f9f] mb-4" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Section 1</p>
        <h2 className="text-3xl md:text-5xl uppercase mb-6">Client Work Showcase</h2>
        <p className="max-w-3xl text-[#C9C9C9]">Selected films, campaign edits, and narrative promos built for clarity, authority, and emotional weight.</p>
        <Link to="/portfolio" className="inline-flex items-center gap-2 mt-8 text-[#d2d2d2] hover:text-white border-b border-[#7A1C1C]/70 pb-1">
          Enter Portfolio
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
        <p className="text-xs tracking-[0.22em] uppercase text-[#9f9f9f] mb-4" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Section 2</p>
        <h2 className="text-3xl md:text-5xl uppercase mb-6">Editor Resource Library</h2>
        <p className="max-w-3xl text-[#C9C9C9]">Workflow systems, presets, and practical templates shaped by real documentary and long-form editing environments.</p>
        <Link to="/presets" className="inline-flex items-center gap-2 mt-8 text-[#d2d2d2] hover:text-white border-b border-[#7A1C1C]/70 pb-1">
          Explore Resources
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10 border-b border-white/10 mb-16">
        <p className="text-xs tracking-[0.22em] uppercase text-[#9f9f9f] mb-4" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Section 3</p>
        <h2 className="text-3xl md:text-5xl uppercase mb-6">Contact CTA</h2>
        <p className="max-w-3xl text-[#C9C9C9]">If your project needs disciplined storytelling and cinematic restraint, let’s discuss your timeline and goals.</p>
        <Link to="/portfolio#contact" className="inline-flex items-center gap-2 mt-8 text-[#d2d2d2] hover:text-white border-b border-[#7A1C1C]/70 pb-1">
          Send Project Brief
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
};

export default Intro;
