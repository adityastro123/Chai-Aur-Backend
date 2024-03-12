import dotenv from "dotenv";
import main from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

main()
  .then(() => {
    app.on("error", (err) => {
      console.log("ERROR", err);
      throw err;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is connected on port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!", err);
  });
