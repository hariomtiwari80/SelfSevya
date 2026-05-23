import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SpecialityMenu = () => {
  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      className="relative overflow-hidden bg-white py-14 sm:py-16 md:py-20"
      id="speciality"
    >
      <div className="absolute top-0 left-0 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] blur-3xl rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6"
      >
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-600 bg-clip-text text-transparent">
            Explore Our <br />

            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-600 bg-clip-text text-transparent">
              Medical Specialties
            </span>
          </h2>

          <p className="mt-5 sm:mt-7 text-base sm:text-lg leading-7 sm:leading-8 text-slate-600 px-2">
            Access expert healthcare services across multiple
            specialties with trusted doctors and personalized care.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 md:gap-8"
        >
          {specialityData.slice(0, 9).map((itemData) => (
            <motion.div
              key={itemData.speciality}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            >
              <Link
                to={`/doctors/${itemData.speciality}`}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-blue-200 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between min-h-[260px] sm:min-h-[300px]"
              >
                <div className="p-5 sm:p-6 md:p-8">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100">
                      <img
                        src={itemData.image}
                        alt={itemData.speciality}
                        className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                      />
                    </div>

                    <svg
                      className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>

                  <h3 className="mt-5 text-2xl sm:text-3xl font-semibold text-slate-900 leading-snug break-words">
                    {itemData.speciality}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-7 sm:leading-8 text-sm sm:text-base">
                    Specialized healthcare services with trusted doctors
                    and modern treatment solutions for better patient care.
                  </p>
                </div>

                <div className="px-5 sm:px-8 py-4 sm:py-5 border-t border-slate-100 bg-slate-50/50">
                  <div className="flex items-center gap-2 text-cyan-600 font-medium text-sm sm:text-base">
                    <span>✓</span>
                    <span>Accepting new patients</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-14 sm:mt-20">
          <Link
            to="/doctors"
            className="inline-flex items-center gap-3 rounded-2xl bg-[#1e6b8f] hover:bg-[#0c4a6e] px-6 sm:px-8 py-3 sm:py-4 text-white text-sm sm:text-base font-medium transition-all duration-300 shadow-xl"
          >
            Explore All Specialties

            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default SpecialityMenu;