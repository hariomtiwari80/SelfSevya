import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { AppContext } from "../context/AppContext";
import doctordef from "../assets/doctordef.png";

const Doctors = () => {

  const { speciality } = useParams();

  const { doctors } = useContext(AppContext);

  const [filteredDocs, setFilteredDocs] = useState([]);

  const navigate = useNavigate();

  const specialities = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  useEffect(() => {

    setFilteredDocs(
      speciality
        ? doctors.filter((doc) => doc.speciality === speciality)
        : doctors
    );

  }, [speciality, doctors]);

  const getIcon = (spec) => {

    const icons = {
      "General physician": "👨‍⚕️",
      Gynecologist: "👩‍⚕️",
      Dermatologist: "💆‍♂️",
      Pediatricians: "🧒",
      Neurologist: "🧠",
      Gastroenterologist: "🩺",
    };

    return icons[spec] || "🩺";
  };

  return (

    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b">


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-16">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#0c4a6e]/10 border border-[#0c4a6e]/10 backdrop-blur-xl">

            <span className="w-2.5 h-2.5 rounded-full bg-[#0c4a6e] animate-pulse" />

            <p className="text-sm font-semibold text-[#0c4a6e]">
              Trusted Medical Specialists
            </p>
          </div>

          <p className="mt-5 max-w-2xl mx-auto text-slate-500 text-base sm:text-lg leading-8">

            Connect with highly experienced specialists and
            book appointments instantly with a premium
            healthcare experience.
          </p>
        </motion.div>

        <div className="mt-14 flex flex-col lg:flex-row gap-8 items-start">

          <div className="w-full lg:w-[280px] lg:sticky lg:top-28">

            <div className="flex lg:flex-col gap-3 overflow-x-auto no-scrollbar pb-2">

              <button
                onClick={() => navigate("/doctors")}
                className={`flex-shrink-0 min-w-fit h-[52px] px-5 rounded-2xl flex items-center gap-3 transition-all duration-300 font-medium ${
                  !speciality
                    ? "bg-[#0c4a6e] text-white shadow-xl"
                    : "bg-white border border-slate-200 text-slate-700 hover:border-[#0c4a6e]"
                }`}
              >

                👨‍⚕️ All
              </button>

              {specialities.map((spec, index) => (

                <button
                  key={index}
                  onClick={() => navigate(`/doctors/${spec}`)}
                  className={`flex-shrink-0 min-w-fit h-[52px] px-5 rounded-2xl flex items-center gap-3 transition-all duration-300 font-medium ${
                    speciality === spec
                      ? "bg-[#0c4a6e] text-white shadow-xl"
                      : "bg-white border border-slate-200 text-slate-700 hover:border-[#0c4a6e]"
                  }`}
                >

                  <span>{getIcon(spec)}</span>

                  {spec}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full">

            {filteredDocs.length > 0 ? (

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">

                {filteredDocs.map((doc, index) => (

                  <motion.div
                    key={doc._id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -8,
                    }}
                    onClick={() =>
                      navigate(`/appointment/${doc._id}`)
                    }
                    className="group relative rounded-[30px] overflow-hidden border border-white/40 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  >

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-sky-100/40 via-transparent to-cyan-100/40 transition-all duration-500" />

                    <div className="relative h-[280px] overflow-hidden bg-slate-100">

                      <img
                        src={doc.image || doctordef}
                        alt={doc.name}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = doctordef;
                        }}
                        className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                      <div className="absolute top-4 right-4">

                        <div className="bg-white/90 backdrop-blur-xl px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">

                          <span
                            className={`w-2.5 h-2.5 rounded-full ${
                              doc.available
                                ? "bg-green-500"
                                : "bg-slate-400"
                            }`}
                          />

                          <p className="text-xs font-bold text-slate-700">
                            {doc.available
                              ? "Available"
                              : "Unavailable"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">

                      <h2 className="text-2xl font-black text-slate-900">
                        {doc.name}
                      </h2>

                      <p className="mt-2 text-[#0c4a6e] font-bold">
                        {doc.speciality}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-3">

                        <div className="px-4 py-2 rounded-full bg-slate-100 text-sm font-medium text-slate-700">
                          {doc.degree || "MBBS"}
                        </div>

                        <div className="px-4 py-2 rounded-full bg-[#0c4a6e]/10 text-sm font-medium text-[#0c4a6e]">
                          {doc.experience || 1}+ Years
                        </div>
                      </div>

                      <div className="mt-7 flex items-center justify-between gap-4">

                        <button className="flex-1 h-[50px] rounded-2xl bg-[#0c4a6e] hover:bg-[#09364f] text-white font-semibold transition-all duration-300 shadow-lg">

                          Book Appointment
                        </button>

                        <div className="w-12 h-12 rounded-2xl border border-slate-200 flex items-center justify-center text-[#0c4a6e] group-hover:bg-[#0c4a6e] group-hover:text-white transition-all duration-300">

                          →
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            ) : (

              <div className="bg-white/80 backdrop-blur-2xl border border-slate-200 rounded-[32px] p-10 md:p-14 text-center shadow-xl">

                <div className="w-24 h-24 rounded-full bg-[#0c4a6e]/10 flex items-center justify-center mx-auto">

                  <span className="text-4xl">
                    👨‍⚕️
                  </span>
                </div>

                <h2 className="mt-6 text-4xl font-black text-slate-900">
                  No Doctors Found
                </h2>

                <p className="mt-5 max-w-lg mx-auto text-slate-500 leading-8">
                  We could not find doctors in this speciality.
                  Please explore another category or try again later.
                </p>

                <button
                  onClick={() => navigate("/doctors")}
                  className="mt-8 h-[54px] px-8 rounded-2xl bg-[#0c4a6e] hover:bg-[#09364f] text-white font-semibold transition-all duration-300"
                >

                  View All Doctors
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;