import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaCode, FaDatabase, FaGlobe, FaGraduationCap } from 'react-icons/fa6'
import moi from '../../public/Aj.jpeg'

const stats = [
  { value: '3', label: 'Years Study', icon: FaGraduationCap },
  { value: '2+', label: 'Projects Built', icon: FaCode },
  { value: '9+', label: 'Technologies', icon: FaDatabase },
]

const langs = [
  { flag: '🇫🇷', label: 'French', level: 'Native' },
  { flag: '🇬🇧', label: 'English', level: 'Proficient' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function AboutMe() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-600/8 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-28 pb-20">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-14"
        >
          <span className="font-mono text-indigo-400 text-sm">01.</span>
          <span className="font-outfit text-slate-500 text-sm tracking-widest uppercase">About Me</span>
          <div className="flex-1 h-px bg-white/5 max-w-xs" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Left — Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-600/20 to-cyan-500/20 blur-2xl scale-90" />

            {/* Gradient border */}
            <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500">
              <div className="rounded-3xl overflow-hidden w-72 h-80 sm:w-80 sm:h-96 bg-[#0f0f1a]">
                <img
                  src={moi}
                  alt="Jean Antoinnet Ratsarafara"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-4 -right-4 sm:-right-6 glass rounded-2xl px-4 py-3 shadow-xl border border-emerald-500/20"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-[glow-pulse_2s_ease-in-out_infinite]" />
                <span className="text-xs font-semibold text-emerald-400">Available</span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Open to work</p>
            </motion.div>

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-4 -left-4 sm:-left-6 glass rounded-2xl px-4 py-3 shadow-xl"
            >
              <p className="text-xs text-slate-400">Based in</p>
              <p className="text-sm font-semibold text-white">🇲🇬 Antananarivo</p>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-6">
            <motion.h2
              variants={fadeUp}
              className="font-outfit font-black text-4xl sm:text-5xl text-white leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-gradient">Jean Antoinnet</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-slate-400 text-base sm:text-lg leading-relaxed">
              I'm a 23-year-old student at the{' '}
              <span className="text-slate-200 font-medium">Institut Supérieur Polytechnique de Madagascar (ISPM)</span>, 
              currently in my 3rd year majoring in{' '}
              <span className="text-indigo-300 font-medium">Information Systems, Software Engineering & Artificial Intelligence</span>.
            </motion.p>

            <motion.p variants={fadeUp} className="text-slate-500 text-sm sm:text-base leading-relaxed">
              I have a deep passion for exploring and mastering new technologies — from building 
              robust backend systems with Python & Django to crafting modern frontends with React. 
              Always eager to expand my knowledge in this ever-evolving field.
            </motion.p>

            {/* Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="glass rounded-2xl p-4 text-center border border-white/5 hover:border-indigo-500/30 transition-all duration-300 group">
                  <Icon className="mx-auto mb-2 text-indigo-400 group-hover:text-cyan-400 transition-colors" size={18} />
                  <p className="font-outfit font-bold text-2xl text-white">{value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{label}</p>
                </div>
              ))}
            </motion.div>

            {/* Languages */}
            <motion.div variants={fadeUp}>
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-3 font-medium">Languages</p>
              <div className="flex flex-wrap gap-3">
                {langs.map(({ flag, label, level }) => (
                  <div key={label} className="flex items-center gap-2 glass rounded-xl px-4 py-2 border border-white/5">
                    <span className="text-lg">{flag}</span>
                    <div>
                      <p className="text-sm font-medium text-white">{label}</p>
                      <p className="text-xs text-slate-500">{level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <motion.a
                href="/CV ANTOINNET.pdf"
                download
                whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(99,102,241,0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold transition-all"
              >
                <FaDownload size={13} /> Download CV
              </motion.a>
              <motion.a
                href="https://github.com/AntoinnetRjuan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white text-sm font-semibold transition-all"
              >
                <FaGlobe size={13} /> View GitHub
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
