import { motion } from 'framer-motion';
import { Code2, Server, Database, Wrench, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 className="w-5 h-5 text-white" />,
    tools: [
      { name: "React", slug: "react" },
      { name: "HTML", slug: "html5" },
      { name: "CSS", slug: "css3" },
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Vite", slug: "vite" },
    ]
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5 text-white" />,
    tools: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express.js", slug: "express" },
      { name: "Springboot", slug: "springboot" },
    ]
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5 text-white" />,
    tools: [
      { name: "MySQL", slug: "mysql" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "PostGIS", slug: "postgis" },
      { name: "Firebase", slug: "firebase" },
    ]
  },
  {
    title: "DevOps & Infrastructure",
    icon: <Wrench className="w-5 h-5 text-white" />,
    tools: [
      { name: "Docker", slug: "docker" },
      { name: "Jenkins", slug: "jenkins" },
      { name: "Ansible", slug: "ansible" },
      { name: "AWS", slug: "amazonwebservices" },
      { name: "Terraform", slug: "terraform" },
    ]
  },
  {
    title: "AI & Data Science",
    icon: <Brain className="w-5 h-5 text-white" />,
    tools: [
      { name: "Python", slug: "python" },
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "Scikit-learn", slug: "scikitlearn" },
      { name: "FastAPI", slug: "fastapi" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background-light dark:bg-background-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] text-[10px] font-bold text-black/40 dark:text-white/40 tracking-[0.2em] uppercase mb-8">
            <span>002</span>
            <span className="w-1 h-1 rounded-full bg-black/20 dark:bg-white/20"></span>
            <span>Technology Ecosystem</span>
          </div>
          
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-[#111111] p-8 lg:p-10 rounded-[40px] border border-black/[0.03] dark:border-white/[0.03] shadow-[0_20px_50px_rgba(0,0,0,0.02)] dark:shadow-none hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] dark:hover:border-white/10 transition-all duration-500 group"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-black dark:bg-[#1a1a1a] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black dark:text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>
                <span className="text-[10px] font-bold text-black/20 dark:text-white/20 tracking-widest uppercase">
                  {category.tools.length} Tools
                </span>
              </div>

              {/* Tools Grid */}
              <div className="flex flex-wrap gap-3">
                {category.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#f8f9fa] dark:bg-[#1a1a1a] border border-black/[0.03] dark:border-white/[0.03] hover:border-black/10 dark:hover:border-white/10 transition-all duration-300"
                  >
                    <img 
                      src={`https://cdn.simpleicons.org/${tool.slug}`} 
                      alt={tool.name} 
                      className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity dark:invert" 
                    />
                    <span className="text-sm font-semibold text-black/60 dark:text-white/60">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
