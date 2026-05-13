import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Volume2, VolumeX, Play } from 'lucide-react';
import heroVideo from '../assets/video.mp4';

export default function Hero({ openLightbox }) {
  const container = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero-element', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });
      gsap.from('.hero-video', {
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
        delay: 0.6
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="bg-paper">
      {/* Landing View (Text) */}
      <section className="relative w-full min-h-[85vh] flex flex-col justify-end p-6 md:p-12 lg:p-24 pb-12 md:pb-20 overflow-hidden">
        
        {/* Dynamic Background Elements to prevent flatness */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-ochre/10 blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-[20%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-ink/5 blur-[100px] mix-blend-multiply animate-pulse" style={{ animationDuration: '10s' }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#11111105_1px,transparent_1px),linear-gradient(to_bottom,#11111105_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
        </div>


        <div className="max-w-5xl relative z-10">
          <h1 className="hero-element text-5xl md:text-7xl lg:text-[8rem] leading-[0.9] tracking-tighter text-ink flex flex-col mb-2">
            <span className="font-sans font-bold">Elevating</span>
            <span className="font-drama italic text-ochre ml-0 md:ml-16">visual narratives.</span>
          </h1>

          <p className="hero-element font-mono text-sm md:text-base text-ink/70 mt-8 mb-10 max-w-xl">
            Video editing and motion design for founders, creators, and businesses.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 hero-element">
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative overflow-hidden rounded-full bg-ochre text-paper px-8 py-4 font-sans font-bold text-sm tracking-wide transition-transform duration-300 hover:scale-[1.03]"
            >
              <span className="relative z-10">Discuss a project</span>
              <div className="absolute inset-0 z-0 bg-ink translate-y-[100%] transition-transform duration-300 group-hover:translate-y-0"></div>
            </button>

            <button
              onClick={() => openLightbox('https://www.youtube.com/embed/Frl3edn9kxQ?autoplay=1')}
              className="flex items-center gap-3 font-sans font-bold text-sm uppercase tracking-wider text-ink hover:text-ochre transition-colors duration-200"
            >
              <span className="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center">
                <Play size={16} fill="currentColor" />
              </span>
              Watch Reel
            </button>
          </div>
        </div>
      </section>

      {/* Video Section just below landing page */}
      <section className="w-full bg-paper relative z-20">
        <div className="hero-video relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden filter brightness-[1.02] saturate-[0.95] group">
          <video
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          {/* Top Edge Blend */}
          <div className="absolute top-0 left-0 right-0 h-24 md:h-48 bg-gradient-to-b from-paper to-transparent z-10 pointer-events-none"></div>

          {/* Bottom Edge Blend */}
          <div className="absolute bottom-0 left-0 right-0 h-24 md:h-48 bg-gradient-to-t from-paper to-transparent z-10 pointer-events-none"></div>

          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20 w-12 h-12 rounded-full bg-paper/80 backdrop-blur-md border border-slate/10 flex items-center justify-center text-ink hover:scale-[1.05] transition-transform duration-200"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </section>
    </div>
  );
}
