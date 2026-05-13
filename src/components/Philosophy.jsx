import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.phil-line-1', {
        y: 30,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });
      
      gsap.from('.phil-line-2', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-32 md:py-48 bg-ink overflow-hidden text-paper flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=2000&q=80')" }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <p className="phil-line-1 font-sans font-medium text-lg md:text-2xl text-paper/60 mb-8 md:mb-12">
          Most editors chase: the fastest turnaround.
        </p>
        <h2 className="phil-line-2 font-drama italic text-5xl md:text-8xl lg:text-[7rem] leading-tight max-w-5xl">
          I chase: the cut that makes you <span className="text-ochre">feel something.</span>
        </h2>
      </div>
    </section>
  );
}
