import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, ExternalLink, Image as ImageIcon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

// Graphic Design Categories & Data
const graphicCategories = [
  { id: 'pubmats', label: 'Pubmats & Events' },
  { id: 'logos', label: 'Logos & Identity' },
  { id: 'apparel', label: 'Apparel & Stickers' },
  { id: 'personal', label: 'Personal Art' }
];

const graphicData = {
  pubmats: [
    { id: 1, title: 'IKIGAI Summit Visuals', span: 'col-span-1 md:col-span-2 aspect-[2/1]' },
    { id: 2, title: 'Foundation Week Teasers', span: 'col-span-1 aspect-square' },
    { id: 3, title: 'Event Registration Layouts', span: 'col-span-1 aspect-square' },
  ],
  logos: [
    { id: 4, title: 'Official Event Logo', span: 'col-span-1 aspect-square' },
    { id: 5, title: 'Organization Badge', span: 'col-span-1 aspect-square' },
    { id: 6, title: 'Sticker Vectors', span: 'col-span-1 md:col-span-2 aspect-[2/1]' },
  ],
  apparel: [
    { id: 7, 
      title: 'Department Polo Shirt', 
      span: 'col-span-1 aspect-[0.75/0.50]', 
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/v1779766109/sample4_e96uiv.jpg'
    },
    { id: 8, 
      title: 'Department Polo Shirt', 
      span: 'col-span-1 aspect-[0.75/0.50]', 
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/v1779767398/6_pwyfai.jpg'
    },
    { id: 9, 
      title: 'Department Polo Shirt', 
      span: 'col-span-1 aspect-[0.75/0.50]', 
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/v1779767438/draft5_fyemh2.png'
    },
  ],
  personal: [
    { id: 9, title: 'Minimalist Earthy Concept', span: 'col-span-1 aspect-square' },
    { id: 10, title: 'Anime-Inspired Palettes', span: 'col-span-1 md:col-span-2 aspect-[2/1]' },
  ]
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('pubmats');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle Dark Mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Design', href: '#design' },
    { name: 'Programs', href: '#programs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-white text-black transition-colors duration-500 dark:bg-black dark:text-white font-sans">
      
      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center relative">
          <span className="text-xl font-bold tracking-tighter z-50">flaminghotsisig.</span>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center font-medium text-sm">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-gray-500 transition-colors">
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center gap-2 z-50">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full h-screen bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 md:hidden flex flex-col pt-8 px-6 gap-6 text-2xl font-bold z-40"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-gray-500 transition-colors border-b border-gray-100 dark:border-gray-900 pb-4"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HOME / ABOUT ME SECTION */}
      <section id="home" className="pt-32 pb-20 px-4 md:px-6 max-w-6xl mx-auto min-h-screen flex flex-col justify-center">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Designing visuals. <br /> Coding logic.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            I'm Loydi Saquilon, an incoming 4th-year BSIT student bridging the gap between aesthetic graphic design and highly functional programming. I build systems that work and design interfaces that captivate.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-black/10 dark:shadow-white/10 text-sm sm:text-base text-center flex-1 sm:flex-none">
              Let's Talk
            </a>
            <a href="/resume.pdf" className="border border-black dark:border-white px-6 py-3 rounded-xl font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-sm sm:text-base text-center flex-1 sm:flex-none">
              View Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* GRAPHIC DESIGN SECTION */}
      <section id="design" className="py-20 px-4 md:px-6 max-w-6xl mx-auto border-t border-gray-200 dark:border-gray-800">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Graphic Design Showcase</h2>
            
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {graphicCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all duration-300 flex-1 sm:flex-none whitespace-nowrap ${
                    activeTab === cat.id 
                      ? 'bg-black text-white dark:bg-white dark:text-black shadow-md' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Animated Grid Layout */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode='popLayout'>
              {graphicData[activeTab].map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className={`relative group bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center shadow-sm hover:shadow-xl transition-shadow duration-500 ${item.span}`}
                >
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <ImageIcon size={48} className="text-gray-300 dark:text-gray-700 transition-transform duration-700 group-hover:scale-110" />
                  )}
                                      
                  {/* Hover Title Overlay - Bottom Slide Up */}
                  <div className="absolute bottom-0 left-0 w-full pt-16 pb-4 px-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20 pointer-events-none">
                    <span className="text-white font-bold tracking-wider text-sm sm:text-base drop-shadow-md">
                      {item.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </section>

      {/* PROGRAMS / PROJECTS SECTION */}
      <section id="programs" className="py-20 px-4 md:px-6 max-w-6xl mx-auto border-t border-gray-200 dark:border-gray-800">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 tracking-tight">Technical Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { 
                title: 'RAG-Powered Institutional Knowledge System', 
                stack: 'FastAPI, Supabase, React',
                desc: 'An AI-driven platform built for quality assurance and academic governance.'
              },
              { 
                title: 'IoT Fire and Gas Leakage Warning System', 
                stack: 'Arduino, MQ-2, DHT22',
                desc: 'A hardware/software safety solution designed for campus laboratory environments.' 
              }
            ].map((project, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="border border-gray-200 dark:border-gray-800 p-6 sm:p-8 rounded-2xl hover:border-black dark:hover:border-white transition-colors bg-white dark:bg-black shadow-sm hover:shadow-xl dark:shadow-none flex flex-col h-full"
              >
                <div className="h-40 sm:h-48 bg-gray-100 dark:bg-gray-900 rounded-xl mb-6 flex items-center justify-center overflow-hidden shrink-0">
                  <span className="text-gray-400 text-xs sm:text-sm">App Screenshot Placeholder</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-4 font-mono">{project.stack}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm flex-grow">{project.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 font-bold text-sm hover:underline mt-auto">
                  View Details <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 sm:py-32 px-4 md:px-6 max-w-6xl mx-auto border-t border-gray-200 dark:border-gray-800 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's build something together.</h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto px-4 sm:px-0">
            Whether it's a sleek brand identity, engaging pubmats, or a complex full-stack web application, I'm currently open for freelance opportunities and collaborations.
          </p>
          <div className="flex justify-center gap-4 sm:gap-6">
            <a href="mailto:loyddsaquilon@gmail.com" className="p-3 sm:p-4 border border-gray-200 dark:border-gray-800 rounded-2xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all hover:scale-110 shadow-sm">
              <Mail size={24} />
            </a>
            <a href="https://github.com/loydskie11" target="_blank" rel="noreferrer" className="p-3 sm:p-4 border border-gray-200 dark:border-gray-800 rounded-2xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all hover:scale-110 shadow-sm">
              <GithubIcon size={24} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 text-center text-xs sm:text-sm text-gray-500 border-t border-gray-200 dark:border-gray-800">
        <p>© {new Date().getFullYear()} Loydi Saquilon (flaminghotsisig). All rights reserved.</p>
      </footer>

    </div>
  );
};

export default App;