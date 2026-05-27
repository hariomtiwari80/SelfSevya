import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const contactCards = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone Number",
    info: "+91 12345 67890",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Address",
    info: "support@selfsevya.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    info: "India",
  },
  {
    icon: <FaClock />,
    title: "24/7 Support",
    info: "Always available for patients",
  },
];

const Contact = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 md:px-12 lg:px-20 py-14 md:py-6">

      <div className="absolute top-0 left-0 w-72 h-72 bg-[#0c4a6e]/5 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#0c4a6e]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="text-[#0c4a6e] uppercase tracking-[4px] text-xs sm:text-sm font-semibold">
            Contact SelfSevya
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
            We’re Here To
            <span className="block text-[#0c4a6e]">
              Help You Anytime
            </span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-slate-500 text-[15px] sm:text-base md:text-lg leading-7 md:leading-8 px-2">
            Connect with our healthcare platform for appointments,
            patient-doctor communication, medical support,
            and online healthcare services with a seamless experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-14">

          {contactCards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="rounded-[28px] border border-slate-200 bg-white p-7"
            >

              <div className="w-14 h-14 rounded-2xl bg-[#0c4a6e] text-white flex items-center justify-center text-2xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-500 leading-7 text-[15px]">
                {item.info}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >

            <p className="text-[#0c4a6e] uppercase tracking-[4px] text-xs sm:text-sm font-semibold">
              Let’s Talk
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              Better Communication
              <span className="block text-[#0c4a6e]">
                Better Healthcare
              </span>
            </h2>

            <p className="mt-6 text-slate-500 text-[15px] sm:text-base md:text-lg leading-7 md:leading-8">
              SelfSevya allows patients to communicate directly
              with doctors through a secure online platform.
              Patients can upload prescriptions, reports,
              and medical details while doctors can review
              and respond digitally.
            </p>

            <p className="mt-5 text-slate-500 text-[15px] sm:text-base md:text-lg leading-7 md:leading-8">
              Our goal is to make healthcare accessible,
              modern, and convenient for everyone through
              technology-driven medical support.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">

              <div className="px-6 py-4 rounded-2xl border border-slate-200">
                <h3 className="text-3xl font-bold text-[#0c4a6e]">
                  500+
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Expert Doctors
                </p>
              </div>

              <div className="px-6 py-4 rounded-2xl border border-slate-200">
                <h3 className="text-3xl font-bold text-[#0c4a6e]">
                  2K+
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Happy Patients
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-slate-200 bg-white p-6 sm:p-8 md:p-10"
          >

            <div className="grid gap-5">

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full h-[58px] px-5 rounded-2xl border border-slate-200 outline-none focus:border-[#0c4a6e] transition-all"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2 w-full h-[58px] px-5 rounded-2xl border border-slate-200 outline-none focus:border-[#0c4a6e] transition-all"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="mt-2 w-full h-[58px] px-5 rounded-2xl border border-slate-200 outline-none focus:border-[#0c4a6e] transition-all"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="mt-2 w-full p-5 rounded-2xl border border-slate-200 outline-none resize-none focus:border-[#0c4a6e] transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full h-[58px] rounded-2xl bg-[#0c4a6e] hover:bg-[#09364f] transition-all duration-300 text-white font-medium text-base"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;