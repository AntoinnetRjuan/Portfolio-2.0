import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function ContactSection() {
  return (
    <div className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-32 bg-gradient-to-br from-gray-900/80 to-indigo-900/30 rounded-2xl shadow-2xl border border-gray-700/50">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        <div className="relative mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent inline-block"
          >
            Get In Touch
          </motion.h2>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-indigo-500 to-transparent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <motion.a
            href="https://facebook.com/antoinnet.rj.7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="relative group bg-gray-800/70 hover:bg-gray-700/80 backdrop-blur-sm rounded-xl p-8 flex flex-col items-center transition-all duration-300 border border-gray-700/50 hover:border-blue-400/30 shadow-lg overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600/10 rounded-full"></div>
            <div className="relative z-10 bg-blue-600 p-5 rounded-2xl mb-6 group-hover:rotate-6 transition-transform">
              <FaFacebook className="text-white text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-1">Facebook</h3>
            <p className="text-gray-400 text-center">@Antoinnet Rjuan</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.a>

          <motion.div
            whileHover={{ y: -5 }}
            className="relative group bg-gray-800/70 hover:bg-gray-700/80 backdrop-blur-sm rounded-xl p-8 flex flex-col items-center transition-all duration-300 border border-gray-700/50 hover:border-green-400/30 shadow-lg overflow-hidden"
          >
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-600/10 rounded-full"></div>
            <div className="relative z-10 bg-green-600 p-5 rounded-2xl mb-6 group-hover:-rotate-6 transition-transform">
              <FaPhone className="text-white text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-1">Phone</h3>
            <p className="text-gray-400">+261 34 98 842 62</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>

          <motion.a
            href="https://linkedin.com/in/jean-antoinnet-ratsarafara-1b077830b"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="relative group bg-gray-800/70 hover:bg-gray-700/80 backdrop-blur-sm rounded-xl p-8 flex flex-col items-center transition-all duration-300 border border-gray-700/50 hover:border-blue-400/30 shadow-lg overflow-hidden"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full"></div>
            <div className="relative z-10 bg-blue-500 p-5 rounded-2xl mb-6 group-hover:rotate-12 transition-transform">
              <FaLinkedin className="text-white text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-1">LinkedIn</h3>
            <p className="text-gray-400 text-center">in/jean-antoinnet-ratsarafara</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.a>

          <motion.a
            href="mailto:antoinnetrajean@gmail.com"
            whileHover={{ y: -5 }}
            className="relative group bg-gray-800/70 hover:bg-gray-700/80 backdrop-blur-sm rounded-xl p-8 flex flex-col items-center transition-all duration-300 border border-gray-700/50 hover:border-red-400/30 shadow-lg overflow-hidden"
          >
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-red-500/10 rounded-full"></div>
            <div className="relative z-10 bg-red-500 p-5 rounded-2xl mb-6 group-hover:-rotate-12 transition-transform">
              <FaEnvelope className="text-white text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-1">Email</h3>
            <p className="text-gray-400 text-center">antoinnetrajean@gmail.com</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.a>
        </div>
        <div className="mt-16 flex justify-center">
          <div className="flex items-center text-gray-400/60">
            <FaMapMarkerAlt className="mr-2 text-blue-400/70" />
            <span>Antananarivo, Madagascar</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactSection;