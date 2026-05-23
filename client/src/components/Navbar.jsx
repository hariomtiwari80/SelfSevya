import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  FaUser,
  FaSignOutAlt,
  FaUserMd,
  FaExternalLinkAlt,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaUserNurse,
  FaInfoCircle,
  FaHandsHelping,
  FaEnvelope,
  FaCalendarAlt,
  FaHome,
} from "react-icons/fa";

import { HiOutlineLogin } from "react-icons/hi";

import { AppContext } from "../context/AppContext.jsx";
import { assets } from "../assets/assets.js";

const navLinks = [
  { path: "/", label: "Home", icon: FaHome },
  { path: "/doctors", label: "Doctors", icon: FaUserNurse },
  { path: "/about", label: "About", icon: FaInfoCircle },
  { path: "/contact", label: "Contact", icon: FaEnvelope },
];


const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const userMenu = [
    {
      path: "/my-profile",
      label: "My Profile",
      icon: FaUser,
    },
    {
      path: "/my-appointments",
      label: "My Appointments",
      icon: FaCalendarAlt,
    },
    {
      label: "Logout",
      icon: FaSignOutAlt,
      action: logout,
      isLogout: true,
    },
  ];

  const UserDropdown = () => (
    <div className="absolute top-full right-0 pt-3 text-base font-medium z-30">
      <div className="min-w-52 bg-white rounded-3xl shadow-2xl flex flex-col p-3 gap-2 border border-slate-100">

        {userMenu.map(
          ({ label, icon: Icon, path, action, isLogout }) => (
            <button
              key={label}
              onClick={() => {
                action ? action() : navigate(path);
                setShowDropdown(false);
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 text-left ${
                isLogout
                  ? "text-red-500 hover:bg-red-50"
                  : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <Icon
                className={`${
                  isLogout ? "text-red-500" : "text-blue-500"
                }`}
              />

              {label}
            </button>
          )
        )}
      </div>
    </div>
  );

  return (
    <>
      <header className="fixed top-4 left-0 w-full z-50 px-4">
        <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-xl border border-slate-200 rounded-full shadow-lg px-6 py-3 flex items-center justify-between">
          <div
            className="flex items-center cursor-pointer select-none shrink-0"
            onClick={() => navigate("/")}
          >
            <img
              src={assets.logo}
              alt="SelfSevya Logo"
              className="h-10 w-auto mr-2 object-contain"
              draggable="false"
            />

            <span className="text-2xl font-bold text-blue-800 tracking-tight">
              SelfSevya
            </span>
          </div>
          <nav
            className={`
              max-md:fixed
              max-md:top-0
              max-md:left-0
              max-md:h-screen
              max-md:w-full
              max-md:bg-white/95
              max-md:backdrop-blur-xl
              max-md:flex-col
              max-md:justify-center
              max-md:items-center
              flex md:flex-row items-center gap-8
              transition-all duration-300
              ${
                showMenu
                  ? "max-md:translate-x-0"
                  : "max-md:-translate-x-full"
              }
              md:translate-x-0
            `}
          >

            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `
                  relative
                  inline-flex
                  items-center
                  text-[15px]
                  font-semibold
                  transition-all
                  duration-300
                  no-underline
                  after:content-['']
                  after:absolute
                  after:left-0
                  after:-bottom-[6px]
                  after:h-[2px]
                  after:rounded-full
                  after:bg-blue-600
                  after:transition-all
                  after:duration-300
                  ${
                    isActive
                      ? "text-blue-600 after:w-full"
                      : "text-slate-700 after:w-0 hover:text-blue-600 hover:after:w-full"
                  }
                  `
                }
              >
                {label}
              </NavLink>
            ))}

            <button
              className="md:hidden absolute top-6 right-6 text-slate-700"
              onClick={() => setShowMenu(false)}
            >
              <FaTimes size={26} />
            </button>

            {!token && (
              <div className="md:hidden flex flex-col gap-4 mt-10 w-[80%]">
                <button
                  onClick={() => navigate("/login")}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-[#0c4a6e] hover:bg-[#09364f] px-6 py-4 text-white font-medium transition-all shadow-lg"
                >
                  <HiOutlineLogin />
                  Login
                </button>
              </div>
            )}
          </nav>

          <div className="flex items-center gap-4">

            {token && userData ? (
              <div
                className="relative flex items-center gap-2 cursor-pointer"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <img
                  src={userData.image || assets.default_profile}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border-2 border-blue-100"
                />

                <FaChevronDown className="text-slate-600 text-sm" />

                {showDropdown && <UserDropdown />}
              </div>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-all text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg"
                >
                  <HiOutlineLogin />

                  Login
                </button>
              </>
            )}

            <button
              className="md:hidden text-slate-700"
              onClick={() => setShowMenu(true)}
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </header>
      <div className="h-[110px]" />
    </>
  );
};

export default Navbar;