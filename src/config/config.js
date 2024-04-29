import dotenv from "dotenv";

dotenv.config();

const CONFIG = {
  PORT: process.env.PORT || "8080",
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_USER: process.env.DB_USER || "root",
  DB_PASS: process.env.DB_PASS || "",
  DB_NAME: process.env.DB_NAME || "",
};

export default CONFIG;
