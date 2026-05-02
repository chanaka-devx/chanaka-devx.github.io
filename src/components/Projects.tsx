

const projects = [
  {
    title: "RentRide",
    subtitle: "Car Rental System",
    problem: "Managing vehicle inventory, bookings, and customer data manually led to errors and inefficiency.",
    solution: "Developed a comprehensive rental management system with real-time availability tracking and automated booking workflows.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    features: ["Real-time Booking", "Admin Dashboard", "Fleet Management"],
    links: { github: "#", live: "#" }
  },
  {
    title: "Quizzy",
    subtitle: "Quiz Management App",
    problem: "Existing quiz apps lacked customizable, real-time multiplayer features for localized study groups.",
    solution: "Built a cross-platform mobile app allowing users to create, share, and compete in quizzes in real-time.",
    tech: ["Flutter", "Firebase", "Dart"],
    features: ["Real-time Database Updates", "User Authentication", "Leaderboards"],
    links: { github: "#", live: "#" }
  },
  {
    title: "L’Essence",
    subtitle: "Restaurant Table Booking System",
    problem: "Users struggled to book tables and find available food items in a restaurant effectively.",
    solution: "A unified platform for booking tables and finding available food items in a restaurant.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    features: ["Table Booking", "Food Item Availability"],
    links: { github: "#", live: "https://l-essence-client.vercel.app/" }
  },
  {
    title: "Maritime Surveillance",
    subtitle: "Team Project (ongoing)",
    problem: "Monitoring maritime traffic for security threats required processing large volumes of data manually.",
    solution: "Collaborated on a surveillance system that aggregates and visualizes AIS data to identify potential anomalies.",
    tech: ["Python", "Machine Learning", "Data Visualization"],
    features: ["Anomaly Detection", "Real-time Mapping", "Data Aggregation"],
    links: { github: "#", live: "#" }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary-text-light dark:text-primary-text-dark mb-12 flex items-center">
          <span className="text-primary mr-2">03.</span> Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="p-6 md:p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-2xl font-bold text-primary-text-light dark:text-primary-text-dark group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-sm text-primary font-medium mt-1">{project.subtitle}</p>
                    </div>
                    {/* Folder Icon */}
                    <svg className="w-10 h-10 text-primary opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                </div>
                
                <div className="flex-grow space-y-4 mb-6">
                    <div>
                        <h4 className="text-xs uppercase tracking-wider text-secondary-text-light dark:text-secondary-text-dark font-semibold mb-1">Problem</h4>
                        <p className="text-secondary-text-light dark:text-secondary-text-dark text-sm">{project.problem}</p>
                    </div>
                    <div>
                        <h4 className="text-xs uppercase tracking-wider text-secondary-text-light dark:text-secondary-text-dark font-semibold mb-1">Solution</h4>
                        <p className="text-secondary-text-light dark:text-secondary-text-dark text-sm">{project.solution}</p>
                    </div>
                </div>

                <div className="mt-auto">
                    <ul className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map(tech => (
                            <li key={tech} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                                {tech}
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center space-x-4">
                         {/* Placeholder links - icon only for minimal look */}
                         <a href={project.links.github} className="text-secondary-text-light dark:text-secondary-text-dark hover:text-primary transition-colors">
                            <span className="sr-only">GitHub</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                         </a>
                         <a href={project.links.live} className="text-secondary-text-light dark:text-secondary-text-dark hover:text-primary transition-colors">
                            <span className="sr-only">Live Demo</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                         </a>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
