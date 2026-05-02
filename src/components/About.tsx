import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 bg-background-light dark:bg-background-dark relative overflow-hidden flex justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-xs font-semibold text-primary-text-light dark:text-primary-text-dark tracking-widest">
            <span>001</span>
            <span className="w-1 h-1 rounded-full bg-primary-text-light/30 dark:bg-primary-text-dark/30"></span>
            <span>WHO I AM</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="w-full"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight md:leading-tight lg:leading-tight tracking-tight">
            <span className="text-primary-text-light dark:text-primary-text-dark">I am an aspiring AI and Machine Learning engineer </span>
            <span className="text-black/20 dark:text-white/20">with a strong interest in understanding how intelligent systems learn from data and make decisions. My journey in technology is driven by curiosity, experimentation, and a desire to build meaningful, data-driven solutions.</span>
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="mt-12"
        >
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:scale-105 transition-transform"
          >
            Get In Touch
          </button>
        </motion.div>

      </div>
    </section>
  );
}
