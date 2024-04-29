import express from "express";
const app = express();
import Sequelize from "sequelize";
import mysql2 from "mysql2";
import CONFIG from "./config/config.js";
const { PORT, DB_HOST, DB_NAME, DB_USER, DB_PASS } = CONFIG;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "mysql",
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(` <h1>Servidor corriendo en puerto: ${PORT} 💫</h1>`);
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
