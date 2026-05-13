import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        step: "PRJ-01",
        title: "Cybernetic Campaigns",
        desc: "A high-octane visual identity overhaul for tech brands. Combining 3D motion with kinetic typography.",
        Visual: () => (
            <div className="relative w-full h-full flex items-center justify-center p-8 bg-black/40">
                <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 rotating-geom drop-shadow-[0_0_15px_rgba(123,97,255,0.8)]">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/30" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" className="text-accent" />
                    <polygon points="50,15 80,75 20,75" fill="none" stroke="#F0EFF4" strokeWidth="1" />
                </svg>
            </div>
        )
    },
    {
        step: "PRJ-02",
        title: "Algorithmic Edits",
        desc: "Short-form content engineered for TikTok and Reels, resulting in 10M+ collective impressions.",
        Visual: () => (
            <div className="relative w-full h-full flex flex-col items-center justify-center p-8 bg-black/40">
                <div className="w-full h-32 border border-accent/20 relative overflow-hidden flex flex-wrap gap-1 p-2 bg-primary/50">
                    {Array.from({ length: 40 }).map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-accent/20 rounded-sm"></div>
                    ))}
                    <div className="laser-line absolute top-0 left-0 w-full h-1 bg-accent shadow-[0_0_15px_4px_rgba(123,97,255,0.8)]"></div>
                </div>
            </div>
        )
    },
    {
        step: "PRJ-03",
        title: "Synthesized Aesthetics",
        desc: "Creating immersive digital experiences through ambient sound design and seamless loop sequences.",
        Visual: () => (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black/40">
                <svg viewBox="0 0 200 100" className="w-full drop-shadow-[0_0_15px_rgba(123,97,255,1)]">
                    <path
                        className="waveform-path"
                        d="M 0 50 L 40 50 L 50 10 L 60 90 L 70 30 L 80 60 L 90 50 L 200 50"
                        fill="none"
                        stroke="#7B61FF"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        )
    }
];

const Protocol = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        // Visual Animations
        gsap.to('.rotating-geom', { rotation: 360, duration: 20, repeat: -1, ease: "linear" });
        gsap.to('.laser-line', { y: 120, duration: 1.5, repeat: -1, yoyo: true, ease: "linear" });

        gsap.set('.waveform-path', { strokeDasharray: 400, strokeDashoffset: 400 });
        gsap.to('.waveform-path', {
            strokeDashoffset: 0,
            duration: 1.5,
            repeat: -1,
            ease: "power2.inOut"
        });

        const ctx = gsap.context(() => {
            const cards = cardsRef.current;

            cards.forEach((card, index) => {
                if (index === cards.length - 1) return;

                gsap.to(card, {
                    scale: 0.9,
                    opacity: 0.3,
                    filter: 'blur(15px)',
                    scrollTrigger: {
                        trigger: cards[index + 1],
                        start: "top bottom",
                        end: "top top",
                        scrub: true,
                    }
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" ref={containerRef} className="relative w-full bg-primary pb-[10vh]">
            <div className="pt-24 px-6 md:px-16 max-w-6xl mx-auto">
                <h2 className="text-background font-mono font-bold text-sm tracking-widest uppercase mb-16 drop-shadow-[0_0_8px_rgba(123,97,255,0.5)]">
                    <span className="text-accent mr-3 animate-pulse inline-block">_</span>
                    Archive [Projects]
                </h2>
            </div>

            <div className="relative w-full h-[300vh]">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        ref={el => cardsRef.current[i] = el}
                        className="sticky top-0 w-full h-screen flex items-center justify-center pt-20 px-6"
                    >
                        <div className="w-full max-w-5xl aspect-[4/3] md:aspect-[21/9] bg-[#0A0A14] rounded-[3rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(123,97,255,0.15)] flex flex-col md:flex-row border border-accent/20 relative">

                            {/* Neon glow effect behind card text */}
                            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

                            <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center relative z-10">
                                <span className="font-mono text-accent text-lg font-bold mb-6 drop-shadow-[0_0_5px_rgba(123,97,255,0.8)]">[{project.step}]</span>
                                <h3 className="font-sans text-4xl md:text-5xl font-bold text-background mb-6 tracking-tight">
                                    {project.title}
                                </h3>
                                <p className="font-sans text-background/60 text-lg leading-relaxed max-w-md">
                                    {project.desc}
                                </p>
                            </div>

                            <div className="w-full md:w-1/2 bg-[#05050A] relative border-l border-accent/10">
                                <div className="absolute inset-x-0 inset-y-0 opacity-20 pointer-events-none"
                                    style={{
                                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(123, 97, 255, 0.4) 1px, transparent 0)',
                                        backgroundSize: '24px 24px'
                                    }}>
                                </div>
                                <project.Visual />
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Protocol;
