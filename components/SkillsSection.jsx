import { resumeData } from '../data/resumeData';

export default function SkillsSection() {
  const skills = resumeData.skills;

  return (
    <section id="skills" className="py-20 px-8 bg-surface dark:bg-gray-900 border-b border-transparent dark:border-gray-800/50 transition-colors duration-300">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="font-headline text-5xl md:text-6xl font-black mb-4 text-on-surface dark:text-transparent dark:bg-gradient-to-r dark:from-indigo-300 dark:via-blue-300 dark:to-cyan-300 dark:bg-clip-text">
          Skills & Expertise
        </h2>
        <p className="font-body text-lg text-on-surface-variant dark:text-slate-300 mb-16">
          A comprehensive toolkit built through hands-on projects and professional experience
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-surface dark:bg-gray-800/90 p-8 border border-surface-variant dark:border-gray-700/80 hover:border-primary dark:hover:border-indigo-500 transition-all duration-300 group hover:shadow-lg dark:hover:shadow-indigo-500/20 transform hover:scale-[1.02]"
            >
              <h3 className="font-headline text-xl font-bold text-primary dark:text-indigo-300 mb-6 group-hover:text-blue-400 dark:group-hover:text-indigo-200 transition-colors">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-3 group-hover:translate-x-1 transition-transform">
                    <span className="w-2 h-2 bg-primary dark:bg-indigo-400 rounded-full group-hover:scale-125 dark:group-hover:bg-indigo-300 transition-all"></span>
                    <span className="font-body text-on-surface dark:text-slate-200 group-hover:text-primary dark:group-hover:text-slate-100 transition-colors font-medium">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
