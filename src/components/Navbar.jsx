import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out rounded-full flex items-center justify-between px-6 py-3 min-w-[90vw] md:min-w-[70vw] lg:min-w-[800px] ${
        scrolled
          ? 'bg-paper/80 backdrop-blur-xl border border-slate/10 text-ink shadow-sm'
          : 'bg-transparent text-paper'
      }`}
    >
      <div className="font-sans font-bold text-lg tracking-tight uppercase cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        Zayesh Raut
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-mono text-sm">
        {['Work', 'Process', 'Stack', 'Contact'].map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item.toLowerCase())}
            className="hover:-translate-y-[1px] transition-transform duration-200"
          >
            {item}
          </button>
        ))}
      </div>

      <button
        onClick={() => scrollTo('contact')}
        className={`group relative overflow-hidden rounded-full px-5 py-2 font-sans font-semibold text-sm transition-transform duration-300 hover:scale-[1.03] ${
          scrolled ? 'bg-ochre text-paper' : 'bg-paper text-ink'
        }`}
      >
        <span className="relative z-10">Start a collaboration</span>
        <div className={`absolute inset-0 z-0 translate-y-[100%] transition-transform duration-300 group-hover:translate-y-0 ${
          scrolled ? 'bg-ink' : 'bg-ochre'
        }`}></div>
      </button>
    </nav>
  );
}
