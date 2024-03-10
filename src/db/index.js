import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function main() {
  try {
    const res = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(`\nConnection successful on ${res.connection.host}`);
  } catch (error) {
    console.log("MONGO DB connection FAILED", error);
    process.exit(1);
  }
}

export default main;
