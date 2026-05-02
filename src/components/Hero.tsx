

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start w-full">
        <div className="space-y-6 max-w-3xl">
          <p className="text-primary font-medium tracking-wide">Hi, my name is Chanaka Madhuranga</p>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-text-light dark:text-primary-text-dark tracking-tight">
            AI & Machine Learning Enthusiast
          </h1>
          
          <p className="text-lg text-secondary-text-light dark:text-secondary-text-dark max-w-xl leading-relaxed">
            Learning and applying machine learning concepts through real-world projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={scrollToProjects}
              className="px-8 py-3 rounded border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 font-medium"
            >
              View Projects
            </button>
            <button 
              onClick={scrollToContact}
              className="px-8 py-3 rounded bg-primary text-white hover:bg-primary/90 transition-colors duration-300 font-medium"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
