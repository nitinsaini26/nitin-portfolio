export default function ProjectCard({ title, description, impact, tags, imageUrl }) {
  return (
    <div className="bg-surface dark:bg-gray-800/90 p-8 border border-surface-variant dark:border-gray-700/80 hover:border-primary dark:hover:border-indigo-500 transition-all duration-300 group hover:shadow-lg dark:hover:shadow-indigo-500/20 transform hover:scale-[1.02]">
      {imageUrl && (
        <div className="mb-6 h-48 bg-gradient-to-br from-primary to-primary-container rounded opacity-10 overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      
      <h3 className="font-headline text-2xl font-bold text-on-surface dark:text-indigo-300 mb-4 group-hover:text-primary dark:group-hover:text-indigo-200 transition-colors">
        {title}
      </h3>
      
      <p className="font-body text-on-surface-variant dark:text-slate-300 mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="bg-primary-fixed dark:bg-indigo-950/60 p-4 mb-6 border-l-4 border-primary dark:border-indigo-500 transition-all duration-300 group-hover:bg-blue-900/30 dark:group-hover:bg-indigo-900/40">
        <p className="font-body text-sm text-on-surface dark:text-slate-200 group-hover:text-blue-900 dark:group-hover:text-slate-100 transition-colors">
          <strong className="text-primary dark:text-indigo-300">Impact:</strong> {impact}
        </p>
      </div>
      
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-secondary-container dark:bg-indigo-950/80 border border-transparent dark:border-indigo-800/50 text-secondary dark:text-indigo-200 text-xs font-label font-bold rounded-full transition-all duration-300 hover:scale-105 dark:hover:bg-indigo-900 dark:hover:text-indigo-100"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
