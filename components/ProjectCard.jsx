export default function ProjectCard({ title, description, impact, tags, imageUrl }) {
  return (
    <div className="bg-surface dark:bg-gray-800 p-8 border border-surface-variant dark:border-blue-800 hover:border-primary dark:hover:border-blue-500 transition-all duration-300 group hover:shadow-lg dark:hover:shadow-blue-900/50 transform hover:scale-105 dark:hover:scale-105">
      {imageUrl && (
        <div className="mb-6 h-48 bg-gradient-to-br from-primary to-primary-container rounded opacity-10 overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      
      <h3 className="font-headline text-2xl font-bold text-on-surface dark:text-purple-400 mb-4 group-hover:text-purple-300 dark:group-hover:text-purple-300 transition-colors">
        {title}
      </h3>
      
      <p className="font-body text-on-surface-variant dark:text-inverse-on-surface mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="bg-primary-fixed dark:bg-blue-950 p-4 mb-6 border-l-4 border-primary dark:border-blue-600 transition-all duration-300 group-hover:bg-blue-900 dark:group-hover:bg-blue-900 dark:group-hover:border-blue-500">
        <p className="font-body text-sm text-on-surface dark:text-blue-200 group-hover:text-blue-100 dark:group-hover:text-blue-100 transition-colors">
          <strong>Impact:</strong> {impact}
        </p>
      </div>
      
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-secondary-container dark:bg-blue-900 text-secondary dark:text-blue-200 text-xs font-label font-bold rounded-full transition-all duration-300 hover:scale-110 dark:hover:bg-blue-800 dark:hover:text-blue-100 dark:hover:shadow-lg dark:hover:shadow-blue-600/30"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
