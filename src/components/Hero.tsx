import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-gradientStart/20 dark:bg-primary-gradientStart/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-gradientEnd/20 dark:bg-primary-gradientEnd/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 max-w-4xl flex flex-col items-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-pill"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-secondary-text-light dark:text-secondary-text-dark">Hi, I'm Chanaka Madhuranga</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-primary-text-light dark:text-primary-text-dark leading-[1.1]">
            <span className="block">AI & Machine</span>
            <span className="text-gradient">Learning Enthusiast</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary-text-light dark:text-secondary-text-dark max-w-2xl font-light">
            Learning and applying machine learning concepts through real-world projects to build intelligent systems.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-8"
          >
            <button 
              onClick={scrollToProjects}
              className="group flex items-center justify-center space-x-2 px-8 py-4 rounded-pill bg-primary-text-light dark:bg-white text-background-light dark:text-black hover:scale-105 transition-all duration-300 font-semibold"
            >
              <span>View Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={scrollToContact}
              className="group flex items-center justify-center space-x-2 px-8 py-4 rounded-pill glass-card hover:bg-white/20 dark:hover:bg-white/10 text-primary-text-light dark:text-white hover:scale-105 transition-all duration-300 font-semibold"
            >
              <span>Contact Me</span>
              <Mail className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
