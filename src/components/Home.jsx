import React from 'react'
import { motion} from 'framer-motion';
import { FiDownload, FiMail} from 'react-icons/fi';
import moi from '../../public/Aj.jpeg'
function Home() {
  return (
    <section className="flex-grow flex items-center pt-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-blue-600 font-medium mb-4"
            >
              Hello, I'm
            </motion.p>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-200 to-gray-900 bg-clip-text text-transparent">
              RATSARAFARA Jean <span className="text-blue-600">Antoinnet</span>
            </h1>
            
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl text-gray-600 mb-8"
            >
              Backend Developer
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-200 mb-12 max-w-lg"
            >
              I craft exceptional digital experiences with modern web technologies. 
              Focused on React + Django and beautiful user interfaces.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all shadow-lg"
              >
                <FiDownload /><a href="/CV.pdf" download="CV.pdf">Download CV</a> 
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 hover:border-blue-400 transition-all shadow-sm"
              >
                <FiMail /> <a href="mailto:antoinnetrajean@gmail.com">Let's Talk</a>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-full h-full rounded-2xl bg-gradient-to-r from-blue-100 to-indigo-100 -z-10"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center h-3/4 rounded-full">
                  <span className="text-white text-4xl font-bold"><img src={moi} alt="Antoinnet"/></span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 -z-10"></div>
              <div className="absolute bottom-80 -left-40 w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 -z-10"></div>
              <div className="absolute bottom-80 -left-9 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-orange-400 -z-10"></div>
              <div className="absolute -left-7 w-84 h-10 rounded-full bg-gradient-to-r from-blue-500 to-orange-400 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </section>
  )
}

export default Home
