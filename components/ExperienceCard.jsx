export default function ExperienceCard({ title, company, duration, location, description }) {
  return (
    <div className="border-l-4 border-primary pl-6 py-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-headline text-xl font-bold text-on-surface dark:text-cyan-400">
            {title}
          </h3>
          <p className="font-body text-lg text-primary dark:text-inverse-primary font-semibold">
            {company}
          </p>
        </div>
        <span className="font-label text-sm text-on-surface-variant dark:text-inverse-on-surface whitespace-nowrap ml-4">
          {duration}
        </span>
      </div>
      
      <p className="font-body text-sm text-on-surface-variant dark:text-inverse-on-surface mb-3">
        📍 {location}
      </p>
      
      <ul className="space-y-2">
        {description.map((point, index) => (
          <li key={index} className="font-body text-on-surface-variant dark:text-inverse-on-surface flex gap-3">
            <span className="text-primary flex-shrink-0">▪</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
