import dotenv from "dotenv";
import main from "./db/index.js";

dotenv.config({
  path: "./env",
});

main();
