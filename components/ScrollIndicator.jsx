import { useEffect, useState } from 'react';

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide when scrolled down or at bottom
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      
      // Hide if scrolled more than 500px or near bottom
      if (scrollTop > 500 || scrollTop + clientHeight >= scrollHeight - 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none">
      <style jsx>{`
        .scroll-text {
          animation: scrollText 2s ease-in-out infinite;
          font-family: 'Inter', sans-serif;
        }
        
        .scroll-arrow {
          animation: scrollArrow 2s ease-in-out infinite;
        }

        @keyframes scrollText {
          0%, 100% {
            opacity: 1;
            transform: translateY(0);
          }
          50% {
            opacity: 0.5;
            transform: translateY(8px);
          }
        }

        @keyframes scrollArrow {
          0%, 100% {
            opacity: 1;
            transform: translateY(0);
          }
          50% {
            opacity: 0.3;
            transform: translateY(12px);
          }
        }
      `}</style>

      <div className="flex flex-col items-center gap-2">
        {/* Scroll Text */}
        <span className="scroll-text font-headline text-sm font-bold uppercase tracking-widest text-gray-600 dark:text-cyan-400">
          Scroll
        </span>

        {/* Arrow Down */}
        <div className="scroll-arrow">
          <svg
            className="w-5 h-5 text-gray-600 dark:text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
