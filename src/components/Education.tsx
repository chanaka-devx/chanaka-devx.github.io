import { motion } from 'framer-motion';

const education = [
  {
    institution: "Bachelor of Science in Computer Engineering (BSc)",
    degree: "Formal Education",
    period: "Present",
    details: ["Focusing on Artificial Intelligence", "Machine Learning", "Software Engineering"]
  },
  {
    institution: "Self-Directed Learning",
    degree: "Ongoing Learning",
    period: "Ongoing",
    details: ["Functionalities of neural networks and Generative AI.", "Understanding web vulnerabilities, secure coding practices, and encryption."]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-32 bg-background-light dark:bg-background-dark relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-xs font-semibold text-primary-text-light dark:text-primary-text-dark tracking-widest mb-8">
            <span>004</span>
            <span className="w-1 h-1 rounded-full bg-primary-text-light/30 dark:bg-primary-text-dark/30"></span>
            <span>PROCESS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-text-light dark:text-primary-text-dark tracking-tight">
            Education <span className="text-primary-text-light/30 dark:text-primary-text-dark/30">&</span> Learning
          </h2>
        </motion.div>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/10 dark:bg-white/10 -translate-x-1/2"></div>
          
          <div className="space-y-16">
            {education.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Center Node */}
                <div className="absolute left-1/2 w-4 h-4 rounded-full bg-black dark:bg-white border-4 border-white dark:border-[#111111] -translate-x-1/2 z-10 shadow-sm"></div>
                
                {/* Content Card - Left or Right */}
                <div className={`mt-10 md:mt-0 w-full md:w-[calc(50%-3rem)] flex ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  <div className="w-full bg-[#f8f8f8] dark:bg-[#1a1a1a] p-8 md:p-10 rounded-[32px] hover:-translate-y-2 transition-transform duration-300 border border-black/5 dark:border-white/5 shadow-sm group text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center md:items-center justify-between mb-6 gap-4">
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white dark:bg-[#222222] shadow-sm flex items-center justify-center font-bold text-lg border border-black/5 dark:border-white/5">
                                {idx + 1}
                            </div>
                            <h3 className="text-2xl font-bold text-primary-text-light dark:text-primary-text-dark tracking-tight">
                              {item.degree}
                            </h3>
                        </div>
                        <span className="inline-block px-4 py-2 rounded-full bg-white dark:bg-[#222222] border border-black/5 dark:border-white/5 text-sm font-semibold">
                          {item.period}
                        </span>
                    </div>
                    
                    <h4 className="text-lg text-black/60 dark:text-white/60 mb-6 font-medium">
                      {item.institution}
                    </h4>
                    
                    <ul className="space-y-3 text-primary-text-light/80 dark:text-primary-text-dark/80 flex flex-col items-center md:items-start">
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex items-center md:items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/30 dark:bg-white/30 shrink-0 group-hover:bg-black dark:group-hover:bg-white transition-colors mt-0 md:mt-2"></span>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
