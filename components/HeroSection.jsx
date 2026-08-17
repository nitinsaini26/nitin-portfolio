import { resumeData } from '../data/resumeData';

export default function HeroSection() {
  const { name, title, bio, email, phone, github, linkedin } = resumeData.personal;

  return (
    <section className="pt-32 pb-20 px-8 bg-gradient-to-b from-surface-bright via-surface-bright to-surface-container dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden transition-colors duration-300">
      {/* Animated background gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full opacity-10 dark:opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full opacity-10 dark:opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-left">
            <h1 className="font-headline text-6xl md:text-7xl font-black leading-tight text-on-surface dark:text-transparent dark:bg-gradient-to-r dark:from-slate-100 dark:via-indigo-200 dark:to-blue-300 dark:bg-clip-text mb-4 transform hover:scale-105 transition-transform duration-300">
              {name}
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary-container dark:from-indigo-500 dark:to-blue-400 mb-6 rounded-full"></div>
            <h2 className="font-headline text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary-container dark:from-indigo-400 dark:to-cyan-300 bg-clip-text text-transparent mb-6">
              {title}
            </h2>
            <p className="font-body text-lg text-on-surface-variant dark:text-slate-300 mb-8 leading-relaxed">
              {bio}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mb-8">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit GitHub"
                className="p-3 rounded-full bg-primary dark:bg-indigo-600 text-white hover:bg-primary-container dark:hover:bg-indigo-500 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-indigo-900/50"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href={`https://${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit LinkedIn"
                className="p-3 rounded-full bg-blue-600 dark:bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-blue-900/50"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a
                href={`mailto:${email}`}
                className="group bg-gradient-to-r from-primary to-primary-container dark:from-indigo-600 dark:to-blue-600 text-white px-8 py-4 font-headline font-bold uppercase tracking-widest text-sm hover:shadow-lg dark:hover:shadow-indigo-500/30 transform hover:scale-105 transition-all duration-300 rounded"
              >
                <span className="flex items-center gap-2">Get In Touch <span className="group-hover:translate-x-1 transition-transform">→</span></span>
              </a>
              <a
                href={`tel:${phone}`}
                className="border-2 border-primary text-primary dark:border-indigo-400 dark:text-indigo-300 px-8 py-4 font-headline font-bold uppercase tracking-widest text-sm hover:bg-primary dark:hover:bg-indigo-600 hover:text-white dark:hover:text-white transition-all duration-300 rounded"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Right - Profile Avatar Decoration */}
          <div className="flex justify-center items-center animate-fade-in-right">
            <div className="relative w-80 h-80">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-600 dark:border-blue-400 opacity-30 animate-spin" style={{ animationDuration: '8s' }}></div>
              <div className="absolute inset-4 rounded-full border-2 border-blue-500 dark:border-blue-300 opacity-20 animate-spin-reverse" style={{ animationDuration: '12s' }}></div>
              
              {/* Profile Photo with Fallback */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600 shadow-2xl overflow-hidden flex items-center justify-center">
                <img
                  src="/images/profile.jpg"
                  alt={name}
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span class="text-white font-headline text-6xl font-black">NK</span>';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
