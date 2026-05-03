import { motion } from 'framer-motion';

const skillsRow1 = [
  { name: "TypeScript", slug: "typescript" },
  { name: "JavaScript", slug: "javascript" },
  { name: "Python", slug: "python" },
  { name: "Java", slug: "java" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Flutter", slug: "flutter" },
  { name: "Dart", slug: "dart" },
  { name: "MySQL", slug: "mysql" },
  { name: "MongoDB", slug: "mongodb" }
];

const skillsRow2 = [
  { name: "TensorFlow", slug: "tensorflow" },
  { name: "PyTorch", slug: "pytorch" },
  { name: "Scikit-Learn", slug: "scikitlearn" },
  { name: "Keras", slug: "keras" },
  { name: "Hugging Face", slug: "huggingface" },
  { name: "OpenAI", slug: "openai" },
  { name: "Google Gemini", slug: "googlegemini" },
  { name: "LangChain", slug: "langchain" },
  { name: "Pandas", slug: "pandas" },
  { name: "NumPy", slug: "numpy" }
];

const skillsRow3 = [
  { name: "Docker", slug: "docker" },
  { name: "Terraform", slug: "terraform" },
  { name: "Jenkins", slug: "jenkins" },
  { name: "Ansible", slug: "ansible" },
  { name: "AWS", slug: "amazonwebservices" },
  { name: "Firebase", slug: "firebase" },
  { name: "Linux", slug: "linux" },
  { name: "Git", slug: "git" },
  { name: "VS Code", slug: "visualstudiocode" },
  { name: "Figma", slug: "figma" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-background-light dark:bg-background-dark relative overflow-hidden flex flex-col items-center">
      
      <div className="w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 px-4 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-xs font-semibold text-primary-text-light dark:text-primary-text-dark tracking-widest mb-8">
            <span>002</span>
            <span className="w-1 h-1 rounded-full bg-primary-text-light/30 dark:bg-primary-text-dark/30"></span>
            <span>TECHNOLOGY ECOSYSTEM</span>
          </div>
        </motion.div>
        
        {/* Marquee Row 1 */}
        <div className="flex overflow-hidden group w-full mb-6 mask-image-fade">
            <div className="flex animate-marquee gap-6 min-w-max pr-6 group-hover:[animation-play-state:paused]">
                {[...skillsRow1, ...skillsRow1, ...skillsRow1].map((skill, idx) => (
                    <div 
                        key={`${skill.name}-${idx}`} 
                        className="flex-none px-6 py-4 rounded-full bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 hover:shadow-lg text-primary-text-light dark:text-primary-text-dark text-lg font-medium transition-all duration-300 flex items-center justify-center min-w-[180px] gap-3"
                    >
                        <img src={`https://cdn.simpleicons.org/${skill.slug}`} alt={skill.name} className="w-6 h-6 dark:invert" />
                        {skill.name}
                    </div>
                ))}
            </div>
        </div>

        {/* Marquee Row 2 (Reverse) */}
        <div className="flex overflow-hidden group w-full mb-6 mask-image-fade">
            <div className="flex animate-marquee-reverse gap-6 min-w-max pr-6 group-hover:[animation-play-state:paused]">
                {[...skillsRow2, ...skillsRow2, ...skillsRow2].map((skill, idx) => (
                    <div 
                        key={`${skill.name}-${idx}`} 
                        className="flex-none px-6 py-4 rounded-full bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 hover:shadow-lg text-primary-text-light dark:text-primary-text-dark text-lg font-medium transition-all duration-300 flex items-center justify-center min-w-[180px] gap-3"
                    >
                        <img src={`https://cdn.simpleicons.org/${skill.slug}`} alt={skill.name} className="w-6 h-6 dark:invert" />
                        {skill.name}
                    </div>
                ))}
            </div>
        </div>

        {/* Marquee Row 3 */}
        <div className="flex overflow-hidden group w-full mask-image-fade">
            <div className="flex animate-marquee gap-6 min-w-max pr-6 group-hover:[animation-play-state:paused]">
                {[...skillsRow3, ...skillsRow3, ...skillsRow3].map((skill, idx) => (
                    <div 
                        key={`${skill.name}-${idx}`} 
                        className="flex-none px-6 py-4 rounded-full bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 hover:shadow-lg text-primary-text-light dark:text-primary-text-dark text-lg font-medium transition-all duration-300 flex items-center justify-center min-w-[180px] gap-3"
                    >
                        <img src={`https://cdn.simpleicons.org/${skill.slug}`} alt={skill.name} className="w-6 h-6 dark:invert" />
                        {skill.name}
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}
