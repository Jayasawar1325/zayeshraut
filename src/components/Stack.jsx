import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import premiereIcon from '../assets/icons/premiere.svg';
import afterEffectsIcon from '../assets/icons/aftereffects.svg';
import illustratorIcon from '../assets/icons/illustrator.svg';
import auditionIcon from '../assets/icons/audition.svg';
import photoshopIcon from '../assets/icons/photoshop.svg';
import notionIcon from '../assets/icons/notion.svg';
import canvaIcon from '../assets/icons/canva.svg';
import klingIcon from '../assets/icons/kling.svg';
import nanoBananaIcon from '../assets/icons/nano-banana.svg';
import epidemicSoundIcon from '../assets/icons/epidemicsound.svg';

gsap.registerPlugin(ScrollTrigger);

const tools = [
  { name: 'Adobe Premiere Pro', group: 'Adobe Suite', icon: premiereIcon },
  { name: 'Adobe After Effects', group: 'Adobe Suite', icon: afterEffectsIcon },
  { name: 'Adobe Illustrator', group: 'Adobe Suite', icon: illustratorIcon },
  { name: 'Adobe Audition', group: 'Adobe Suite', icon: auditionIcon },
  { name: 'Adobe Photoshop', group: 'Adobe Suite', icon: photoshopIcon },
  { name: 'Notion AI', group: 'Systems & Design', icon: notionIcon },
  { name: 'Canva', group: 'Systems & Design', icon: canvaIcon },
  { name: 'Kling', group: 'Generative AI', icon: klingIcon },
  { name: 'Nano Banana Pro', group: 'Generative AI', icon: nanoBananaIcon },
  { name: 'Epidemic Sound', group: 'Audio & Music', icon: epidemicSoundIcon }
];

export default function Stack() {
  const sectionRef = useRef(null);

  // Background image is removed, so no parallax on bg needed anymore
  useEffect(() => {
    // Other animations could go here
  }, []);

  return (
    <section id="stack" ref={sectionRef} className="relative w-full py-24 md:py-32 bg-paper overflow-hidden border-t border-ink/5">

      {/* Decorative subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1111110a_1px,transparent_1px),linear-gradient(to_bottom,#1111110a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-ink/10 pb-8">
          <h2 className="font-drama italic text-5xl md:text-7xl text-ink">
            The stack<span className="text-ochre">.</span>
          </h2>
          <span className="font-mono text-ink/50 text-sm">
            // Software · AI · Systems
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {tools.map((tool, i) => {
            const showGroup = i === 0 || tools[i - 1].group !== tool.group;

            return (
              <div key={tool.name} className="flex flex-col">
                {showGroup && (
                  <div className="font-mono text-xs text-ochre mb-4 mt-8 md:mt-0 col-span-2 md:col-span-1 font-semibold tracking-wider uppercase">
                    // {tool.group}
                  </div>
                )}
                <div
                  className={`group relative overflow-hidden bg-white/60 backdrop-blur-md border border-ink/10 rounded-[1.5rem] p-6 aspect-square flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-ink/5 cursor-default ${!showGroup ? 'mt-0 md:mt-[34px]' : ''}`}
                >
                  {/* Logo Image Wrapper */}
                  <div className="w-16 h-16 rounded-2xl bg-paper border border-ink/5 group-hover:border-ink/10 group-hover:scale-110 transition-all duration-300 flex items-center justify-center p-3 shadow-sm">
                    <img src={tool.icon} alt={tool.name} className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <span className="font-mono text-xs text-center text-ink/70 group-hover:text-ink transition-colors duration-300 font-medium">
                    {tool.name}
                  </span>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-ochre -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
