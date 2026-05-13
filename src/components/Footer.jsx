export default function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0A] text-paper rounded-t-[4rem] pt-24 pb-8 overflow-hidden flex flex-col relative z-20 -mt-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-24 relative z-10">
        <div className="md:col-span-2">
          <h3 className="font-sans font-bold text-2xl mb-2">Zayesh Raut</h3>
          <p className="font-mono text-sm text-paper/50 max-w-xs">
            Video editing and motion design for founders, creators, and businesses.
          </p>
          
          <div className="mt-8 inline-flex items-center gap-3 font-mono text-xs px-4 py-2 rounded-full border border-paper/10 bg-paper/5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            // AVAILABLE · {new Date().toLocaleString('default', { month: 'long', year: 'numeric' }).toUpperCase()}
          </div>
        </div>
        
        <div className="flex flex-col gap-4 font-mono text-sm">
          <div className="text-paper/40 mb-2">Navigation</div>
          <button onClick={() => document.getElementById('work')?.scrollIntoView({behavior:'smooth'})} className="text-left hover:text-ochre transition-colors w-fit">Work</button>
          <button onClick={() => document.getElementById('process')?.scrollIntoView({behavior:'smooth'})} className="text-left hover:text-ochre transition-colors w-fit">Process</button>
          <button onClick={() => document.getElementById('stack')?.scrollIntoView({behavior:'smooth'})} className="text-left hover:text-ochre transition-colors w-fit">Stack</button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="text-left hover:text-ochre transition-colors w-fit">Contact</button>
        </div>
        
        <div className="flex flex-col gap-4 font-mono text-sm">
          <div className="text-paper/40 mb-2">Socials</div>
          <a href="https://www.youtube.com/@raut_zayesh" target="_blank" rel="noopener noreferrer" className="hover:text-ochre transition-colors w-fit">YouTube</a>
          <a href="https://www.instagram.com/raut.zayesh/" target="_blank" rel="noopener noreferrer" className="hover:text-ochre transition-colors w-fit">Instagram</a>
          <a href="https://www.linkedin.com/in/jayasawar-raut-chhetri-71870a327/" target="_blank" rel="noopener noreferrer" className="hover:text-ochre transition-colors w-fit">LinkedIn</a>
          <a href="https://x.com/rautjs" target="_blank" rel="noopener noreferrer" className="hover:text-ochre transition-colors w-fit">X (Twitter)</a>
        </div>
      </div>
      
      <div className="border-t border-paper/10 pt-8 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 font-mono text-xs text-paper/30 relative z-10">
        <div>&copy; {new Date().getFullYear()} Zayesh Raut. All rights reserved.</div>
      </div>

      {/* Marquee Texture */}
      <div className="absolute bottom-[-10%] left-0 w-[200%] flex whitespace-nowrap opacity-[0.03] pointer-events-none select-none overflow-hidden z-0">
        <h1 className="font-drama italic text-[15vw] leading-none px-4">
          ZAYESH RAUT — ZAYESH RAUT — ZAYESH RAUT — ZAYESH RAUT — 
        </h1>
      </div>
    </footer>
  );
}
