import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/ExperienceCard';
import EducationCard from '../components/EducationCard';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { resumeData } from '../data/resumeData';

export default function Home() {
  return (
    <>
      <Head>
        <title>{resumeData.personal.name} | Portfolio</title>
        <meta name="description" content={resumeData.personal.bio} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700;800&family=Inter:wght@400;500;600&family=Space_Grotesk:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Head>

      <style jsx>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
          font-size: 1.25rem;
        }
      `}</style>

      <Navbar />
      <main>
        <HeroSection />
        
        {/* Projects Section */}
        <section id="research" className="py-20 px-8 bg-surface dark:bg-inverse-surface">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="font-headline text-5xl md:text-6xl font-black mb-4 text-on-surface dark:text-transparent dark:bg-gradient-to-r dark:from-cyan-400 dark:to-cyan-300 dark:bg-clip-text">
              Featured Projects
            </h2>
            <p className="font-body text-lg text-on-surface-variant dark:text-inverse-on-surface mb-16">
              A selection of projects showcasing my skills in data analytics, automation, and web development
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resumeData.projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  impact={project.impact}
                  tags={project.tags}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-8 bg-surface-bright dark:bg-inverse-surface">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Experience */}
              <div>
                <h2 className="font-headline text-5xl font-black mb-16 text-on-surface dark:text-transparent dark:bg-gradient-to-r dark:from-cyan-400 dark:to-cyan-300 dark:bg-clip-text">
                  Experience
                </h2>
                <div className="space-y-12">
                  {resumeData.experience.map((exp, index) => (
                    <ExperienceCard
                      key={index}
                      title={exp.title}
                      company={exp.company}
                      duration={exp.duration}
                      location={exp.location}
                      description={exp.description}
                    />
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="font-headline text-5xl font-black mb-16 text-on-surface dark:text-transparent dark:bg-gradient-to-r dark:from-cyan-400 dark:to-cyan-300 dark:bg-clip-text">
                  Education
                </h2>
                <div className="space-y-6">
                  {resumeData.education.map((edu, index) => (
                    <EducationCard
                      key={index}
                      degree={edu.degree}
                      school={edu.school}
                      year={edu.year}
                      location={edu.location}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <SkillsSection />
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
