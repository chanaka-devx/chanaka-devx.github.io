import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronDown } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
);

const projects = [
  {
    title: "Fast EMI Prediction",
    subtitle: "Physics-Aware Generative AI",
    problem: "Predicting Electromagnetic Interference (EMI) for hardware designs usually requires slow, computationally expensive simulations (IEEE IES Generative AI Challenge 2026).",
    solution: "Designed a physics-informed generative AI surrogate model that enables real-time risk visualization and automated quality metrics.",
    tech: ["GenAI", "LLMs", "Surrogate Modeling", "Python"],
    links: { github: "#", live: "#" },
    dark: true
  },
  {
    title: "Document Q&A System",
    subtitle: "RAG Pipeline Development",
    problem: "Retrieving accurate answers from large, domain-specific document corpora is difficult with traditional keyword-based search.",
    solution: "Built a Retrieval-Augmented Generation (RAG) pipeline using LangChain, FAISS, and Gemini for context-grounded answer generation.",
    tech: ["Python", "LangChain", "Gemini API", "Hugging Face"],
    links: { github: "https://github.com/chanaka-devx/Document-QA-system", live: "#" },
    dark: false
  },
  {
    title: "Air Quality Prediction",
    subtitle: "Multivariate LSTM Modeling",
    problem: "Forecasting air pollution levels from complex sensor data requires capturing complex long-term temporal dependencies.",
    solution: "Trained a multivariate LSTM neural network with an end-to-end preprocessing pipeline to accurately predict trends and inform analytics.",
    tech: ["TensorFlow", "Keras", "Scikit-learn", "LSTM"],
    links: { github: "#", live: "#" },
    dark: false
  },
  {
    title: "SerenGuard",
    subtitle: "Maritime Surveillance Software",
    problem: "Manually identifying suspicious activity in vast AIS location data is inefficient and prone to missing critical security threats.",
    solution: "Developed a real-time monitoring system that flags anomalies and provides a robust RBAC dashboard for maritime security operators.",
    tech: ["Python", "React", "Node.js", "PostgreSQL"],
    links: { github: "https://github.com/ramishka-devx/maritime-surveillance-software", live: "#" },
    dark: true
  },
  {
    title: "Task Manager",
    subtitle: "DevOps CI/CD Application",
    problem: "Manual deployment and infrastructure provisioning are inconsistent and slow down the development lifecycle for modern apps.",
    solution: "Automated end-to-end deployment with a Jenkins CI/CD pipeline and provisioned cloud resources using Terraform and Ansible.",
    tech: ["Docker", "Jenkins", "Terraform", "Ansible"],
    links: { github: "https://github.com/chanaka-devx/task-manager", live: "#" },
    dark: false
  },
  {
    title: "RentRide",
    subtitle: "Car Rental Web Application",
    problem: "Managing vehicle availability and rental bookings manually through spreadsheets is inefficient and prone to double-booking.",
    solution: "Built a full-stack car rental platform with a normalized MySQL database and a robust admin dashboard for seamless CRUD operations.",
    tech: ["React", "Node.js", "MySQL", "Express"],
    links: { github: "https://github.com/chanaka-devx/Car-Rental", live: "#" },
    dark: true
  },
  {
    title: "Quizzy",
    subtitle: "Quiz Mobile Application",
    problem: "Most learning apps lack engaging, real-time quiz experiences with instant feedback and progress tracking for users.",
    solution: "Developed a Flutter-based mobile app featuring timer-based evaluation workflows and a unified Firebase backend.",
    tech: ["Flutter", "Firebase", "Dart"],
    links: { github: "https://github.com/chanaka-devx/Quiz-app", live: "#" },
    dark: false
  },
  {
    title: "MedBox",
    subtitle: "Smart Medication Reminder",
    problem: "Patients often forget to take medication on time, leading to poor adherence and potential health risks for chronic conditions.",
    solution: "Engineered a smart reminder app integrated with IoT hardware to automate adherence tracking, showcased at ReXtro 2025.",
    tech: ["Flutter", "IoT", "Firebase", "Dart"],
    links: { github: "https://github.com/chanaka-devx/medibox", live: "#" },
    dark: true
  }
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="py-32 bg-background-light dark:bg-background-dark relative overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-xs font-semibold text-primary-text-light dark:text-primary-text-dark tracking-widest mb-8">
            <span>003</span>
            <span className="w-1 h-1 rounded-full bg-primary-text-light/30 dark:bg-primary-text-dark/30"></span>
            <span>FEATURED WORK</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary-text-light dark:text-primary-text-dark tracking-tight">
            What I've Built
          </h2>
        </motion.div>

        {/* Masonry Layout Approximation using Columns */}
        <div className="columns-1 md:columns-2 gap-8 space-y-8 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5,
                  delay: showAll ? (index - 2) * 0.1 : index * 0.1,
                  layout: { duration: 0.4 }
                }}
                key={project.title} 
                className={`relative rounded-[40px] p-8 md:p-12 break-inside-avoid flex flex-col hover:-translate-y-2 transition-all duration-500
                  ${project.dark 
                    ? 'bg-[#111111] text-white border border-white/10 shadow-2xl' 
                    : 'bg-white dark:bg-[#1a1a1a] text-[#111111] dark:text-white border border-black/10 dark:border-white/10 shadow-sm'
                  }`}
              >
                <Quote className={`absolute top-8 right-8 w-10 h-10 opacity-20 ${project.dark ? 'text-white' : 'text-black dark:text-white'}`} />
                
                <div className="relative z-10">
                  <div className="mb-8">
                      <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                        "{project.solution}"
                      </p>
                      <p className={`font-light leading-relaxed ${project.dark ? 'text-white/60' : 'text-black/60 dark:text-white/60'}`}>
                        {project.problem}
                      </p>
                  </div>
                  
                  <div className={`mt-auto pt-8 border-t flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6
                      ${project.dark ? 'border-white/10' : 'border-black/10 dark:border-white/10'}`}>
                      <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg
                              ${project.dark ? 'bg-white text-black' : 'bg-black text-white dark:bg-white dark:text-black'}`}>
                              {project.title.charAt(0)}
                          </div>
                          <div>
                              <h3 className="text-lg font-bold">
                                  {project.title}
                              </h3>
                              <p className={`text-sm ${project.dark ? 'text-white/60' : 'text-black/60 dark:text-white/60'}`}>{project.subtitle}</p>
                          </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 shrink-0">
                           <a href={project.links.github} className={`p-3 rounded-full hover:scale-110 transition-transform duration-300
                              ${project.dark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 text-black dark:text-white'}`}>
                              <span className="sr-only">GitHub</span>
                              <GithubIcon className="w-5 h-5" />
                           </a>
                           
                      </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-6">
                      {project.tech.map(tech => (
                          <span key={tech} className={`text-xs font-medium px-3 py-1 rounded-full
                              ${project.dark ? 'bg-white/10 text-white/80' : 'bg-black/5 dark:bg-white/5 text-black/80 dark:text-white/80'}`}>
                              {tech}
                          </span>
                      ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {!showAll && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-20 text-center"
          >
            <button 
              onClick={() => setShowAll(true)}
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-primary-text-light dark:bg-primary-text-dark text-background-light dark:text-background-dark rounded-full font-bold text-sm tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">VIEW ALL PROJECTS</span>
              <ChevronDown className="relative z-10 w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              
              {/* Button Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
