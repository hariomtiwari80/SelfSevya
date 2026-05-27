import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import crypto from "crypto";

import userModel from "../models/userModel.js";
import doctorModel from "../models/doctorModel.js";
import appointmentModel from "../models/appointmentModel.js";

import { v2 as cloudinary } from "cloudinary";


const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.json({ success: false, message: "Missing Details" });

    if (!validator.isEmail(email))
      return res.json({ success: false, message: "Invalid Email" });

    if (password.length < 8)
      return res.json({ success: false, message: "Weak Password" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ success: true, token });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const deleteDoctor = async (req, res) => {
  try {
    const { doctorId } = req.body;

    if (!doctorId) {
      return res.json({
        success: false,
        message: "Doctor ID is required"
      });
    }

    const doctor = await doctorModel.findById(doctorId);
    if (!doctor) {
      return res.json({
        success: false,
        message: "Doctor not found"
      });
    }

    await doctorModel.findByIdAndDelete(doctorId);

    res.json({
      success: true,
      message: "Doctor deleted successfully"
    });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: error.message
    });
  }
};


const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user)
      return res.json({ success: false, message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.json({ success: false, message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ success: true, token });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const getProfile = async (req, res) => {
  const { userId } = req.body;
  const userData = await userModel.findById(userId).select("-password");
  res.json({ success: true, userData });
};

const updateProfile = async (req, res) => {
  try {
    const { userId, name, phone, address, dob, gender } = req.body;

    await userModel.findByIdAndUpdate(userId, {
      name,
      phone,
      address: JSON.parse(address),
      dob,
      gender,
    });

    if (req.file) {
      const upload = await cloudinary.uploader.upload(req.file.path);
      await userModel.findByIdAndUpdate(userId, {
        image: upload.secure_url,
      });
    }

    res.json({ success: true, message: "Profile Updated" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


const bookAppointment = async (req, res) => {
  try {
    const { userId, docId, slotDate, slotTime } = req.body;

    const docData = await doctorModel.findById(docId).select("-password");
    if (!docData.available)
      return res.json({ success: false, message: "Doctor Not Available" });

    const slots = docData.slots_booked || {};
    slots[slotDate] = slots[slotDate] || [];

    if (slots[slotDate].includes(slotTime))
      return res.json({ success: false, message: "Slot Not Available" });

    slots[slotDate].push(slotTime);

    const appointment = await appointmentModel.create({
      userId,
      docId,
      userData: await userModel.findById(userId).select("-password"),
      docData,
      amount: docData.fees,
      slotDate,
      slotTime,
      date: Date.now(),
    });

    await doctorModel.findByIdAndUpdate(docId, {
      slots_booked: slots,
    });

    res.json({ success: true, message: "Appointment Booked", appointment });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const listAppointment = async (req, res) => {
  const { userId } = req.body;
  const appointments = await appointmentModel.find({ userId });
  res.json({ success: true, appointments });
};

const cancelAppointment = async (req, res) => {
  const { appointmentId } = req.body;
  await appointmentModel.findByIdAndUpdate(appointmentId, {
    cancelled: true,
  });
  res.json({ success: true, message: "Appointment Cancelled" });
};



export {
  registerUser,
  loginUser,
  deleteDoctor,
  getProfile,
  updateProfile,
  bookAppointment,
  listAppointment,
  cancelAppointment,
};
