import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'shakshithakur410@gmail.com',
      link: 'mailto:shakshithakur410@gmail.com',
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/thakursakshi410',
      link: 'https://www.linkedin.com/in/thakursakshi410/',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'github.com/SakshiThakur410',
      link: 'https://github.com/SakshiThakur410',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+91 72599 63627',
      link: 'tel:+917259963627',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Get In Touch
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mb-8"
            >
              <p className="text-center text-lg mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your visions. Feel free to reach out!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-4 bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-all"
                  >
                    <div className="text-3xl text-blue-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center gap-6"
            >
              <a
                href="https://www.linkedin.com/in/thakursakshi410/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all transform hover:scale-110"
              >
                <FaLinkedin className="text-3xl" />
              </a>
              <a
                href="https://github.com/SakshiThakur410"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all transform hover:scale-110"
              >
                <FaGithub className="text-3xl" />
              </a>
              <a
                href="mailto:shakshithakur410@gmail.com"
                className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all transform hover:scale-110"
              >
                <FaEnvelope className="text-3xl" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center mt-16 pt-8 border-t border-white/20"
      >
        <p className="text-gray-300">
          © {new Date().getFullYear()} Sakshi Thakur. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
