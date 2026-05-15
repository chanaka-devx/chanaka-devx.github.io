import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

const paragraph = "I am an aspiring Software Engineer with a passion for building robust, scalable, and user-centric applications. My journey is focused on mastering modern web development and AI/Machine Learning to build intelligent, data-driven solutions for real-world challenges.";

export default function About() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  });

  const words = paragraph.split(" ");

  return (
    <section id="about" className="py-32 bg-background-light dark:bg-background-dark relative overflow-hidden flex justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-xs font-semibold text-primary-text-light dark:text-primary-text-dark tracking-widest">
            <span>001</span>
            <span className="w-1 h-1 rounded-full bg-primary-text-light/30 dark:bg-primary-text-dark/30"></span>
            <span>WHO I AM</span>
          </div>
        </motion.div>

        <div ref={container} className="w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight flex flex-wrap justify-center">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + (1 / words.length);
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </h2>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="mt-16"
        >
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-8 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}

const Word = ({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  
  return (
    <span className="relative mr-3 mt-2 flex">
      {children.split("").map((char, i) => {
        const start = range[0] + (i * step);
        const end = range[0] + ((i + 1) * step);
        return (
          <Char key={i} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <span className="relative">
      <span className="absolute opacity-[0.1] text-black dark:text-white select-none">
        {children}
      </span>
      <motion.span style={{ opacity }} className="text-black dark:text-white">
        {children}
      </motion.span>
    </span>
  );
};
