import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaCircle } from 'react-icons/fa6'
import dgl from '../../public/Bibliotheque Numerique0.png'
import dgl1 from '../../public/Bibliotheque Numerique1.png'
import colis from '../../public/colis.png'
import paymopic from '../../public/paymopic.png'

const projects = [
  {
    id: 1,
    title: 'Digital Library',
    subtitle: 'Bibliothèque Numérique',
    description:
      'A web application that allows users to access all Malagasy legal texts about works and public functions. Features full-text search, category browsing, and document management.',
    images: [dgl, dgl1],
    stack: ['Django', 'React', 'Python', 'PostgreSQL'],
    status: 'In Progress',
    statusColor: 'text-amber-400 border-amber-400/30 bg-amber-400/10',
    dotColor: 'bg-amber-400',
    github: 'https://github.com/AntoinnetRjuan',
    gradient: 'from-indigo-600/20 to-violet-600/20',
    border: 'hover:border-indigo-500/40',
  },
  {
    id: 2,
    title: 'ColiExpress',
    subtitle: 'Parcel Tracking App',
    description:
      'A real-time parcel tracking platform that allows users to follow their deliveries and chat directly with the driver. Built with a modern WebSocket-based messaging system.',
    images: [colis],
    stack: ['Node.js', 'React', 'Socket.io', 'MongoDB'],
    status: 'Completed',
    statusColor: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
    dotColor: 'bg-emerald-400',
    github: 'https://github.com/AntoinnetRjuan',
    gradient: 'from-cyan-600/20 to-blue-600/20',
    border: 'hover:border-cyan-500/40',
  },
  {
    id: 3,
    title: 'PaymoPic',
    subtitle: 'Payment Interface',
    description:
      'A clean and modern payment interface project focusing on user experience and intuitive design for digital transactions.',
    images: [paymopic],
    stack: ['React', 'JavaScript', 'CSS'],
    status: 'Completed',
    statusColor: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
    dotColor: 'bg-emerald-400',
    github: 'https://github.com/AntoinnetRjuan',
    gradient: 'from-violet-600/20 to-pink-600/20',
    border: 'hover:border-violet-500/40',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function ProjectCard({ project }) {
  const [activeImg, setActiveImg] = useState(0)

  return (
    <motion.div
      variants={fadeUp}
      className={`glass rounded-3xl border border-white/5 ${project.border} overflow-hidden transition-all duration-300 group`}
    >
      {/* Image gallery */}
      <div className={`relative h-52 sm:h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImg}
            src={project.images[activeImg]}
            alt={project.title}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="w-full h-full object-cover object-top"
          />
        </AnimatePresence>

        {/* Status badge */}
        <div className={`absolute top-4 left-4 flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${project.statusColor}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${project.dotColor} animate-[glow-pulse_2s_ease-in-out_infinite]`} />
          {project.status}
        </div>

        {/* Image dots */}
        {project.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${i === activeImg ? 'bg-white w-5' : 'bg-white/40'}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="font-outfit font-bold text-xl text-white mb-1">{project.title}</h3>
          <p className="text-xs text-slate-500 font-mono">{project.subtitle}</p>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-slate-300 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white text-sm font-medium transition-all hover:border-white/20"
          >
            <FaGithub size={14} /> View Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

function MyProjects() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-600/8 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-600/8 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-28 pb-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-indigo-400 text-sm">03.</span>
          <span className="font-outfit text-slate-500 text-sm tracking-widest uppercase">My Projects</span>
          <div className="flex-1 h-px bg-white/5 max-w-xs" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-14"
        >
          <h2 className="font-outfit font-black text-4xl sm:text-5xl text-white mb-4">
            Things I've{' '}
            <span className="text-gradient">Built</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl">
            A selection of projects I've built during my studies. Each one taught me something new.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-14 text-center"
        >
          <p className="text-slate-500 text-sm mb-4">Want to see more?</p>
          <motion.a
            href="https://github.com/AntoinnetRjuan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(99,102,241,0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-sm"
          >
            <FaGithub size={16} /> Visit my GitHub
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default MyProjects
