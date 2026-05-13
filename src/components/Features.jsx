import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ShufflerCard = () => {
    const [cards, setCards] = useState([
        { id: 1, title: 'Engagement Spike', status: 'Viral', data: '4.2M Views' },
        { id: 2, title: 'Hook Retention', status: 'Optimized', data: '78% at 3s' },
        { id: 3, title: 'Share Velocity', status: 'Trending', data: '12k/hour' },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prev => {
                const newCards = [...prev];
                const last = newCards.pop();
                newCards.unshift(last);
                return newCards;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-48 mt-4 perspective-[1000px]">
            {cards.map((card, idx) => {
                return (
                    <div
                        key={card.id}
                        className="absolute top-0 left-0 w-full p-4 rounded-2xl border border-accent/20 bg-primary/80 backdrop-blur-md shadow-[0_4px_20px_rgba(123,97,255,0.1)] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                        style={{
                            transform: `translateY(${idx * 16}px) scale(${1 - idx * 0.05})`,
                            opacity: 1 - idx * 0.2,
                            zIndex: 3 - idx,
                        }}
                    >
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-mono font-medium text-background/60">{card.title}</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent text-primary font-bold uppercase tracking-wider drop-shadow-[0_0_8px_rgba(123,97,255,0.6)]">
                                {card.status}
                            </span>
                        </div>
                        <div className="text-xl font-sans font-bold text-background drop-shadow-sm">
                            {card.data}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const TypewriterCard = () => {
    const [text, setText] = useState('');
    const fullText = "Initializing particle simulation...\nRendering volumetric lighting...\nBaking physics cache... [OK]\nExporting sequence. Density: High";

    useEffect(() => {
        let i = 0;
        setText('');
        const interval = setInterval(() => {
            if (i < fullText.length) {
                setText(prev => prev + fullText.charAt(i));
                i++;
            } else {
                setTimeout(() => { i = 0; setText(''); }, 4000); // restart
            }
        }, 40);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-48 mt-4 bg-background text-primary p-4 rounded-2xl overflow-hidden relative border border-background/10 shadow-[inset_0_0_20px_rgba(123,97,255,0.1)]">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(123,97,255,1)]"></div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">Render Engine</span>
            </div>
            <div className="font-mono text-xs text-primary/80 whitespace-pre-wrap leading-relaxed">
                {text}
                <span className="inline-block w-2 h-3 bg-accent ml-1 animate-pulse shadow-[0_0_5px_rgba(123,97,255,0.8)]"></span>
            </div>
        </div>
    );
};

const SchedulerCard = () => {
    const svgRef = useRef(null);
    const cursorRef = useRef(null);
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const dayRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            tl.fromTo(cursorRef.current, { x: 0, y: 150, opacity: 0 }, { x: 60, y: 40, opacity: 1, duration: 1, ease: "power2.inOut" })
                .to(cursorRef.current, { scale: 0.9, duration: 0.15 })
                .to(dayRefs.current[3], { backgroundColor: '#7B61FF', color: '#0A0A14', boxShadow: '0 0 15px rgba(123,97,255,0.6)', duration: 0.2 }, "<")
                .to(cursorRef.current, { scale: 1, duration: 0.15 })
                .to(cursorRef.current, { x: 180, y: 120, duration: 0.8, ease: "power2.inOut" }, "+=0.3")
                .to(cursorRef.current, { scale: 0.9, duration: 0.15 })
                .to('.save-btn', { scale: 0.95, opacity: 0.8, boxShadow: '0 0 5px rgba(123,97,255,0.5)', duration: 0.15 }, "<")
                .to(cursorRef.current, { scale: 1, duration: 0.15 })
                .to('.save-btn', { scale: 1, opacity: 1, boxShadow: '0 0 20px rgba(123,97,255,0.8)', duration: 0.15 }, "<")
                .to(cursorRef.current, { opacity: 0, y: 150, duration: 0.6, ease: "power2.in" });

        }, svgRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full h-48 mt-4 relative bg-primary border border-accent/20 rounded-2xl p-4 overflow-hidden shadow-[0_4px_20px_rgba(123,97,255,0.05)]" ref={svgRef}>
            <div className="text-xs font-mono font-medium mb-4 text-background/60 uppercase tracking-wider">Content Matrix</div>
            <div className="grid grid-cols-7 gap-1 mb-8">
                {days.map((d, i) => (
                    <div
                        key={i}
                        ref={el => dayRefs.current[i] = el}
                        className="w-full aspect-square flex items-center justify-center text-xs font-sans font-medium rounded-md bg-background/5 text-background/80 transition-all duration-300"
                    >
                        {d}
                    </div>
                ))}
            </div>
            <div className="flex justify-end">
                <button className="save-btn px-4 py-1.5 bg-accent text-primary text-xs font-mono font-bold rounded-full shadow-[0_0_10px_rgba(123,97,255,0.4)]">
                    Deploy
                </button>
            </div>

            <div ref={cursorRef} className="absolute top-0 left-0 w-6 h-6 z-10 pointer-events-none drop-shadow-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="#F0EFF4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fill-primary text-background drop-shadow-[0_0_5px_rgba(123,97,255,0.5)]">
                    <path d="M4 4l7.07 17 2.51-7.39L21 11.07z" />
                </svg>
            </div>
        </div>
    );
};

const Features = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(cardsRef.current,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="about" className="w-full bg-primary relative py-24 md:py-32 px-6 md:px-16" ref={containerRef}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(123,97,255,0.03)_0%,transparent_50%)] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div
                        ref={el => cardsRef.current[0] = el}
                        className="bg-[#0f0f18] rounded-[2rem] p-8 border border-accent/10 shadow-[0_10px_40px_-15px_rgba(123,97,255,0.1)] flex flex-col opacity-0 group hover:border-accent/30 transition-colors duration-500"
                    >
                        <h3 className="font-sans font-bold text-2xl mb-2 text-background">Viral Hook Engineering</h3>
                        <p className="font-sans text-background/60 text-sm mb-6 flex-grow leading-relaxed">
                            Psychologically optimized intros built for maximum viewer retention.
                        </p>
                        <ShufflerCard />
                    </div>

                    <div
                        ref={el => cardsRef.current[1] = el}
                        className="bg-[#0f0f18] rounded-[2rem] p-8 border border-accent/10 shadow-[0_10px_40px_-15px_rgba(123,97,255,0.1)] flex flex-col opacity-0 group hover:border-accent/30 transition-colors duration-500"
                    >
                        <h3 className="font-sans font-bold text-2xl mb-2 text-background">Kinetic Motion Graphics</h3>
                        <p className="font-sans text-background/60 text-sm mb-6 flex-grow leading-relaxed">
                            High-octane visual architecture pushing bounds of digital rhythm.
                        </p>
                        <TypewriterCard />
                    </div>

                    <div
                        ref={el => cardsRef.current[2] = el}
                        className="bg-[#0f0f18] rounded-[2rem] p-8 border border-accent/10 shadow-[0_10px_40px_-15px_rgba(123,97,255,0.1)] flex flex-col opacity-0 group hover:border-accent/30 transition-colors duration-500"
                    >
                        <h3 className="font-sans font-bold text-2xl mb-2 text-background">Algorithmic Precision</h3>
                        <p className="font-sans text-background/60 text-sm mb-6 flex-grow leading-relaxed">
                            Data-backed execution cadences aligning with platform mechanics.
                        </p>
                        <SchedulerCard />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
