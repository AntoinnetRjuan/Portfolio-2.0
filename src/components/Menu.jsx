import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import github from '../../public/github.png'

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();
  const navigate = useNavigate();

  const handleGithubClick = () => {
    window.open("https://github.com/AntoinnetRjuan",'_blank')
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrolled) {
      controls.start({
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(240, 245, 255, 0.8)', // Bleu très très clair
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.05)'
      });
    } else {
      controls.start({
        backdropFilter: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        boxShadow: 'none'
      });
    }
  }, [scrolled, controls]);

  return (
    <div className=" bg-gradient-to-br flex flex-col items-center mx-auto">
      <motion.nav 
        animate={controls}
        className="fixed w-full z-50 px-6 py-4 md:px-12 lg:px-24 transition-all duration-300"      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            .Antoinnet
          </motion.div>
          <ul className="hidden md:flex space-x-8 items-center">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <Link 
                  to={`/${item == "Home" ? "":item.toLowerCase()}`} 
                  className="text-gray-200 hover:text-blue-600 transition-colors font-medium"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </Link>
              </motion.li>
            ))}
            <motion.button
              onClick={handleGithubClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md shadow-lg hover:shadow-xl transition-all"
            >
            <img src={github} alt="github" className='text-white w-5'/>
            </motion.button>
          </ul>

          <button 
            className="md:hidden text-gray-200 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </motion.nav>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 pt-24 px-6 md:hidden"
        >
          <ul className="flex flex-col space-y-6 bg-gray-800/95 rounded-lg shadow-lg">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link 
                  to={`/${item=="Home"?"":item.toLowerCase()}`}
                  className="block text-xl text-gray-100 hover:text-blue-600 py-3 border-b"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
            <motion.button
              onClick={handleGithubClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="max-w-14 ml-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md shadow-lg hover:shadow-xl transition-all place-self-center"
            >
            <img src={github} alt="github" className='text-white w-5'/>
            </motion.button>
          </ul>
        </motion.div>
      )}
      
    </div>
  );
}

export default Menu;