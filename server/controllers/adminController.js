import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointmentModel.js";
import doctorModel from "../models/doctorModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import { v2 as cloudinary } from "cloudinary";
import userModel from "../models/userModel.js";


const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(
        email + password,
        process.env.JWT_SECRET
      );
      return res.json({ success: true, token });
    }

    res.json({ success: false, message: "Invalid credentials" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};


const appointmentsAdmin = async (req, res) => {
  try {
    const appointments = await appointmentModel.find({});
    res.json({ success: true, appointments });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};


const appointmentCancel = async (req, res) => {
  try {
    const { appointmentId } = req.body;

    await appointmentModel.findByIdAndUpdate(
      appointmentId,
      { cancelled: true }
    );

    res.json({ success: true, message: "Appointment Cancelled" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};


const addDoctor = async (req, res) => {
  try {
    let {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address
    } = req.body;

    const imageFile = req.file;

    if (typeof address === "string") {
      address = JSON.parse(address);
    }

    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address?.line1 ||
      !address?.city
    ) {
      return res.json({
        success: false,
        message: "Missing required details"
      });
    }

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Invalid email"
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters"
      });
    }

    const exists = await doctorModel.findOne({ email });
    if (exists) {
      return res.json({
        success: false,
        message: "Doctor already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let imageUrl = "/default-doctor.svg";

    if (imageFile) {
      const upload = await cloudinary.uploader.upload(
        imageFile.path,
        { folder: "doctors" }
      );
      imageUrl = upload.secure_url;
    }

    const doctor = new doctorModel({
      name,
      email,
      password: hashedPassword,
      image: imageUrl,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: {
        line1: address.line1,
        line2: address.line2 || "",
        city: address.city
      },
      date: Date.now()
    });

    await doctor.save();

    res.json({
      success: true,
      message: "Doctor Added"
    });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: error.message
    });
  }
};


const allDoctors = async (req, res) => {
  try {
    const doctors = await doctorModel
      .find({})
      .select("-password");

    res.json({ success: true, doctors });
  } catch (error) {
    console.error(error);
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


const adminDashboard = async (req, res) => {
  try {
    const doctors = await doctorModel.find({});
    const users = await userModel.find({});
    const appointments = await appointmentModel.find({});

    const dashData = {
      doctors: doctors.length,
      appointments: appointments.length,
      patients: users.length,
      latestAppointments: appointments.reverse()
    };

    res.json({ success: true, dashData });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};


export {
  loginAdmin,
  appointmentsAdmin,
  appointmentCancel,
  addDoctor,
  allDoctors,
  deleteDoctor,     
  adminDashboard
};
