import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 md:px-12 lg:px-20 pt-6 md:pt-14 pb-14">

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2 text-center lg:text-left"
        >

          <p className="text-[#0c4a6e] font-semibold tracking-[3px] uppercase text-xs sm:text-sm mb-4">
            Modern Healthcare Platform
          </p>

          <h1 className="text-[42px] leading-[3.2rem] sm:text-6xl md:text-[72px] md:leading-[5.7rem] font-bold tracking-tight text-slate-900">

            Smart Healthcare

            <span className="block text-[#0c4a6e]">
              For Every Patient
            </span>
          </h1>

          <p className="mt-6 text-slate-500 text-[15px] sm:text-base md:text-lg leading-7 md:leading-8 max-w-2xl mx-auto lg:mx-0">
            Book appointments, connect with expert doctors,
            and access quality healthcare services online
            with a seamless and trusted experience.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 w-full"
          >

            <div className="flex items-center h-[60px] w-full max-w-xl mx-auto lg:mx-0 border border-slate-200 rounded-2xl overflow-hidden">

              <input
                type="text"
                placeholder="Search doctors or specialties"
                className="w-full h-full px-5 outline-none text-sm bg-transparent"
              />

              <button className="mr-1 px-6 sm:px-7 h-[50px] rounded-xl bg-[#0c4a6e] hover:bg-[#09364f] transition-all duration-300 text-white font-medium">
                Explore
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mt-10"
          >

            <div className="flex items-center -space-x-3">

              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt=""
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover"
              />

              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt=""
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover"
              />

              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200"
                alt=""
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover"
              />

              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0c4a6e] text-white flex items-center justify-center border-2 border-white text-sm font-semibold">
                +2k
              </div>
            </div>

            <div>

              <div className="flex items-center justify-center lg:justify-start gap-1">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <svg
                      key={i}
                      width="15"
                      height="15"
                      viewBox="0 0 13 12"
                      fill="none"
                    >
                      <path
                        d="M5.85536 0.463527C6.00504 0.00287118 6.65674 0.00287028 6.80642 0.463526L7.82681 3.60397C7.89375 3.80998 8.08572 3.94946 8.30234 3.94946H11.6044C12.0888 3.94946 12.2901 4.56926 11.8983 4.85397L9.22687 6.79486C9.05162 6.92219 8.97829 7.14787 9.04523 7.35388L10.0656 10.4943C10.2153 10.955 9.68806 11.338 9.2962 11.0533L6.62478 9.11244C6.44954 8.98512 6.21224 8.98512 6.037 9.11244L3.36558 11.0533C2.97372 11.338 2.44648 10.955 2.59616 10.4943L3.61655 7.35388C3.68349 7.14787 3.61016 6.92219 3.43491 6.79486L0.763497 4.85397C0.37164 4.56927 0.573027 3.94946 1.05739 3.94946H4.35944C4.57606 3.94946 4.76803 3.80998 4.83497 3.60397L5.85536 0.463527Z"
                        fill="#FF8F20"
                      />
                    </svg>
                  ))}
              </div>

              <p className="text-sm text-slate-500 mt-2">
                Trusted by 2,000+ patients
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex justify-center"
        >

          <div className="relative w-full flex justify-center">

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="relative"
            >

              <img
                src={assets.header_img}
                alt="Healthcare"
                className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] rounded-[32px] object-cover"
              />

              <div className="absolute -bottom-4 left-4 sm:left-6 bg-white border border-slate-200 rounded-3xl px-5 py-4">

                <h3 className="text-[#0c4a6e] font-bold text-xl">
                  500+
                </h3>

                <p className="text-sm text-slate-500">
                  Expert Doctors
                </p>
              </div>

              <div className="absolute top-4 right-0 sm:-right-5 bg-white border border-slate-200 rounded-3xl px-5 py-4 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <div className="w-11 h-11 rounded-2xl bg-[#0c4a6e] flex items-center justify-center text-white font-bold text-lg">
                    24
                  </div>

                  <div>
                    <h3 className="text-[#0c4a6e] font-bold text-lg leading-none">
                      24/7
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                      Live Support
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;