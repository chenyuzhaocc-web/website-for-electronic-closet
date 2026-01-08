
import React, { useEffect, useRef, useState } from 'react';
import { Language } from '../translations';

interface HeroProps {
  t: any;
  lang: Language;
}

declare global {
  interface Window {
    Vimeo: any;
  }
}

export const Hero: React.FC<HeroProps> = ({ t, lang }) => {
  const videoRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const videoId = lang === 'en' ? '1152442838' : '1152438914';

  const scrollToVideo = () => {
    const videoElement = document.getElementById('video-section');
    if (videoElement) {
      videoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    if (videoRef.current && window.Vimeo) {
      playerRef.current = new window.Vimeo.Player(videoRef.current);
      
      playerRef.current.on('timeupdate', (data: any) => {
        setProgress(data.percent * 100);
      });

      playerRef.current.getDuration().then((d: number) => {
        setDuration(d);
      });

      // Initial state
      playerRef.current.setVolume(0);
    }
  }, [lang]); // Re-init on language change since ID changes

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    const newTime = (value / 100) * duration;
    playerRef.current.setCurrentTime(newTime);
    setProgress(value);
  };

  const toggleMute = () => {
    if (isMuted) {
      playerRef.current.setVolume(1);
    } else {
      playerRef.current.setVolume(0);
    }
    setIsMuted(!isMuted);
  };

  const cycleSpeed = () => {
    const speeds = [1, 1.5, 2];
    const nextSpeed = speeds[(speeds.indexOf(speed) + 1) % speeds.length];
    playerRef.current.setPlaybackRate(nextSpeed);
    setSpeed(nextSpeed);
  };

  const handleReplay = () => {
    playerRef.current.setCurrentTime(0);
    playerRef.current.play();
  };

  return (
    <section className="px-6 py-16 md:py-24 text-center max-w-4xl mx-auto">
      <div className="inline-block px-4 py-1 rounded-full bg-yellow-200 text-yellow-800 text-xs font-bold uppercase tracking-widest mb-6">
        {t.heroBadge}
      </div>
      <h1 className={`text-5xl md:text-7xl font-bold text-yellow-900 mb-6 leading-tight ${lang === 'en' ? 'font-amatic' : 'font-chinese'}`}>
        {t.heroTitle} <br /> 
        <span className="text-yellow-600">{t.heroTitleHighlight}</span>
      </h1>
      <p className="text-lg md:text-xl text-yellow-800/80 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
        {t.heroSub}
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button 
          onClick={scrollToVideo}
          className="w-full sm:w-auto px-10 py-4 bg-yellow-400 text-yellow-900 rounded-full font-bold text-lg hover:shadow-xl hover:bg-yellow-300 transition-all"
        >
          {t.watchPreview}
        </button>
      </div>
      
      <div id="video-section" className="mt-16 relative">
        <div className="bg-white p-2 rounded-[2rem] shadow-xl border-8 border-yellow-100 max-w-2xl mx-auto overflow-hidden">
          <div className="aspect-video w-full rounded-2xl overflow-hidden relative">
            <iframe 
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full"
              src={`https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&muted=1&background=1&badge=0&autopause=0&player_id=0&app_id=58479`} 
              title="Vimeo video player" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          
          {/* Custom Controls UI */}
          <div className="p-4 bg-yellow-50 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <input 
                type="range" 
                min="0" 
                max="100" 
                step="0.1"
                value={progress}
                onChange={handleProgressChange}
                className="flex-grow h-2 bg-yellow-200 rounded-lg cursor-pointer"
              />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6">
              <button 
                onClick={handleReplay}
                className="px-4 py-2 bg-white border border-yellow-200 rounded-full text-sm font-bold text-yellow-700 hover:bg-yellow-100 transition-all flex items-center gap-2"
              >
                <span>🔄</span> {t.videoControls.replay}
              </button>
              <button 
                onClick={cycleSpeed}
                className="px-4 py-2 bg-white border border-yellow-200 rounded-full text-sm font-bold text-yellow-700 hover:bg-yellow-100 transition-all"
              >
                <span>⚡</span> {t.videoControls.speed}: {speed}x
              </button>
              <button 
                onClick={toggleMute}
                className="px-4 py-2 bg-white border border-yellow-200 rounded-full text-sm font-bold text-yellow-700 hover:bg-yellow-100 transition-all flex items-center gap-2"
              >
                <span>{isMuted ? '🔇' : '🔊'}</span> {isMuted ? t.videoControls.unmute : t.videoControls.mute}
              </button>
            </div>
          </div>
        </div>

        {/* Cute floating elements */}
        <div className="hidden lg:block absolute -left-12 top-1/4 animate-bounce">
          <span className="text-4xl">👕</span>
        </div>
        <div className="hidden lg:block absolute -right-8 bottom-1/4 animate-pulse">
          <span className="text-4xl">👗</span>
        </div>
      </div>
    </section>
  );
};
