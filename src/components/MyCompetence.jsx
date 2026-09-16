import React from 'react'
import { motion } from 'framer-motion'
import python from '../../public/python.png'
import django from '../../public/django.png'
import mysql from '../../public/mysql.svg'
import sqlserver from '../../public/sqlserver.svg'
import htmlEtCss from '../../public/coding.png'
import reactLogo from '../../public/atom.png'
import tailwind from '../../public/tailwind.svg'
import js from '../../public/js.png'
import sharp from '../../public/c-sharp.svg'
import java from '../../public/java.svg'
import typescript from '../../public/typescript.svg'

const skillGroups = [
  {
    category: 'Backend',
    color: 'from-indigo-600 to-violet-600',
    glow: 'hover:shadow-indigo-500/20',
    level: 90,
    description: 'Python & Django backend development, scalable APIs and clean architecture',
    tools: [
      { src: python, alt: 'Python', name: 'Python' },
      { src: django, alt: 'Django', name: 'Django' },
    ],
    extras: ['RESTful APIs', 'Architecture Logicielle', 'Conception BD', 'Microservices'],
  },
  {
    category: 'Frontend',
    color: 'from-cyan-500 to-blue-500',
    glow: 'hover:shadow-cyan-500/20',
    level: 80,
    description: 'Modern, reactive web interfaces with React, TypeScript and TailwindCSS',
    tools: [
      { src: reactLogo, alt: 'React', name: 'React' },
      { src: typescript, alt: 'TypeScript', name: 'TypeScript' },
      { src: js, alt: 'JavaScript', name: 'JavaScript' },
      { src: tailwind, alt: 'TailwindCSS', name: 'Tailwind' },
      { src: htmlEtCss, alt: 'HTML/CSS', name: 'HTML/CSS' },
    ],
    extras: ['Vite', 'npm Packages', 'Component Design'],
  },
  {
    category: 'Data & Databases',
    color: 'from-violet-600 to-purple-600',
    glow: 'hover:shadow-violet-500/20',
    level: 80,
    description: 'Relational databases, data analysis and Machine Learning exploration',
    tools: [
      { src: mysql, alt: 'MySQL', name: 'MySQL' },
      { src: sqlserver, alt: 'SQL Server', name: 'SQL Server' },
    ],
    extras: ['Pandas / NumPy', 'Scikit-Learn', 'Matplotlib', 'Streamlit'],
  },
  {
    category: 'OOP & Desktop',
    color: 'from-orange-500 to-amber-500',
    glow: 'hover:shadow-orange-500/20',
    level: 75,
    description: 'Object-oriented application development with C# and Java',
    tools: [
      { src: sharp, alt: 'C#', name: 'C#' },
      { src: java, alt: 'Java', name: 'Java' },
    ],
    extras: ['WPF', 'Tkinter', 'Design Patterns', 'SOLID Principles'],
  },
]

const softSkills = [
  'Architecture logicielle',
  'Conception & API REST',
  'Conception de bases de données',
  'Analyse de données & ML',
  'Collaboration en équipe Agile / Scrum',
  'Gestion de version (Git & GitHub)',
  'Postman & Tests API',
  'Déploiement Vercel',
  'Esprit d’analyse & Problem Solving'
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function MyCompetence() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-indigo-600/8 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/8 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-28 pb-20">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-indigo-400 text-sm">02.</span>
          <span className="font-outfit text-slate-500 text-sm tracking-widest uppercase">My Skills</span>
          <div className="flex-1 h-px bg-white/5 max-w-xs" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-14"
        >
          <h2 className="font-outfit font-black text-4xl sm:text-5xl text-white mb-4">
            Frameworks, Languages &{' '}
            <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl">
            Python Full-Stack developer with backend mastery, REST API design, database modeling, 
            data analysis, and modern frontend integration.
          </p>
        </motion.div>

        {/* Skill cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              className={`glass rounded-2xl p-6 border border-white/5 ${group.glow} hover:shadow-xl transition-all duration-300 group`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-1">Category</p>
                  <h3 className={`font-outfit font-bold text-lg bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
                    {group.category}
                  </h3>
                </div>
                <span className={`font-outfit font-bold text-2xl bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
                  {group.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 bg-white/5 rounded-full mb-5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${group.level}%` }}
                  transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                  className={`h-full rounded-full bg-gradient-to-r ${group.color}`}
                />
              </div>

              <p className="text-slate-400 text-sm mb-5">{group.description}</p>

              {/* Tool logos */}
              <div className="flex flex-wrap items-center gap-4 mb-4">
                {group.tools.map((tool) => (
                  <motion.div
                    key={tool.name}
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-center gap-1"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2 hover:border-white/20 transition-all">
                      <img src={tool.src} alt={tool.alt} className="w-7 h-7 object-contain" />
                    </div>
                    <span className="text-xs text-slate-500">{tool.name}</span>
                  </motion.div>
                ))}
              </div>

              {/* Extra tags */}
              {group.extras.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {group.extras.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Soft skills + Languages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Soft skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="md:col-span-2 glass rounded-2xl p-6 border border-white/5"
          >
            <h3 className="font-outfit font-bold text-lg text-white mb-4">Other Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="text-sm px-3 py-1.5 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="glass rounded-2xl p-6 border border-white/5"
          >
            <h3 className="font-outfit font-bold text-lg text-white mb-4">Languages</h3>
            <div className="flex flex-col gap-3">
              {[
                { flag: '🇲🇬', lang: 'Malagasy', level: 'Native' },
                { flag: '🇫🇷', lang: 'French', level: 'Professional' },
                { flag: '🇬🇧', lang: 'English', level: 'Elementary' },
              ].map(({ flag, lang, level }) => (
                <div key={lang} className="flex items-center gap-3">
                  <span className="text-2xl">{flag}</span>
                  <div>
                    <p className="text-sm font-medium text-white">{lang}</p>
                    <p className="text-xs text-slate-500">{level}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default MyCompetence
