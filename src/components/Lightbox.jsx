import { X } from 'lucide-react';
import { useEffect } from 'react';

export default function Lightbox({ isOpen, videoUrl, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-ink/95 backdrop-blur-xl flex items-center justify-center">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-paper/10 hover:bg-paper/20 flex items-center justify-center text-paper transition-colors"
      >
        <X size={24} />
      </button>
      
      <div className="w-full max-w-6xl aspect-video px-6 md:px-12">
        <iframe 
          className="w-full h-full rounded-2xl shadow-2xl"
          src={videoUrl} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
