import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Stack from './components/Stack';
import Work from './components/Work';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';

function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  const openLightbox = (url) => {
    setCurrentVideoUrl(url);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setTimeout(() => setCurrentVideoUrl(''), 300); // clear after animation if needed
  };

  return (
    <div className="relative min-h-screen bg-paper text-ink overflow-x-hidden selection:bg-ochre selection:text-paper">
      <Navbar />
      
      <main>
        <Hero openLightbox={openLightbox} />
        <Process />
        <Stack />
        <Work openLightbox={openLightbox} />
        <Philosophy />
        <Contact />
      </main>

      <Footer />

      <Lightbox 
        isOpen={lightboxOpen} 
        videoUrl={currentVideoUrl} 
        onClose={closeLightbox} 
      />
    </div>
  );
}

export default App;
