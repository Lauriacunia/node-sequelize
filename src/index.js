import express from "express";
import CONFIG from "./config/config.js";
const { PORT } = CONFIG;

import { conectMySQL } from "./config/mysql.connection.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(` <h1>Servidor corriendo en puerto: ${PORT} 💫</h1>`);
});

// Routes
import indexRoutes from "./routes/index.routes.js";
app.use("/api", indexRoutes);

// MySQL connection
await conectMySQL();

// Server
try {
  app.listen(PORT, () =>
    console.log(
      `🚀 Server started on PORT ${PORT} at ${new Date().toLocaleString()}`
    )
  );
} catch (error) {
  console.log("💥 Error al iniciar servidor", error);
}
