import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    title: 'Scripting',
    desc: 'Words first. Every frame defends a sentence.',
    anim: 'scripting'
  },
  {
    num: '02',
    title: 'Storyboarding',
    desc: 'Beats blocked on paper before pixels.',
    anim: 'storyboarding'
  },
  {
    num: '03',
    title: 'Editing',
    desc: 'Rhythm, retention, story shape.',
    anim: 'editing'
  },
  {
    num: '04',
    title: 'Motion',
    desc: 'Type, kinetic UI, narrative animation.',
    anim: 'motion'
  },
  {
    num: '05',
    title: 'Sound',
    desc: 'The half of cinema you can\'t see.',
    anim: 'sound'
  }
];

export default function Process() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Horizontal scroll logic for desktop
      let mm = gsap.matchMedia();
      
      mm.add("(min-width: 768px)", () => {
        const sections = gsap.utils.toArray('.process-step');
        
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + scrollRef.current.offsetWidth
          }
        });
      });
      
      // Inline animations per step can be added here or in separate components
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderAnimation = (type) => {
    switch(type) {
      case 'scripting':
        return (
          <div className="font-mono text-2xl flex items-center">
            <span className="text-ink/50 tracking-widest">SCENE 01</span>
            <span className="w-4 h-7 bg-ochre ml-3 animate-pulse"></span>
          </div>
        );
      case 'storyboarding':
        return (
          <div className="flex gap-2">
            {[1,2,3].map(i => <div key={i} className="w-16 h-24 border-2 border-ink rounded-sm"></div>)}
          </div>
        );
      case 'editing':
        return (
          <div className="flex items-center gap-1 h-12">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-2 bg-ochre" style={{ height: `${Math.max(20, Math.random() * 100)}%` }}></div>
            ))}
          </div>
        );
      case 'motion':
        return (
          <div className="font-sans font-bold text-4xl tracking-tighter transform rotate-[-5deg]">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-ink to-ochre">KINETIC</span>
          </div>
        );
      case 'sound':
        return (
          <div className="w-24 h-24 rounded-full border-4 border-ink flex items-center justify-center relative">
            <div className="absolute inset-0 border-4 border-ochre rounded-full scale-[1.2] opacity-50"></div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <section id="process" ref={sectionRef} className="bg-paper text-ink overflow-hidden md:h-screen flex flex-col">
      <div className="p-6 md:p-12 md:pb-0 font-sans font-bold text-2xl md:text-4xl tracking-tighter border-b border-ink/10 pb-6">
        How I work.
      </div>
      
      <div 
        ref={scrollRef} 
        className="flex flex-col md:flex-row h-full w-[100vw] md:w-[500vw]"
      >
        {steps.map((step, i) => (
          <div 
            key={i} 
            className="process-step w-full md:w-screen h-[50vh] md:h-full flex-shrink-0 flex items-center justify-center p-6 md:p-24 border-b md:border-b-0 md:border-r border-ink/10 relative"
          >
            <div className="absolute top-6 left-6 md:top-12 md:left-12 font-mono text-xl md:text-3xl text-ochre">
              {step.num} <span className="text-ink/30">/ 05</span>
            </div>
            
            <div className="max-w-2xl w-full flex flex-col items-start gap-12">
              <div className="h-32 flex items-end">
                {renderAnimation(step.anim)}
              </div>
              
              <div>
                <h3 className="font-sans font-bold text-4xl md:text-7xl mb-4 tracking-tighter">{step.title}</h3>
                <p className="font-mono text-base md:text-xl text-ink/70 max-w-md">{step.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
