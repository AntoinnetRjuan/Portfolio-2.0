import { Menu, Quote, ArrowRight } from 'react-icons/fa6';
import { useState } from 'react';
import { motion } from 'framer-motion';
import landingConfig from '../config/landingConfig';

export default function HeroLandingConfigurable() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    brand,
    hero,
    trust,
    navigation,
    availability,
    testimonial,
    images,
    colors,
    animations,
  } = landingConfig;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: animations.itemStagger / 1000,
        delayChildren: animations.containerDelay / 1000,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${colors.gradientFrom} ${colors.gradientVia} ${colors.gradientTo} p-6 flex items-center justify-center font-sans`}>
      <div className="max-w-7xl w-full">
        {/* Hero Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: animations.cardDuration / 1000 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden flex h-screen max-h-[85vh]"
        >
          
          {/* LEFT SECTION - Image & Content Block */}
          <div className={`w-3/5 bg-gradient-to-br ${colors.gradientFrom} ${colors.gradientTo} relative overflow-hidden flex flex-col justify-between p-8`}>
            
            {/* Logo/Brand - Top Left */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: animations.containerDelay / 1000, duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                <span className={`text-${colors.accentDark} font-black text-lg`}>{brand.initial}</span>
              </div>
              <span className="text-white font-bold text-sm tracking-widest">{brand.name}</span>
            </motion.div>

            {/* Hero Image Area - Center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: animations.containerDelay / 1000 + 0.1, duration: 0.8 }}
              className="flex-1 flex items-center justify-center relative"
            >
              {/* Dramatic lighting effect */}
              <div className={`absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-${colors.gradientFrom} opacity-30 pointer-events-none`}></div>
              
              {/* Portrait Image */}
              <div className="relative z-10 w-64 h-80 rounded-2xl overflow-hidden shadow-2xl">
                <motion.img
                  src={images.portrait}
                  alt={`${brand.name} Portrait`}
                  className="w-full h-full object-cover opacity-95 mix-blend-multiply"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Orange overlay for dramatic lighting */}
                <div className={`absolute inset-0 bg-gradient-to-b from-${colors.accentLight}/20 via-transparent to-${colors.accentDark}/30`}></div>
              </div>
            </motion.div>

            {/* Bottom Left Content */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              {/* Big Title */}
              <motion.h1
                variants={itemVariants}
                className="text-7xl font-black text-white leading-none mb-4 tracking-tighter"
              >
                {hero.mainTitle}
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-white/90 text-sm font-medium mb-6 leading-relaxed"
              >
                {hero.subtitle.map((line, idx) => (
                  <span key={idx}>
                    {line}
                    {idx < hero.subtitle.length - 1 && <br />}
                  </span>
                ))}
              </motion.p>

              {/* CTA Button */}
              <motion.a
                href={hero.ctaLink}
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 20px 30px rgba(255,255,255,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex bg-white text-${colors.accentDark} font-bold px-6 py-3 rounded-full items-center gap-2 hover:shadow-lg transition-all duration-300`}
              >
                {hero.ctaText}
                <ArrowRight size={16} />
              </motion.a>
            </motion.div>

            {/* Bottom Left - Avatars & Trust Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: (animations.containerDelay + 500) / 1000, duration: 0.6 }}
              className="flex items-center gap-3 mt-6"
            >
              <div className="flex -space-x-3">
                {trust.avatars.map((avatar, i) => (
                  <motion.div
                    key={avatar.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (animations.containerDelay + 500 + i * 100) / 1000 }}
                    className={`w-8 h-8 rounded-full bg-white border-2 border-${colors.accentLight} flex items-center justify-center font-bold text-xs text-${colors.accentDark} shadow-md`}
                  >
                    {avatar.initials}
                  </motion.div>
                ))}
              </div>
              <div>
                <p className="text-white text-xs font-semibold">{trust.text}</p>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: (animations.containerDelay + 900) / 1000 }}
                className="ml-2 bg-white/20 backdrop-blur text-white text-xs font-bold px-2 py-1 rounded-full border border-white/30"
              >
                {trust.badge}
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT SECTION - White Content Block */}
          <div className="w-2/5 bg-white flex flex-col relative p-8">
            
            {/* Top Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: animations.containerDelay / 1000, duration: 0.6 }}
              className="flex justify-between items-center mb-8"
            >
              <nav className={`flex gap-6 text-xs font-bold text-${colors.textPrimary} tracking-wider`}>
                {navigation.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`hover:text-${colors.accentDark} transition duration-300`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <motion.button
                whileHover={{ scale: 1.1, boxShadow: `0 10px 25px rgba(249,115,22,0.4)` }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMenuOpen(!menuOpen)}
                className={`w-10 h-10 rounded-full bg-gradient-to-br from-${colors.accentLight} to-${colors.accentDark} flex items-center justify-center text-white hover:shadow-lg transition`}
              >
                <Menu size={18} />
              </motion.button>
            </motion.div>

            {/* Spacer */}
            <div className="flex-1"></div>

            {/* Available Badge */}
            {availability.isAvailable && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (animations.containerDelay + 200) / 1000, duration: 0.6 }}
                className="mb-8 flex items-center gap-3"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className={`w-3 h-3 bg-gradient-to-br from-${colors.accentLight} to-${colors.accentDark} rounded-full`}
                ></motion.div>
                <div>
                  <p className={`text-xs text-${colors.textSecondary} font-bold tracking-wider`}>{availability.status}</p>
                  <p className={`text-base font-bold text-${colors.textPrimary} mt-1`}>{availability.type}</p>
                </div>
              </motion.div>
            )}

            {/* Testimonial Card - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (animations.containerDelay + 300) / 1000, duration: 0.6 }}
              className={`bg-gradient-to-br from-${colors.bgCard} to-gray-100 rounded-2xl p-6 border border-gray-200 backdrop-blur-sm`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: (animations.containerDelay + 500) / 1000 }}
              >
                <Quote className={`text-${colors.accentLight} mb-4`} size={24} />
              </motion.div>
              
              <p className={`text-${colors.textPrimary} text-sm font-medium mb-6 italic`}>
                "{testimonial.quote}"
              </p>

              {/* Testimonial Author */}
              <div className="flex items-center gap-3">
                <motion.img
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: (animations.containerDelay + 600) / 1000, type: 'spring', stiffness: 200 }}
                  src={testimonial.author.image}
                  alt={testimonial.author.name}
                  className={`w-10 h-10 rounded-full object-cover border-2 border-${colors.accentLight}`}
                />
                <div>
                  <p className={`font-bold text-${colors.textPrimary} text-sm`}>{testimonial.author.name}</p>
                  <p className={`text-xs text-${colors.textSecondary} font-medium`}>{testimonial.author.title}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
