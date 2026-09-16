import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa6';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.12]);

  useEffect(() => setIsMenuOpen(false), [location]);

  return (
    <>
      <motion.nav
        style={{}}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <motion.div
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/[0.06]"
        />
        <div className="relative z-10 flex items-center justify-between px-6 sm:px-12 lg:px-20 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="font-outfit font-bold text-xl text-white hover:opacity-80 transition-opacity">
            <span className="text-indigo-400">.</span>Antoinnet
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className={`text-sm font-medium tracking-wide relative group transition-colors duration-200 ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-indigo-400 to-cyan-400 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* GitHub button */}
          <motion.a
            href="https://github.com/AntoinnetRjuan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(99,102,241,0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white text-sm font-medium transition-all duration-200"
          >
            <FaGithub size={16} />
            GitHub
          </motion.a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-slate-300 hover:text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#0f0f1a] border-l border-white/10 flex flex-col p-8 md:hidden"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-outfit font-bold text-white">
                  <span className="text-indigo-400">.</span>Antoinnet
                </span>
                <button onClick={() => setIsMenuOpen(false)} className="text-slate-400 hover:text-white">
                  <FiX size={22} />
                </button>
              </div>

              <ul className="flex flex-col gap-2">
                {NAV_ITEMS.map((item, i) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <Link
                        to={item.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                          isActive
                            ? 'bg-indigo-600/20 text-white border border-indigo-500/30'
                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />}
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-auto">
                <a
                  href="https://github.com/AntoinnetRjuan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white text-sm font-medium transition-all"
                >
                  <FaGithub size={18} /> View GitHub Profile
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Menu;