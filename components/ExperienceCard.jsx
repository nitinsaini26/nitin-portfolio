export default function ExperienceCard({ title, company, duration, location, description }) {
  return (
    <div className="border-l-4 border-primary dark:border-indigo-500 pl-6 py-4 transition-all duration-300">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-headline text-xl font-bold text-on-surface dark:text-indigo-300">
            {title}
          </h3>
          <p className="font-body text-lg text-primary dark:text-blue-400 font-semibold">
            {company}
          </p>
        </div>
        <span className="font-label text-sm text-on-surface-variant dark:text-slate-400 whitespace-nowrap ml-4 font-medium">
          {duration}
        </span>
      </div>
      
      <p className="font-body text-sm text-on-surface-variant dark:text-slate-300 mb-3 font-medium">
        📍 {location}
      </p>
      
      <ul className="space-y-2">
        {description.map((point, index) => (
          <li key={index} className="font-body text-on-surface-variant dark:text-slate-300 flex gap-3">
            <span className="text-primary dark:text-indigo-400 flex-shrink-0 font-bold">▪</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
