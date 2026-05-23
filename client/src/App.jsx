import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from "./components/ScrollToTop";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Doctors from './pages/Doctors'
import Appointment from './pages/Appointment'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const location = useLocation()

  const hideLayoutRoutes = ['/login', '/register']

  const hideLayout = hideLayoutRoutes.includes(location.pathname)

  return (
    <>
    <ScrollToTop />
      {!hideLayout && <Navbar />}

      <ToastContainer position="top-right" autoClose={5000} theme="light" />

      <div className="min-h-screen flex flex-col">
        <main className={`${hideLayout ? '' : 'mx-[5%] py-4'} flex-grow`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Login />} />
            <Route path="/my-appointments" element={<MyAppointments />} />
            <Route path="/appointment/:docId" element={<Appointment />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:speciality" element={<Doctors />} />
          </Routes>
        </main>

        {!hideLayout && <Footer />}
      </div>
    </>
  )
}

export default App
