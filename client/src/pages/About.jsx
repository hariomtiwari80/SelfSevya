import React from "react";
import { motion } from "framer-motion";
import {
  FaCalendarCheck,
  FaComments,
  FaUserMd,
  FaHospitalUser,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCalendarCheck />,
    title: "Appointment Booking",
    desc: "Patients can easily search doctors, check availability, and book appointments online within seconds.",
  },
  {
    icon: <FaComments />,
    title: "Patient & Doctor Communication",
    desc: "Patients can upload reports, prescriptions, and health details while doctors can respond directly online.",
  },
  {
    icon: <FaUserMd />,
    title: "Expert Doctors",
    desc: "Connect with experienced and trusted healthcare professionals from different specialties.",
  },
  {
    icon: <FaHospitalUser />,
    title: "Digital Healthcare",
    desc: "Everything is managed online including appointments, consultations, and patient records.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Platform",
    desc: "Patient information and uploaded documents are protected with secure access and privacy.",
  },
  {
    icon: <FaClock />,
    title: "24/7 Availability",
    desc: "Patients can access healthcare services and communicate with doctors anytime from anywhere.",
  },
];

const About = () => {
  return (
    <section className="bg-white min-h-screen px-5 md:px-12 lg:px-20 py-6 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="text-[#0c4a6e] uppercase tracking-[4px] text-sm font-semibold">
            About SelfSevya
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
            Smart Healthcare
            <span className="block text-[#0c4a6e]">
              For Modern Patients
            </span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-slate-500 text-base md:text-lg leading-8">
            SelfSevya is a modern healthcare platform designed
            to simplify the connection between patients and doctors.
            The platform allows users to book appointments,
            communicate digitally, upload medical reports,
            and receive healthcare support online in a seamless way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="border border-slate-200 rounded-3xl p-7 transition-all duration-300"
            >

              <div className="w-14 h-14 rounded-2xl bg-[#0c4a6e] text-white flex items-center justify-center text-2xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-500 leading-7 text-[15px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <p className="text-[#0c4a6e] uppercase tracking-[4px] text-sm font-semibold">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Healthcare Made
              <span className="block text-[#0c4a6e]">
                Easy & Accessible
              </span>
            </h2>

            <p className="mt-6 text-slate-500 leading-8 text-base md:text-lg">
              SelfSevya focuses on making healthcare more
              accessible through digital solutions.
              Patients no longer need to wait in long queues
              or travel unnecessarily for basic consultations.
            </p>

            <p className="mt-5 text-slate-500 leading-8 text-base md:text-lg">
              Through online communication, patients can
              upload medical reports, prescriptions,
              and health updates directly to doctors.
              Doctors can review the uploaded information
              and provide responses or consultation online.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >

            <div className="border border-slate-200 rounded-3xl p-7 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0c4a6e]">
                500+
              </h2>

              <p className="mt-3 text-slate-500">
                Expert Doctors
              </p>
            </div>

            <div className="border border-slate-200 rounded-3xl p-7 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0c4a6e]">
                2K+
              </h2>

              <p className="mt-3 text-slate-500">
                Happy Patients
              </p>
            </div>

            <div className="border border-slate-200 rounded-3xl p-7 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0c4a6e]">
                24/7
              </h2>

              <p className="mt-3 text-slate-500">
                Online Support
              </p>
            </div>

            <div className="border border-slate-200 rounded-3xl p-7 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0c4a6e]">
                100%
              </h2>

              <p className="mt-3 text-slate-500">
                Secure Platform
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;