import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const phase0Ref = useRef<HTMLDivElement>(null);
    const phase1Ref = useRef<HTMLDivElement>(null);
    const phase2Ref = useRef<HTMLDivElement>(null);
    const phase3Ref = useRef<HTMLDivElement>(null);
    const phase4Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1,
                    pin: '.intro-viewport',
                    anticipatePin: 1,
                },
            });

            // Phase 0: Initial state (0% - 15%)
            // Subject image subtle scale + text visible
            tl.fromTo(
                phase0Ref.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
                0
            );
            tl.to(
                imageRef.current,
                { scale: 1.05, duration: 2, ease: 'none' },
                0
            );
            tl.to(
                phase0Ref.current,
                { opacity: 0, y: -20, duration: 0.3 },
                0.8
            );

            // Phase 1: 25% — Profile reveal (skills)
            tl.fromTo(
                phase1Ref.current,
                { opacity: 0, y: 25 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
                1.2
            );
            tl.to(
                imageRef.current,
                { x: '-15%', filter: 'brightness(0.7)', duration: 1 },
                1.2
            );
            tl.to(
                phase1Ref.current,
                { opacity: 0, y: -20, duration: 0.3 },
                2.0
            );

            // Phase 2: 50% — Resources
            tl.fromTo(
                phase2Ref.current,
                { opacity: 0, y: 25 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
                2.4
            );
            tl.to(
                imageRef.current,
                { x: '15%', filter: 'brightness(0.6)', duration: 1 },
                2.4
            );
            tl.to(
                phase2Ref.current,
                { opacity: 0, y: -20, duration: 0.3 },
                3.2
            );

            // Phase 3: 75% — Philosophy
            tl.fromTo(
                phase3Ref.current,
                { opacity: 0, y: 25 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
                3.5
            );
            tl.to(
                imageRef.current,
                { x: '0%', filter: 'brightness(0.5)', scale: 1.1, duration: 1 },
                3.5
            );
            tl.to(
                phase3Ref.current,
                { opacity: 0, y: -20, duration: 0.3 },
                4.3
            );

            // Phase 4: 100% — CTA reveal
            tl.fromTo(
                phase4Ref.current,
                { opacity: 0, y: 25 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
                4.6
            );
            tl.to(
                imageRef.current,
                { x: '0%', filter: 'brightness(0.35)', scale: 1.15, duration: 1 },
                4.6
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative" style={{ height: '500vh' }}>
            <div className="intro-viewport h-screen w-full overflow-hidden relative flex items-center justify-center">

                {/* Subject Image */}
                <div
                    ref={imageRef}
                    className="absolute inset-0 flex items-center justify-center z-0"
                >
                    <img
                        src="/portfolio-site/devesh.webp"
                        alt="Devesh Goyal"
                        className="h-[85vh] w-auto object-contain select-none"
                        draggable={false}
                        loading="eager"
                    />
                </div>

                {/* ──── Phase 0: Name + Title (center) ──── */}
                <div
                    ref={phase0Ref}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center opacity-0 pointer-events-none"
                >
                    <p className="font-mono text-xs tracking-[0.3em] text-muted mb-6 uppercase">Documentary Video Editor</p>
                    <h1 className="text-6xl md:text-8xl font-light tracking-tight leading-[0.9]">
                        DEVESH<br />
                        <span className="font-semibold">GOYAL</span>
                    </h1>
                    <div className="mt-8 w-12 h-[1px] bg-accent"></div>
                </div>

                {/* ──── Phase 1: Skills (right side) ──── */}
                <div
                    ref={phase1Ref}
                    className="absolute right-8 md:right-20 top-1/2 -translate-y-1/2 z-10 text-right opacity-0 pointer-events-none"
                >
                    <p className="font-mono text-[10px] tracking-[0.3em] text-accent mb-4 uppercase">Expertise</p>
                    {['Research', 'Structure', 'Geopolitics', 'War History'].map((item, i) => (
                        <p key={i} className="text-2xl md:text-4xl font-light leading-relaxed tracking-wide">
                            {item}
                        </p>
                    ))}
                </div>

                {/* ──── Phase 2: Resources (left side) ──── */}
                <div
                    ref={phase2Ref}
                    className="absolute left-8 md:left-20 top-1/2 -translate-y-1/2 z-10 text-left opacity-0 pointer-events-none"
                >
                    <p className="font-mono text-[10px] tracking-[0.3em] text-accent mb-4 uppercase">Resources</p>
                    {['Presets', 'Workflow Systems', 'Templates', 'Editing Assets'].map((item, i) => (
                        <p key={i} className="text-2xl md:text-4xl font-light leading-relaxed tracking-wide">
                            {item}
                        </p>
                    ))}
                </div>

                {/* ──── Phase 3: Philosophy (center) ──── */}
                <div
                    ref={phase3Ref}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center opacity-0 pointer-events-none"
                >
                    <p className="font-mono text-[10px] tracking-[0.3em] text-accent mb-4 uppercase">Philosophy</p>
                    <p className="text-3xl md:text-5xl font-light leading-relaxed">Narrative Architecture</p>
                    <p className="text-3xl md:text-5xl font-light leading-relaxed text-muted">Cinematic Minimalism</p>
                </div>

                {/* ──── Phase 4: CTA (center) ──── */}
                <div
                    ref={phase4Ref}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-24 text-center opacity-0"
                >
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#work"
                            className="px-10 py-4 border border-primary/30 text-primary font-mono text-sm tracking-widest uppercase hover:bg-primary hover:text-surface transition-all duration-700"
                        >
                            View My Work
                        </a>
                        <a
                            href="#resources"
                            className="px-10 py-4 border border-accent text-accent font-mono text-sm tracking-widest uppercase hover:bg-accent hover:text-primary transition-all duration-700"
                        >
                            Explore Presets
                        </a>
                    </div>
                    <p className="font-mono text-[10px] text-muted mt-8 tracking-widest animate-pulse">↓ SCROLL TO CONTINUE</p>
                </div>

                {/* Scroll Progress Indicator */}
                <div className="absolute bottom-8 left-8 z-10 font-mono text-[10px] text-muted tracking-widest">
                    <span className="opacity-50">INTRO SEQUENCE</span>
                </div>
            </div>
        </div>
    );
};

export default IntroSection;
