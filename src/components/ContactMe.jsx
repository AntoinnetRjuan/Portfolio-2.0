import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaPhone, FaEnvelope, FaLocationDot, FaGithub } from 'react-icons/fa6';

const contacts = [
  {
    icon: FaFacebook,
    label: 'Facebook',
    value: '@Antoinnet Rjuan',
    href: 'https://facebook.com/antoinnet.rj.7',
    gradient: 'from-blue-600 to-blue-500',
    glow: 'hover:shadow-blue-500/25',
    border: 'hover:border-blue-500/30',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'jean-antoinnet-ratsarafara',
    href: 'https://linkedin.com/in/jean-antoinnet-ratsarafara-1b077830b',
    gradient: 'from-sky-600 to-sky-500',
    glow: 'hover:shadow-sky-500/25',
    border: 'hover:border-sky-500/30',
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'antoinnetrajean@gmail.com',
    href: 'mailto:antoinnetrajean@gmail.com',
    gradient: 'from-red-600 to-rose-500',
    glow: 'hover:shadow-red-500/25',
    border: 'hover:border-red-500/30',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+261 34 98 842 62',
    href: 'tel:+261349884262',
    gradient: 'from-emerald-600 to-green-500',
    glow: 'hover:shadow-emerald-500/25',
    border: 'hover:border-emerald-500/30',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: '@AntoinnetRjuan',
    href: 'https://github.com/AntoinnetRjuan',
    gradient: 'from-slate-600 to-slate-500',
    glow: 'hover:shadow-slate-500/25',
    border: 'hover:border-slate-500/30',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function ContactSection() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-indigo-600/8 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-600/8 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-28 pb-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-indigo-400 text-sm">04.</span>
          <span className="font-outfit text-slate-500 text-sm tracking-widest uppercase">Contact</span>
          <div className="flex-1 h-px bg-white/5 max-w-xs" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-5 text-center max-w-2xl mx-auto"
        >
          <h2 className="font-outfit font-black text-4xl sm:text-5xl text-white mb-4">
            Let's Work{' '}
            <span className="text-gradient">Together</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Available for Python Developer, Backend or Full-Stack roles, as well as freelance projects and tech collaborations. Don't hesitate to reach out — I'd love to hear from you!
          </p>
        </motion.div>

        {/* Highlight CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
          className="mb-14 flex justify-center"
        >
          <motion.a
            href="mailto:antoinnetrajean@gmail.com"
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(99,102,241,0.5)' }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-base shadow-lg"
          >
            <FaEnvelope size={18} />
            Say Hello — antoinnetrajean@gmail.com
          </motion.a>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
        >
          {contacts.map(({ icon: Icon, label, value, href, gradient, glow, border }) => (
            <motion.a
              key={label}
              variants={fadeUp}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ y: -5 }}
              className={`glass rounded-2xl p-6 border border-white/5 ${border} ${glow} hover:shadow-xl transition-all duration-300 group flex items-center gap-5`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${gradient} shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                <Icon className="text-white" size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-widest mb-1">{label}</p>
                <p className="text-sm text-slate-200 font-medium truncate">{value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="border-t border-white/5 pt-10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <FaLocationDot className="text-indigo-400" size={14} />
            <span>Antananarivo, Madagascar 🇲🇬</span>
          </div>
          <p className="text-slate-600 text-sm font-mono">
            © 2026 <span className="text-slate-400">Jean Antoinnet Ratsarafara</span> — Built with React & Vite
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactSection;