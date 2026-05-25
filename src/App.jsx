import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const GithubIcon = ({ size = 24 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.6 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0 .1-3.8s-1.2-.4-3.9 1.4a12.8 12.8 0 0 0-7 0C6.2 1.2 5 1.6 5 1.6a5.5 5.5 0 0 0 .1 3.8A5.5 5.5 0 0 0 3 9.5c0 4.9 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle Dark Mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-white text-black transition-colors duration-500 dark:bg-black dark:text-white font-sans">
      
      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter">flaminghotsisig.</span>
          <div className="flex gap-6 items-center font-medium text-sm">
            <a href="#home" className="hover:text-gray-500 transition-colors">Home</a>
            <a href="#design" className="hover:text-gray-500 transition-colors">Design</a>
            <a href="#programs" className="hover:text-gray-500 transition-colors">Programs</a>
            <a href="#contact" className="hover:text-gray-500 transition-colors">Contact</a>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* HOME / ABOUT ME SECTION */}
      <section id="home" className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen flex flex-col justify-center">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Designing visuals. <br /> Coding logic.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            I'm an incoming 4th-year IT student bridging the gap between aesthetic graphic design and highly functional programming. I build systems that work and design interfaces that captivate.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-none font-bold hover:scale-105 transition-transform">
              Let's Talk
            </a>
            <a href="/resume.pdf" className="border border-black dark:border-white px-6 py-3 rounded-none font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
              View Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* GRAPHIC DESIGN SECTION */}
      <section id="design" className="py-20 px-6 max-w-6xl mx-auto border-t border-gray-200 dark:border-gray-800">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="text-3xl font-bold mb-10 tracking-tight">Graphic Design Showcase</h2>
          
          {/* Aesthetic Bento-Box Layout */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div 
                key={item}
                variants={fadeInUp}
                whileHover={{ scale: 0.98, opacity: 0.8 }}
                className={`relative group bg-gray-100 dark:bg-gray-900 overflow-hidden cursor-pointer flex items-center justify-center ${item === 1 || item === 4 ? 'md:col-span-2 aspect-[2/1]' : 'aspect-square'}`}
              >
                <ImageIcon size={48} className="text-gray-300 dark:text-gray-700" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold tracking-wider">Project 0{item}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* PROGRAMS / PROJECTS SECTION */}
      <section id="programs" className="py-20 px-6 max-w-6xl mx-auto border-t border-gray-200 dark:border-gray-800">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="text-3xl font-bold mb-10 tracking-tight">Technical Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Inventory Management App', stack: 'React, Node.js, PostgreSQL' },
              { title: 'Student Portal Dashboard', stack: 'Vue, Firebase, Tailwind' }
            ].map((project, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="border border-gray-200 dark:border-gray-800 p-8 hover:border-black dark:hover:border-white transition-colors"
              >
                <div className="h-48 bg-gray-100 dark:bg-gray-900 mb-6 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">App Screenshot Placeholder</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-6 font-mono">{project.stack}</p>
                <a href="#" className="inline-flex items-center gap-2 font-bold text-sm hover:underline">
                  View Repository <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 max-w-6xl mx-auto border-t border-gray-200 dark:border-gray-800 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="text-4xl font-bold mb-6">Let's build something together.</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Whether it's a sleek brand identity or a complex full-stack web application, I'm currently open for freelance opportunities and internships.
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:your@email.com" className="p-4 border border-gray-200 dark:border-gray-800 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
              <Mail size={24} />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="p-4 border border-gray-200 dark:border-gray-800 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
              <GithubIcon size={24} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm text-gray-500 border-t border-gray-200 dark:border-gray-800">
        <p>© {new Date().getFullYear()} flaminghotsisig. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default App;