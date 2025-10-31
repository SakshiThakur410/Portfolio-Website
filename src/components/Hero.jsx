import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
    >
      {/* Decorative Circles */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-pink-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500 rounded-full blur-2xl opacity-20"></div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <p className="text-pink-400 text-lg mb-2 flex items-center gap-2">
                <span className="text-2xl">👋</span> Hi, I'm
              </p>
              <h1 className="text-6xl md:text-7xl font-bold mb-2">
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Sakshi
                </span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-300">
                Web Developer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-300 text-lg mb-8 leading-relaxed"
            >
              B.Tech in Computer Science | Passionate about creating beautiful and functional web experiences
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4 items-center"
            >
              <button
                onClick={scrollToAbout}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
              >
                Download CV
              </button>
              
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/thakursakshi410/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm rounded-full text-pink-400 hover:bg-pink-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://github.com/SakshiThakur410"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm rounded-full text-pink-400 hover:bg-pink-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative circle behind image */}
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 blur-2xl"></div>
              
              {/* Profile Image Container */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="relative z-10"
              >
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-pink-500/30 shadow-2xl shadow-pink-500/20 bg-gradient-to-br from-pink-400/20 to-purple-600/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-9xl">👩‍💻</div>
                </div>
              </motion.div>
              
              {/* Floating accent circles */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="absolute top-10 -left-10 w-20 h-20 bg-pink-500 rounded-full opacity-30 blur-xl"
              ></motion.div>
              
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="absolute bottom-10 -right-10 w-24 h-24 bg-blue-500 rounded-full opacity-30 blur-xl"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
