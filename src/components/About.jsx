import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-40"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Side - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* Decorative pink circle */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-pink-200 to-purple-300 rounded-full opacity-50 blur-2xl"></div>
                
                {/* Illustration placeholder */}
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="relative z-10"
                >
                  <div className="w-80 h-80 flex items-center justify-center">
                    {/* Simple illustration using emoji/text */}
                    <div className="text-9xl">👩‍💼</div>
                  </div>
                </motion.div>
                
                {/* Small floating circle */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="absolute top-5 right-5 w-16 h-16 bg-pink-300 rounded-full opacity-60"
                ></motion.div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-800"
            >
              <h2 className="text-5xl font-bold mb-8">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  About
                </span>
                <span className="text-gray-700"> Me</span>
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Hi, I'm Sakshi, a passionate Frontend Developer with a strong foundation in computer science and expertise in building modern, responsive web applications. I have extensive experience in React, JavaScript, HTML, CSS, and various frameworks. My goal is to deliver high-quality web development solutions, creating user-friendly interfaces and solving real-world problems through innovative software solutions.
              </p>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-pink-200 shadow-lg"
                >
                  <h3 className="text-2xl font-semibold mb-3 text-pink-600">
                    Education
                  </h3>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    Bachelor of Technology in Computer Science
                  </h4>
                  <p className="text-purple-600 mb-2">Expected Graduation: 2025</p>
                  <p className="text-gray-700 leading-relaxed">
                    Focused on software development, algorithms, data structures, and modern web technologies. Active participant in coding competitions and technical workshops.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
