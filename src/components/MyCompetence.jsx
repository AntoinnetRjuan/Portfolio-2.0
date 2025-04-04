import React from 'react'
import python from '../../public/python.png'
import django from '../../public/django.png'
import mysql from '../../public/mysql.svg'
import sqlserver from '../../public/sqlserver.svg'
import htmlEtCss from '../../public/coding.png'
import reactLogo from '../../public/atom.png'
import tailwind from '../../public/tailwind.svg'
import js from '../../public/js.png'
import skills from '../../public/skills.jpg'
import sharp from '../../public/c-sharp.svg'
import java from '../../public/java.svg'
import { motion } from 'framer-motion'
function MyCompetence() {
  return (
    <div className="mt-16 md:mt-16">
      <div className="flex flex-col lg:flex-row p-4 sm:p-6 md:p-12 lg:p-24 gap-6 md:gap-12 lg:gap-24 items-center sm:mt-10 md:mt-4 lg:mt-0">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent w-full lg:w-auto">
          .My Skills
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base sm:text-lg text-gray-200 mt-4 mb-8 sm:mb-12 max-w-lg"
          >
            I am a passionate and dedicated backend developer and some Frontend as well in web development.
            I have experience in building robust and scalable applications using modern technologies.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-md">
          <div className="absolute -top-6 -left-6 w-full h-full rounded-2xl bg-gradient-to-r from-blue-100 to-indigo-100 -z-10"></div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-square bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center h-80 rounded-full">
              <span className="text-white text-4xl font-bold"><img src={skills} alt="Antoinnet" /></span>
            </div>
          </div>
        </motion.div>
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 p-4 md:p-8'>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-center lg:text-left"
        >
          Frameworks, Languages, Libraries and Databases
          <div className="absolute -bottom-11 -left-0 w-80 h-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 -z-10"></div>
          <div className="absolute bottom-80 -left-0 w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 -z-10"></div>
          <div className="absolute -bottom-80 left-64 w-24 h-84 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 -z-10"></div>
          <div className="absolute lg:-bottom-full lg:left-95 md:left-14 sm:left-6 lg:w-84 md:w-28 sm:w-24 lg:h-84 md:h-28 sm:h-24 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 -z-10"></div>
          <div className="text-2xl mt-96 font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent w-full lg:w-auto">Langues:
            <div className='flex flex-col gap-2 text-gray-300 text-sm'>
              <span className='ml-10'>English</span>
              <span className='ml-10'>French</span>
            </div>
          </div>
        </motion.div>

        <div className="w-full lg:w-1/2">
          <ul className="space-y-6 text-sm sm:text-base md:text-lg text-gray-200">
            <li className="bg-gray-800/50 p-4 rounded-xl">
              <div className='flex flex-col gap-2'>
                <span>Proficient in Python and Django for backend development</span>
                <div className='flex flex-wrap justify-center gap-4 sm:gap-8 p-2'>
                  <img src={python} alt="Python" className='w-12 h-12 sm:w-14 sm:h-14' />
                  <img src={django} alt="Django" className='w-12 h-12 sm:w-14 sm:h-14' />
                </div>
              </div>
            </li>

            <li className="bg-gray-800/50 p-4 rounded-xl">
              <div className='flex flex-col gap-2'>
                <span>Knowledge of front-end technologies like HTML & CSS, React.js & TailwindCSS</span>
                <div className='flex flex-wrap justify-center gap-4 sm:gap-6 p-2'>
                  <img src={htmlEtCss} alt="HTML/CSS" className='w-10 h-10 sm:w-12 sm:h-12' />
                  <img src={js} alt="JavaScript" className='w-10 h-10 sm:w-12 sm:h-12' />
                  <img src={reactLogo} alt="React" className='w-10 h-10 sm:w-12 sm:h-12' />
                  <img src={tailwind} alt="TailwindCSS" className='w-10 h-10 sm:w-12 sm:h-12' />
                </div>
              </div>
            </li>

            <li className="bg-gray-800/50 p-4 rounded-xl">
              <div className='flex flex-col gap-2'>
                <span>Familiarity with databases MySQL and SQLServer</span>
                <div className='flex flex-wrap justify-center gap-4 sm:gap-8 p-2'>
                  <img src={mysql} alt="MySQL" className='w-12 h-12 sm:w-14 sm:h-14' />
                  <img src={sqlserver} alt="SQL Server" className='w-12 h-12 sm:w-14 sm:h-14' />
                </div>
              </div>
            </li>

            <li className="bg-gray-800/50 p-4 rounded-xl">
              <div className='flex flex-col gap-2'>
                <span>Knowledge of object-oriented programming (OOP) principles in C# and Java</span>
                <div className='flex flex-wrap justify-center gap-4 sm:gap-8 p-2'>
                  <img src={java} alt="Java" className='w-12 h-12 sm:w-14 sm:h-14' />
                  <img src={sharp} alt="C#" className='w-12 h-12 sm:w-14 sm:h-14' />
                </div>
              </div>
            </li>

            <li className="bg-gray-800/50 p-4 rounded-xl">
              Experience with RESTful APIs and microservices architecture
            </li>
            <li className="bg-gray-800/50 p-4 rounded-xl">
              Strong problem-solving skills and attention to detail
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MyCompetence
