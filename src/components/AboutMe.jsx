import React from 'react'
import { motion } from 'framer-motion'
import moi from '../../public/Aj.jpeg'

function AboutMe() {
  return (
    <div className='flex flex-col mt-16 md:mt-0 lg:flex-row p-4 sm:p-6 md:p-12 lg:p-24 gap-6 md:gap-12 lg:gap-24 items-center'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent w-full lg:w-auto"
      >
        .About me
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-base sm:text-lg text-gray-200 mt-4 mb-8 sm:mb-12 max-w-lg"
        >
          My name is RATSARAFARA Jean Antoinnet, a 23-years-old student at the Institut Supérieur Polytechnique de Madagascar (ISPM). I am currently in my third year, majoring in Information Systems, Software Engineering, and Artificial Intelligence. I have a deep passion for exploring and mastering new technologies, always eager to expand my knowledge and skills in this ever-evolving field.
        </motion.p>
        <div className="absolute -left-2 sm:-right-12 w-36 h-36 sm:w-36 sm:h-36 md:w-20 md:h-20 rounded-br-full bg-gradient-to-r from-yellow-400 to-orange-400 -z-10"></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative w-full max-w-xs sm:max-w-sm md:max-w-md"
        whileHover={{ scale: 1.05 }}
      >
        <div className="absolute -right-8 sm:-right-12 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 -z-10"></div>
        
        <div className="relative w-full">
          <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-100 to-indigo-100 -z-10"></div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-square bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center rounded-xl sm:rounded-full">
              <img 
                src={moi} 
                alt="Antoinnet" 
                className="w-full h-full object-cover rounded-xl sm:rounded-full"
              />
            </div>
          </div>
          <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 -z-10"></div>
        </div>
      </motion.div>
      <div className="absolute bottom-10 w-84 h-10 rounded-full sm:hidden md:left-3 bg-gradient-to-r from-blue-500 to-orange-300 -z-10"></div>
    </div>
  )
}

export default AboutMe
