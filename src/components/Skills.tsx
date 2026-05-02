

const skills = {
  "Languages": ["TypeScript", "JavaScript", "Python", "Java", "SQL", "Dart"],
  "Frameworks": ["React", "Express.js", "Node.js", "Flutter", "Tailwind CSS"],
  "Tools": ["Git", "Docker", "Postman", "VS Code", "Firebase"],
  "Concepts": ["REST APIs", "MVC Architecture", "OOP", "Data Structures", "Auth"]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary-text-light dark:text-primary-text-dark mb-12 flex items-center">
          <span className="text-primary mr-2">02.</span> Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-primary mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li key={skill} className="flex items-center text-secondary-text-light dark:text-secondary-text-dark">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 text-xs opacity-70"></span>
                    {skill}
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
