import { resumeData } from '../data/resumeData';

export default function SkillsSection() {
  const skills = resumeData.skills;

  return (
    <section id="skills" className="py-20 px-8 bg-surface dark:bg-surface-container">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="font-headline text-5xl md:text-6xl font-black mb-4 text-on-surface dark:text-transparent dark:bg-gradient-to-r dark:from-cyan-400 dark:to-cyan-300 dark:bg-clip-text">
          Skills & Expertise
        </h2>
        <p className="font-body text-lg text-on-surface-variant dark:text-inverse-on-surface mb-16">
          A comprehensive toolkit built through hands-on projects and professional experience
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-surface dark:bg-gray-800 p-8 border border-surface-variant dark:border-blue-800 hover:border-primary dark:hover:border-blue-500 transition-all duration-300 group hover:shadow-lg dark:hover:shadow-blue-900/50 transform hover:scale-105 dark:hover:scale-105"
            >
              <h3 className="font-headline text-xl font-bold text-primary dark:text-cyan-400 mb-6 group-hover:text-blue-400 dark:group-hover:text-cyan-300 transition-colors">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-3 group-hover:translate-x-1 transition-transform">
                    <span className="w-2 h-2 bg-primary dark:bg-blue-400 rounded-full group-hover:scale-125 dark:group-hover:bg-blue-300 transition-all"></span>
                    <span className="font-body text-on-surface dark:text-blue-200 group-hover:text-primary dark:group-hover:text-blue-100 transition-colors">
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
