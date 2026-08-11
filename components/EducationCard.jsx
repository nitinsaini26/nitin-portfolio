export default function EducationCard({ degree, school, year, location }) {
  return (
    <div className="bg-surface dark:bg-surface-container border border-surface-variant dark:border-outline p-6 hover:border-primary dark:hover:border-blue-500 transition-all duration-300 group hover:shadow-lg dark:hover:shadow-blue-900/50 transform hover:scale-105 dark:hover:scale-105">
      <div className="flex items-start justify-between mb-3">
        <span className="font-label text-xs font-bold text-on-surface-variant dark:text-blue-300 uppercase tracking-wider group-hover:text-primary dark:group-hover:text-blue-200 transition-colors">
          {year}
        </span>
      </div>
      
      <h3 className="font-headline text-xl font-bold text-on-surface dark:text-cyan-400 mb-2 group-hover:text-primary dark:group-hover:text-cyan-300 transition-colors">
        {degree}
      </h3>
      
      <p className="font-body text-lg text-primary dark:text-inverse-primary font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
        {school}
      </p>
      
      <p className="font-body text-sm text-on-surface-variant dark:text-blue-200 flex items-center gap-2 group-hover:text-primary dark:group-hover:text-blue-100 transition-colors">
        📍 {location}
      </p>
    </div>
  );
}
