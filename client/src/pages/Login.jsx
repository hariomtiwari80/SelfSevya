import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FiMail,
  FiLock,
  FiUser,
  FiArrowRight,
} from "react-icons/fi";

const Login = () => {

  const { backendUrl, setToken, token } =
    useContext(AppContext);

  const [mode, setMode] = useState("login");

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const endpoint =
        mode === "signup"
          ? "/register"
          : "/login";

      const payload =
        mode === "signup"
          ? form
          : {
              email: form.email,
              password: form.password,
            };

      const { data } = await axios.post(
        `${backendUrl}/api/user${endpoint}`,
        payload
      );

      if (data.success) {

        localStorage.setItem("token", data.token);

        setToken(data.token);

        toast.success(
          mode === "signup"
            ? "Account Created"
            : "Login Successful"
        );

        navigate("/");

      } else {

        toast.error(data.message);
      }

    } catch (error) {

      toast.error(error.message);

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {

    if (token) {
      navigate("/");
    }

  }, [token]);

  return (

    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#f8fbff] via-white to-[#eef6ff] flex items-center justify-center px-3 py-3">

      <div className="absolute top-[-120px] right-[-120px] w-[280px] h-[280px] rounded-full bg-sky-200/30 blur-3xl" />

      <div className="absolute bottom-[-120px] left-[-120px] w-[280px] h-[280px] rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative w-full max-w-5xl min-h-[92vh]">

        <div className="absolute -inset-1 bg-gradient-to-r from-sky-200/30 via-cyan-200/30 to-blue-200/30 rounded-[34px] blur-2xl" />

        <div className="relative overflow-hidden rounded-[30px] border border-white/40 bg-white/90 backdrop-blur-2xl shadow-2xl min-h-[92vh]">

          <div className="grid lg:grid-cols-2 min-h-[92vh]">

            <div className="hidden lg:flex flex-col justify-center bg-[#0c4a6e] px-10 py-10 text-white relative overflow-hidden">

              <div className="absolute top-[-100px] right-[-100px] w-[240px] h-[240px] rounded-full bg-cyan-300/10 blur-3xl" />

              <div className="absolute bottom-[-100px] left-[-100px] w-[240px] h-[240px] rounded-full bg-white/10 blur-3xl" />

              <div className="relative z-10">

                <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl">

                  <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />

                  <p className="text-xs font-semibold">
                    Smart Healthcare Platform
                  </p>
                </div>

                <h1 className="mt-7 text-4xl xl:text-5xl leading-[60px] font-black">

                  Your Health,
                  <span className="block text-cyan-300">
                    One Click Away
                  </span>
                </h1>

                <p className="mt-6 max-w-md text-base leading-8 text-slate-200">

                  Book appointments, connect with trusted
                  doctors, manage records and experience
                  premium digital healthcare with SelfSevya.
                </p>

                <div className="mt-10 flex items-center gap-7">

                  <div>
                    <h2 className="text-3xl font-black">
                      10K+
                    </h2>

                    <p className="mt-1 text-sm text-slate-300">
                      Active Patients
                    </p>
                  </div>

                  <div className="w-[1px] h-12 bg-white/20" />

                  <div>
                    <h2 className="text-3xl font-black">
                      250+
                    </h2>

                    <p className="mt-1 text-sm text-slate-300">
                      Expert Doctors
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center px-5 py-8 sm:px-8 lg:px-12 bg-white overflow-y-auto">

              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
              >

                <div className="text-center">

                  <div className="inline-flex items-center gap-2 rounded-full bg-[#0c4a6e]/10 px-4 py-2">

                    <span className="h-2 w-2 rounded-full bg-[#0c4a6e]" />

                    <p className="text-xs font-semibold text-[#0c4a6e]">
                      Secure Authentication
                    </p>
                  </div>

                  <h2 className="mt-5 text-4xl sm:text-[44px] font-black text-slate-900">

                    {mode === "signup"
                      ? "Create Account"
                      : "Welcome Back"}
                  </h2>

                  <p className="mt-3 text-slate-500 leading-7 text-sm">

                    {mode === "signup"
                      ? "Create your account and connect with expert doctors instantly."
                      : "Login and continue your healthcare journey with SelfSevya."}
                  </p>
                </div>

                <div className="mt-7 space-y-4">

                  {mode === "signup" && (
                    <FloatingInput
                      icon={<FiUser />}
                      label="Full Name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          name: e.target.value,
                        })
                      }
                    />
                  )}

                  <FloatingInput
                    icon={<FiMail />}
                    label="Email Address"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                  />

                  <FloatingInput
                    icon={<FiLock />}
                    label="Password"
                    type="password"
                    value={form.password}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        password: e.target.value,
                      })
                    }
                  />

                  <button
                    disabled={loading}
                    className="group flex h-[54px] w-full items-center justify-center gap-3 rounded-2xl bg-[#0c4a6e] text-white font-semibold shadow-xl transition-all duration-300 hover:bg-[#09364f]"
                  >

                    {loading
                      ? "Please wait..."
                      : mode === "signup"
                      ? "Create Account"
                      : "Login"}

                    {!loading && (
                      <FiArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
                    )}
                  </button>
                </div>

                <div className="mt-6 text-center">

                  <p className="text-sm text-slate-500">

                    {mode === "signup"
                      ? "Already have an account?"
                      : "New to SelfSevya?"}

                    <button
                      type="button"
                      onClick={() =>
                        setMode(
                          mode === "signup"
                            ? "login"
                            : "signup"
                        )
                      }
                      className="ml-2 font-bold text-[#0c4a6e]"
                    >

                      {mode === "signup"
                        ? "Login"
                        : "Create Account"}
                    </button>
                  </p>
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

const FloatingInput = ({
  icon,
  label,
  type = "text",
  value,
  onChange,
}) => {

  return (

    <div className="relative">

      <div className="relative flex items-center overflow-hidden rounded-2xl border border-slate-200 bg-white px-4 h-[58px] focus-within:border-[#0c4a6e] transition-all duration-300">

        <span className="text-slate-400 text-lg flex-shrink-0">

          {icon}
        </span>

        <input
          type={type}
          value={value}
          onChange={onChange}
          required
          autoComplete="off"
          placeholder={label}
          className="
            w-full
            bg-transparent
            px-4
            text-slate-800
            outline-none
            border-none
            shadow-none
            ring-0
            focus:ring-0
            focus:outline-none
            placeholder:text-slate-400
          "
        />
      </div>
    </div>
  );
};