import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';

// IMPORT YOUR THUMBNAILS HERE
// Once you add your own images to the src/assets/work folder, update these file names!
// e.g., import longFormThumb1 from '../assets/work/my-cool-video.png';
import longFormThumb1 from '../assets/work/long-form-1.png';
import longFormThumb2 from '../assets/work/long-form-2.png';
import reelThumb1 from '../assets/work/reel-1.png';
import reelThumb2 from '../assets/work/reel-2.png';
import reelThumb3 from '../assets/work/reel-3.png';

gsap.registerPlugin(ScrollTrigger);

const longFormProjects = [
  {
    id: '01',
    title: 'A Billion-Dollar War to Steal Your Attention',
    role: 'Scripting · Storyboarding · Editing',
    thumb: longFormThumb1,
    url: 'https://www.youtube.com/embed/Frl3edn9kxQ?autoplay=1'
  },
  {
    id: '02',
    title: 'Why cannot we focus?',
    role: 'Scripting · Storyboarding · Editing',
    thumb: longFormThumb2,
    url: 'https://www.youtube.com/embed/NcTy2VhT91w?autoplay=1'
  }
];

const reels = [
  {
    id: '03',
    title: 'First Reel Title',
    role: 'Scripting · Storyboarding · Editing',
    thumb: reelThumb1,
    url: 'https://www.youtube.com/embed/cAE6dSg7rKU?autoplay=1'
  },
  {
    id: '04',
    title: 'Second Reel Title',
    role: 'Scripting · Storyboarding · Editing',
    thumb: reelThumb2,
    url: 'https://www.youtube.com/embed/ZtDPvHlFwy8?autoplay=1'
  },
  {
    id: '05',
    title: 'Third Reel Title',
    role: 'Scripting · Storyboarding · Editing',
    thumb: reelThumb3,
    url: 'https://www.youtube.com/embed/pxFgq-IAGdo?autoplay=1'
  }
];

export default function Work({ openLightbox }) {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const [activeProject, setActiveProject] = useState('01');

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: leftColRef.current,
        });

        const projectCards = gsap.utils.toArray('.project-card');
        projectCards.forEach((card) => {
          ScrollTrigger.create({
            trigger: card,
            start: "top center",
            end: "bottom center",
            onEnter: () => setActiveProject(card.dataset.id),
            onEnterBack: () => setActiveProject(card.dataset.id),
          });
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={containerRef} className="relative w-full bg-paper text-ink pb-24 md:pb-48">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row relative">

        {/* Left Column - Pinned */}
        <div
          ref={leftColRef}
          className="lg:w-1/3 pt-24 lg:pt-48 pb-12 lg:h-screen flex flex-col justify-between"
        >
          <div>
            <h2 className="font-sans font-bold text-5xl md:text-7xl tracking-tighter">
              Selected<br />work.
            </h2>
            <div className="mt-8 font-mono text-4xl text-ochre">
              {activeProject} <span className="text-ink/30">/ 05</span>
            </div>
          </div>

          <div className="hidden lg:block">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-drama italic text-2xl hover:text-ochre transition-colors"
            >
              Want to see more? →
            </button>
          </div>
        </div>

        {/* Right Column - Scrollable */}
        <div className="lg:w-2/3 lg:pt-48 flex flex-col gap-24 md:gap-48">

          {/* Long Form Projects */}
          <div className="flex flex-col gap-24">
            {longFormProjects.map((p) => (
              <div
                key={p.id}
                data-id={p.id}
                className="project-card group cursor-pointer"
                onClick={() => openLightbox(p.url)}
              >
                <div className="relative w-full aspect-[16/9] rounded-[2rem] overflow-hidden mb-6 filter brightness-[1.02] saturate-[0.95]">
                  <img src={p.thumb} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                  <div className="absolute inset-0 border border-ochre/0 group-hover:border-ochre/20 rounded-[2rem] transition-colors duration-300 pointer-events-none inset-ring"></div>

                  <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-paper/90 backdrop-blur-sm flex items-center justify-center text-ink scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 delay-100">
                      <Play size={24} fill="currentColor" className="ml-1" />
                    </div>
                  </div>
                </div>

                <div className="flex items-end justify-between px-2">
                  <div>
                    <h3 className="font-drama italic text-4xl md:text-5xl">{p.title}</h3>
                    <p className="font-mono text-sm text-ink/60 mt-2">{p.role} · Long-form</p>
                  </div>
                  <div className="font-mono text-ink/30 text-xl hidden md:block">{p.id}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Reels Grid */}
          <div>
            <div className="font-sans font-bold text-2xl mb-8 border-b border-ink/10 pb-4">Short-form / Reels</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reels.map((p) => (
                <div
                  key={p.id}
                  data-id={p.id}
                  className="project-card group cursor-pointer relative"
                  onClick={() => openLightbox(p.url)}
                >
                  <div className="relative w-full aspect-[9/16] rounded-[1.5rem] overflow-hidden filter brightness-[1.02] saturate-[0.95]">
                    <img src={p.thumb} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                    <div className="absolute inset-0 border border-ochre/0 group-hover:border-ochre/20 rounded-[1.5rem] transition-colors duration-300 pointer-events-none"></div>

                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent"></div>

                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-paper/10 backdrop-blur-md border border-paper/20 text-paper transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="font-drama italic text-xl">{p.title}</div>
                      <div className="font-mono text-[10px] mt-1 opacity-70 flex items-center gap-2">
                        <Play size={10} fill="currentColor" /> Play Reel
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
