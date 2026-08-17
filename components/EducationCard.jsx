export default function EducationCard({ degree, school, year, location }) {
  return (
    <div className="bg-surface dark:bg-gray-800/90 border border-surface-variant dark:border-gray-700/80 p-6 hover:border-primary dark:hover:border-indigo-500 transition-all duration-300 group hover:shadow-lg dark:hover:shadow-indigo-500/20 transform hover:scale-[1.02]">
      <div className="flex items-start justify-between mb-3">
        <span className="font-label text-xs font-bold text-on-surface-variant dark:text-indigo-300 uppercase tracking-wider group-hover:text-primary dark:group-hover:text-indigo-200 transition-colors">
          {year}
        </span>
      </div>
      
      <h3 className="font-headline text-xl font-bold text-on-surface dark:text-slate-100 mb-2 group-hover:text-primary dark:group-hover:text-indigo-300 transition-colors">
        {degree}
      </h3>
      
      <p className="font-body text-lg text-primary dark:text-blue-400 font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
        {school}
      </p>
      
      <p className="font-body text-sm text-on-surface-variant dark:text-slate-300 flex items-center gap-2 group-hover:text-primary dark:group-hover:text-slate-100 transition-colors font-medium">
        📍 {location}
      </p>
    </div>
  );
}
