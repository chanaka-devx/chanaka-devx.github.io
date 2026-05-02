

export default function Education() {
  return (
    <section id="education" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary-text-light dark:text-primary-text-dark mb-12 flex items-center justify-center">
          <span className="text-primary mr-2">04.</span> Education & Learning
        </h2>
        
        <div className="space-y-12">
            
          {/* Formal Education */}
          <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
            <div className="mb-1 text-sm text-primary font-mono">Present</div>
            <h3 className="text-xl font-bold text-primary-text-light dark:text-primary-text-dark">Bachelor of Science in Computer Engineering (BSc)</h3>
            <p className="text-secondary-text-light dark:text-secondary-text-dark mt-2">
              Focusing on Artificial Intelligence, Machine Learning, and Software Engineering.
            </p>
          </div>

          {/* Self Learning */}
          <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-primary"></div>
            <div className="mb-1 text-sm text-primary font-mono">Ongoing</div>
            <h3 className="text-xl font-bold text-primary-text-light dark:text-primary-text-dark">Self-Directed Learning</h3>
            <div className="mt-4 space-y-4">
                <div>
                    <h4 className="font-semibold text-primary-text-light dark:text-primary-text-dark">Artificial Intelligence & Machine Learning</h4>
                    <p className="text-sm text-secondary-text-light dark:text-secondary-text-dark">Functionalities of neural networks and basic ML algorithms.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-primary-text-light dark:text-primary-text-dark">Cybersecurity Fundamentals</h4>
                    <p className="text-sm text-secondary-text-light dark:text-secondary-text-dark">Understanding web vulnerabilities, secure coding practices, and encryption.</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
