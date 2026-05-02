

export default function About() {
  return (
    <section id="about" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-primary-text-light dark:text-primary-text-dark mb-6 flex items-center">
              <span className="text-primary mr-2">01.</span> About Me
            </h2>
            <div className="space-y-4 text-secondary-text-light dark:text-secondary-text-dark leading-relaxed">
              <p>
                I am an aspiring AI and Machine Learning engineer with a strong interest in understanding how intelligent systems learn from data and make decisions. My journey in technology is driven by curiosity, experimentation, and a desire to build meaningful, data-driven solutions.
              </p>
              <p>
                Currently, I am focused on developing a solid foundation in machine learning concepts and exploring how AI can be applied to real-world problems. I enjoy working with modern tools and frameworks to experiment, learn, and translate ideas into practical applications.
              </p>
              <p>
                Currently, I am focused on developing a solid foundation in machine learning concepts and exploring how AI can be applied to real-world problems. I enjoy working with modern tools and frameworks to experiment, learn, and translate ideas into practical applications.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            {/* Placeholder for an image or graphic if needed in future, keeping it minimal text-only or code-snippet styled for now as per minimal requirement, 
                but let's add a tech-themed decorative element. */}
            <div className="relative w-full max-w-sm">
                <div className="absolute top-0 -left-4 w-full h-full border-2 border-primary rounded translate-x-4 translate-y-4 z-0"></div>
                <div className="relative z-10 bg-card-light dark:bg-card-dark p-6 rounded shadow-lg border border-gray-100 dark:border-gray-800">
                    <pre className="text-xs sm:text-sm font-mono text-secondary-text-light dark:text-secondary-text-dark overflow-x-auto">
{`{
  "role": "Software Developer",
  "focus": [
    "Backend Systems",
    "Cloud Architecture",
    "AI Fundamentals"
  ],
  "traits": [
    "Problem Solver",
    "Continuous Learner",
    "Clean Code Enthusiast"
  ]
}`}
                    </pre>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
