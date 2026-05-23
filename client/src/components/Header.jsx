import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <section className="relative overflow-hidden px-6 md:px-12 lg:px-18 py-8   bg-cover bg-center">

      <div className="absolute top-0 left-0 w-72 h-72  blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72  blur-3xl rounded-full" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-20">

        <div className="lg:w-1/2">

          <h1 className="text-5xl md:text-[58px] md:leading-[4.8rem] font-bold max-w-2xl bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-600 bg-clip-text text-transparent">
            Personalized Healthcare For Modern Patients
          </h1>

          <p className="text-slate-500 text-lg leading-8 mt-5 max-w-xl">
            Experience premium healthcare with trusted doctors,
            priority appointments, and seamless online consultation
            from the comfort of your home.
          </p>

          <div className="flex items-center border border-slate-300 rounded-xl h-[58px] max-w-xl mt-8 bg-white shadow-sm focus-within:border-blue-600 transition-all">

            <input
              type="text"
              placeholder="Search doctors or specialties"
              className="h-full w-full px-5 outline-none rounded-xl text-sm"
            />

            <button className="mr-1 px-7 h-[50px] rounded-lg bg-[#0c4a6e] hover:bg-[#09364f] transition text-white font-medium">
              Explore
            </button>
          </div>

          <p className="text-sm text-slate-500 mt-3">
            Trusted by thousands of patients across India.
          </p>

          <div className="flex items-center mt-10">

            <div className="flex -space-x-3 pr-4">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt=""
                className="w-11 h-11 rounded-full border-2 border-white object-cover"
              />

              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt=""
                className="w-11 h-11 rounded-full border-2 border-white object-cover"
              />

              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200"
                alt=""
                className="w-11 h-11 rounded-full border-2 border-white object-cover"
              />

              <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center border-2 border-white text-sm font-semibold">
                +2k
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <svg
                      key={i}
                      width="14"
                      height="14"
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

              <p className="text-sm text-slate-500 mt-1">
                Trusted by 2,000+ patients
              </p>
            </div>
          </div>
        </div>

        <div className="relative">

          <div className="absolute inset-0 z-[-1] rounded-[40px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 blur-3xl opacity-30" />

          <img
            src={assets.header_img}
            alt="Healthcare"
            className="max-w-md w-full rounded-[40px] shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;