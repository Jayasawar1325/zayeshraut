import { Mail, Youtube, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="w-full py-32 md:py-48 bg-ink text-paper flex flex-col items-center text-center px-6">
      <h2 className="font-sans font-bold text-5xl md:text-7xl tracking-tighter mb-6">
        Got footage that deserves better?
      </h2>



      <button className="group relative overflow-hidden rounded-full bg-ochre text-paper px-10 py-5 font-sans font-bold text-lg tracking-wide transition-transform duration-300 hover:scale-[1.03] mb-24">
        <span className="relative z-10">Start a collaboration</span>
        <div className="absolute inset-0 z-0 bg-paper translate-y-[100%] transition-transform duration-300 group-hover:translate-y-0"></div>
        <span className="relative z-10 text-transparent group-hover:text-ink transition-colors duration-300 absolute inset-0 flex items-center justify-center pointer-events-none">Start a collaboration</span>
      </button>

      <div className="flex flex-wrap justify-center gap-8 md:gap-12 font-mono text-sm">
        <a href="mailto:raut.js107@gmail.com" className="flex items-center gap-2 hover:text-ochre hover:-translate-y-1 transition-all duration-200">
          <Mail size={16} /> raut.js107@gmail.com
        </a>
        <a href="https://x.com/rautjs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ochre hover:-translate-y-1 transition-all duration-200">
          <Twitter size={16} /> X (Twitter)
        </a>
        <a href="https://www.youtube.com/@raut_zayesh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ochre hover:-translate-y-1 transition-all duration-200">
          <Youtube size={16} /> YouTube
        </a>
        <a href="https://www.instagram.com/raut.zayesh/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ochre hover:-translate-y-1 transition-all duration-200">
          <Instagram size={16} /> Instagram
        </a>
        <a href="https://www.linkedin.com/in/jayasawar-raut-chhetri-71870a327/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ochre hover:-translate-y-1 transition-all duration-200">
          <Linkedin size={16} /> LinkedIn
        </a>
      </div>
    </section>
  );
}
