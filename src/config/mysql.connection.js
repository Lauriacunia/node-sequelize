import Sequelize from "sequelize";
import CONFIG from "./config.js";
const { DB_HOST, DB_NAME, DB_USER, DB_PASS } = CONFIG;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "mysql",
});

export const conectMySQL = async () => {
  try {
    await sequelize.authenticate();
    console.log("💾 Connection has been established successfully.");
    await sequelize.sync({ alter: true }); // Opciones: alter, force, etc.
    console.log("🔄 Models have been synchronized with the database.");
  } catch (error) {
    console.error("💥 Unable to connect to the database:", error);
  }
};
