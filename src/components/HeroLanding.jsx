import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaArrowRight, FaDownload, FaCode } from 'react-icons/fa6';
import moi from '../../public/Aj.jpeg';

const NAV_LINKS = [
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

const SOCIALS = [
  { icon: FaGithub, href: 'https://github.com/AntoinnetRjuan', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/jean-antoinnet-ratsarafara-1b077830b', label: 'LinkedIn' },
  { icon: FaFacebook, href: 'https://facebook.com/antoinnet.rj.7', label: 'Facebook' },
];

const TITLES = ['Python Full-Stack Dev', 'Backend Developer', 'Django & React Dev', 'Software Engineer & IA'];

export default function HeroLanding() {
  const navigate = useNavigate();
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTitleIndex((i) => (i + 1) % TITLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] overflow-hidden flex flex-col">

      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px] animate-[glow-pulse_4s_ease-in-out_infinite]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] animate-[glow-pulse_4s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-purple-600/5 blur-[80px]" />
      </div>

      {/* Floating code particles */}
      {['{ }', '//', '<>', '=>', '[]', '**'].map((sym, i) => (
        <motion.span
          key={sym}
          className="pointer-events-none absolute font-mono text-indigo-400/10 select-none"
          style={{
            left: `${10 + i * 15}%`,
            top: `${15 + (i % 3) * 25}%`,
            fontSize: `${1.5 + (i % 3) * 0.8}rem`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.7, ease: 'easeInOut' }}
        >
          {sym}
        </motion.span>
      ))}

      {/* Top navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 sm:px-12 lg:px-20 pt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-outfit font-bold text-xl text-white"
        >
          <span className="text-indigo-400">.</span>Antoinnet
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden md:flex items-center gap-8"
        >
          {NAV_LINKS.map((link, i) => (
            <motion.li key={link.label} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.08 }}>
              <button
                onClick={() => navigate(link.path)}
                className="text-slate-400 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-indigo-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </button>
            </motion.li>
          ))}
        </motion.ul>

        <motion.a
          href="https://github.com/AntoinnetRjuan"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 24px rgba(99,102,241,0.5)' }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white text-sm font-medium transition-all duration-200"
        >
          <FaGithub size={16} />
          <span className="hidden sm:inline">GitHub</span>
        </motion.a>
      </nav>

      {/* Main hero content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Text content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            <motion.div variants={item} className="flex items-center gap-3">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-[glow-pulse_2s_ease-in-out_infinite]" />
              <span className="text-xs font-medium tracking-widest text-emerald-400 uppercase">Available for work</span>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-2 text-slate-500 text-sm font-mono">
              <FaCode size={12} className="text-indigo-400" />
              <span>Hello, World! I'm</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-outfit font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] tracking-tight"
            >
              Jean
              <br />
              <span className="text-gradient">Antoinnet</span>
            </motion.h1>

            <motion.div variants={item} className="flex items-center gap-2 h-10">
              <span className="font-mono text-lg sm:text-xl text-indigo-300 font-semibold">
                {displayed}
              </span>
              <span className="w-0.5 h-6 bg-indigo-400 animate-blink" />
            </motion.div>

            <motion.p variants={item} className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg">
              24-year-old Python Full-Stack Developer with 4 years of experience on academic, 
              governmental and entrepreneurial projects. Master 1 student in Software Engineering & AI at <span className="text-slate-200 font-medium">ISPM Madagascar</span>.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
              <motion.button
                onClick={() => navigate('/projects')}
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(99,102,241,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-sm transition-all duration-200"
              >
                View Projects <FaArrowRight size={14} />
              </motion.button>

              <motion.a
                href="/CV_Ratsarafara_Jean_Antoinnet-2.pdf"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                <FaDownload size={14} className="text-cyan-400" /> Download CV
              </motion.a>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-4 pt-2">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, color: '#6366f1' }}
                  className="text-slate-500 hover:text-indigo-400 transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
              <span className="w-px h-5 bg-slate-700" />
              <span className="text-xs text-slate-600 font-mono">Antananarivo, 🇲🇬</span>
            </motion.div>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-600/30 to-cyan-500/30 blur-2xl scale-95 animate-[glow-pulse_3s_ease-in-out_infinite]" />

            {/* Border gradient frame */}
            <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500">
              <div className="relative rounded-3xl overflow-hidden w-72 h-80 sm:w-80 sm:h-96 lg:w-[340px] lg:h-[420px] bg-[#0f0f1a]">
                <img
                  src={moi}
                  alt="Jean Antoinnet Ratsarafara"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating badge — Experience */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-4 top-8 glass rounded-2xl px-4 py-3 text-center shadow-xl"
            >
              <p className="font-outfit font-bold text-2xl text-white">M1</p>
              <p className="text-xs text-slate-400">Génie Logiciel & IA</p>
            </motion.div>

            {/* Floating badge — Stack */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -left-4 bottom-10 glass rounded-2xl px-4 py-3 shadow-xl"
            >
              <p className="text-xs text-slate-400 mb-1">Main Stack</p>
              <p className="font-outfit font-bold text-sm text-white">Python · Django · React</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <motion.button
          onClick={() => navigate('/about')}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase font-medium">Explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
        </motion.button>
      </motion.div>
    </div>
  );
}
