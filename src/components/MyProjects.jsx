import React from 'react'
import { motion } from "framer-motion"
import dgl from '../../public/Bibliotheque Numerique0.png'
import dgl1 from '../../public/Bibliotheque Numerique1.png'

function MyProjects() {
  return (
    <div>
      <div className='flex flex-col mt-12 lg:flex-row justify-center items-center lg:items-start gap-8 p-4 md:p-8'>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-center lg:text-left"
        >
          Projects:
          <div className="absolute lg:bottom-6 md:bottom-2/3 right-6 w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 -z-10"></div>
          <div className="absolute lg:bottom-40 md:bottom-1/2 left-40 w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 -z-10"></div>
          <div className="absolute lg:bottom-80 md:bottom-1/2 left-9 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-orange-400 -z-10"></div>
          <div className="absolute lg:left-54 md:left-2 sm:left-0 lg:top-44 lg:w-84 lg:h-10 rounded-full bg-gradient-to-r from-blue-500 to-orange-400 -z-10"></div>
        </motion.div>

        <div className="w-full lg:w-1/2">
          <ul className="space-y-6 text-sm sm:text-base md:text-lg text-gray-200">
            <li className="bg-gray-800/50 p-4 rounded-xl">
              <div className='flex flex-col gap-2'>
                <span>Development of a web application "Digital library"(loading...)</span>
                <div className='flex flex-col items-center justify-center gap-4 sm:gap-8 p-2'>
                  <img src={dgl} alt="digital library" className='lg:w-60 lg:h-36 sm:w-14 sm:h-14 md:w-50 md:h-24' />
                  <img src={dgl1} alt="digital library" className='lg:w-60 lg:h-36 sm:w-14 sm:h-14 md:w-50 md:h-24' />
                </div>
                <p className='text-sm sm:text-base text-gray-400'>This project is a web application that allows users to access all Malagasy legal texts about works,public function(params) {

                }. It is built using Django for the backend and React for the frontend.</p>
              </div>
            </li>
            <li className="bg-gray-800/50 p-4 rounded-xl">
              <div className='flex flex-col gap-2'>
                <span>Development of a web application "Djangoan>
                <div className='flex flex-col items-center justify-center gap-4 sm:gap-8 p-2'>
                  <img src={dgl} alt="digital library" className='lg:w-60 lg:h-36 sm:w-14 sm:h-14 md:w-50 md:h-24' />
                  <img src={dgl1} alt="digital library" className='lg:w-60 lg:h-36 sm:w-14 sm:h-14 md:w-50 md:h-24' />
                </div>
                <p className='text-sm sm:text-base text-gray-400'>This project is a web application that allows user to follow their colis and chat with the driver. It is built using node js for backend and React for the frontend.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MyProjects
