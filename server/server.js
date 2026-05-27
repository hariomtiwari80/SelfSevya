import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

import userRouter from "./routes/userRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import adminRouter from "./routes/adminRoute.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, ".env"),
});


const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    db: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    uptime: process.uptime(),
  });
});


const startServer = async () => {
  try {
    await connectDB();
    await connectCloudinary();

    app.listen(port, () => {
      console.log(`🚀 Server started on PORT:${port}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err.message);
    process.exit(1);
  }
};

startServer();


process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err.message);
  process.exit(1);
});
