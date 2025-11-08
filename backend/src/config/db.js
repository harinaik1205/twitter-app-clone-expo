import mongoose from "mongoose";
import { ENV } from "./env.js";

export const conncetDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    console.log("Connected to DB successfully ✅");
  } catch (error) {
    console.log("Error while connectig to database");
    process.exit(1);
  }
};
