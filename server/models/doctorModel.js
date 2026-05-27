import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    line1: { type: String, required: true },
    line2: { type: String, default: "" },
    city:  { type: String, required: true }
  },
  { _id: false }
);

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    speciality: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: String, required: true },
    about: { type: String, required: true },
    available: { type: Boolean, default: true },
    fees: { type: Number, required: true },

    address: addressSchema,

    slots_booked: { type: Object, default: {} },
    date: { type: Number, required: true }
  },
  { minimize: false, timestamps: true }
);

const doctorModel =
  mongoose.models.doctor || mongoose.model("doctor", doctorSchema);

export default doctorModel;
