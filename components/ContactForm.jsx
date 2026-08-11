import { resumeData } from '../data/resumeData';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const { email, phone, linkedin, github } = resumeData.personal;

  return (
    <section id="contact" className="py-20 px-8 bg-gradient-to-b from-surface-bright to-surface dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-container opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-fade-in-left">
            <h2 className="font-headline text-5xl md:text-6xl font-black mb-4 text-on-surface dark:text-transparent dark:bg-gradient-to-r dark:from-cyan-400 dark:to-cyan-300 dark:bg-clip-text">
              Let's Connect
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary-container mb-8 rounded-full"></div>
            <p className="font-body text-lg text-on-surface-variant dark:text-gray-300 mb-12">
              Have a project in mind or just want to say hello? Reach out to me through any of these channels.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300 group hover:shadow-lg transform hover:scale-105"
              >
                <div className="p-3 bg-gradient-to-br from-primary to-primary-container rounded-lg text-white group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6" fill="none" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <p className="font-label text-xs font-bold text-on-surface-variant dark:text-gray-400 uppercase">
                    Email
                  </p>
                  <p className="font-body text-lg text-on-surface dark:text-white font-semibold">
                    {email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${phone}`}
                className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300 group hover:shadow-lg transform hover:scale-105"
              >
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg text-white group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.92 7.02C17.45 6.18 16.51 5.55 15.5 5.55c-1.02 0-1.96.63-2.43 1.46C12.88 5.55 11.96 4.9 11 4.9c-.98 0-1.85.55-2.3 1.48.98-.32 2.03.13 2.71 1.21.45 .75.72 1.63.72 2.58 0 1.35-.54 2.56-1.43 3.44.06.3.09.6.09.9v5h2v-5c0-.3 0-.6-.02-.9.64.74 1.56 1.19 2.58 1.19s1.94-.45 2.58-1.19c-.01.3-.02.6-.02.9v5h2v-5c0-.3.03-.6.09-.9-.89-.88-1.43-2.09-1.43-3.44 0-.95.27-1.83.72-2.58"/>
                  </svg>
                </div>
                <div>
                  <p className="font-label text-xs font-bold text-on-surface-variant dark:text-gray-400 uppercase">
                    Phone
                  </p>
                  <p className="font-body text-lg text-on-surface dark:text-white font-semibold">
                    {phone}
                  </p>
                </div>
              </a>

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300 group hover:shadow-lg transform hover:scale-105"
              >
                <div className="p-3 bg-gradient-to-br from-gray-800 to-black rounded-lg text-white group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-label text-xs font-bold text-on-surface-variant dark:text-gray-400 uppercase">
                    GitHub
                  </p>
                  <p className="font-body text-lg text-on-surface dark:text-white font-semibold">
                    View My Code
                  </p>
                </div>
              </a>

              <a
                href={`https://${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300 group hover:shadow-lg transform hover:scale-105"
              >
                <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg text-white group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-label text-xs font-bold text-on-surface-variant dark:text-gray-400 uppercase">
                    LinkedIn
                  </p>
                  <p className="font-body text-lg text-on-surface dark:text-white font-semibold">
                    Connect with me
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-headline text-2xl font-bold text-on-surface dark:text-white mb-6">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-label text-sm font-bold text-on-surface dark:text-gray-300 uppercase mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-on-surface dark:text-white rounded font-body focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="font-label text-sm font-bold text-on-surface dark:text-gray-300 uppercase mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-on-surface dark:text-white rounded font-body focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="font-label text-sm font-bold text-on-surface dark:text-gray-300 uppercase mb-2 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-on-surface dark:text-white rounded font-body focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label className="font-label text-sm font-bold text-on-surface dark:text-gray-300 uppercase mb-2 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-on-surface dark:text-white rounded font-body focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 font-headline font-bold uppercase tracking-widest text-sm rounded hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>

                {submitted && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded">
                    <p className="text-center text-green-700 dark:text-green-300 font-body font-semibold">
                      ✓ Thanks! I'll get back to you soon.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
