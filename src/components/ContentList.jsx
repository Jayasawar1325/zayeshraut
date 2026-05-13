import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const MagneticButton = ({ children, className = '', isAccent = false }) => {
    const buttonRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleMouseMove = (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(button, {
                x: x * 0.2,
                y: y * 0.2,
                scale: 1.03,
                duration: 0.6,
                ease: 'power3.out'
            });
        };

        const handleMouseLeave = () => {
            gsap.to(button, {
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.6,
                ease: 'power3.out'
            });
        };

        button.addEventListener('mousemove', handleMouseMove);
        button.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            button.removeEventListener('mousemove', handleMouseMove);
            button.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <button
            ref={buttonRef}
            className={`relative overflow-hidden group w-full ${className}`}
        >
            <span className={`absolute inset-0 w-full h-full translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0 ${isAccent ? 'bg-background' : 'bg-accent/80'}`}></span>
            <span className={`relative z-10 transition-colors duration-300 ${isAccent ? 'group-hover:text-primary' : 'group-hover:text-background'}`}>{children}</span>
        </button>
    );
}

const articles = [
    {
        category: "Breakdown",
        title: "Anatomy of a 10M View Hook",
        excerpt: "Dissecting the first 3 seconds of the kinetic typography piece that shifted the platform algorithm.",
        date: "12 Oct 2026",
        readTime: "4 min read"
    },
    {
        category: "Technique",
        title: "Volumetric Lighting in After Effects",
        excerpt: "Emulating Unreal Engine lighting models directly within a 2D compositing workflow for faster turnarounds.",
        date: "28 Sep 2026",
        readTime: "7 min read",
        highlight: true
    },
    {
        category: "Opinion",
        title: "Retention Default is Dead",
        excerpt: "Why the standard 'fast-cut' editing style is losing algorithmic favor to atmospheric, slow-burn narratives.",
        date: "04 Sep 2026",
        readTime: "5 min read"
    }
];

const ContentList = () => {
    return (
        <section id="articles" className="w-full bg-background py-32 px-6 md:px-16 relative z-10">
            <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-primary to-transparent opacity-10"></div>

            <div className="max-w-6xl mx-auto flex flex-col items-center relative z-20">

                <div className="text-center mb-20 max-w-2xl">
                    <h2 className="font-drama italic text-5xl md:text-6xl text-primary mb-6 pr-4 drop-shadow-[0_0_10px_rgba(123,97,255,0.2)]">Published Signals</h2>
                    <p className="font-sans text-primary/60 text-lg font-medium">
                        Open-sourcing the workflows, breakdowns, and creative architecture.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-center">

                    {articles.map((article, i) => (
                        <div
                            key={i}
                            className={`rounded-[2.5rem] p-10 flex flex-col h-full border transition-all duration-300 ${article.highlight
                                    ? 'bg-primary text-background border-accent/30 shadow-[0_20px_50px_-12px_rgba(123,97,255,0.3)] md:-mx-4 z-10 h-[105%]'
                                    : 'bg-background text-primary border-primary/10 shadow-sm hover:border-accent/50'
                                }`}
                        >
                            <div className="flex justify-between items-center mb-6">
                                <span className={`text-[10px] uppercase font-mono px-3 py-1 rounded-full font-bold tracking-widest ${article.highlight ? 'bg-accent text-primary drop-shadow-[0_0_8px_rgba(123,97,255,0.8)]' : 'bg-primary/5 text-primary/80'
                                    }`}>
                                    {article.category}
                                </span>
                                <span className={`text-xs font-mono opacity-60 ${article.highlight ? 'text-background' : 'text-primary'}`}>{article.date}</span>
                            </div>

                            <h3 className={`font-sans font-bold text-2xl mb-4 leading-tight tracking-tight ${article.highlight ? 'text-background' : 'text-primary'}`}>
                                {article.title}
                            </h3>

                            <p className={`font-sans text-sm mb-8 flex-grow ${article.highlight ? 'text-background/60' : 'text-primary/70'}`}>
                                {article.excerpt}
                            </p>

                            <div className={`flex items-center gap-3 text-xs font-mono mb-8 opacity-50 ${article.highlight ? 'text-background' : 'text-primary'}`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${article.highlight ? 'bg-accent shadow-[0_0_5px_rgba(123,97,255,1)]' : 'bg-primary/50'}`}></span>
                                {article.readTime}
                            </div>

                            <div className="mt-auto">
                                <MagneticButton
                                    isAccent={article.highlight}
                                    className={`px-6 py-4 rounded-[3rem] font-sans font-semibold border ${article.highlight
                                            ? 'bg-accent text-primary border-accent shadow-[0_0_15px_rgba(123,97,255,0.4)]'
                                            : 'border-primary/20 text-primary'
                                        }`}
                                >
                                    Read Article
                                </MagneticButton>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ContentList;
