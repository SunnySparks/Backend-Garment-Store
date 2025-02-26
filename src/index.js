const cors = require("cors");
const express = require("express");
const connectDB = require("./config/database");
const { port } = require("./config/environment");
const clientRoutes = require("./routes/clientRoutes");

const app = express();

// Configuración correcta de CORS antes de cualquier middleware
app.use(
  cors({
    origin: "https://frontend-garment-store-eight.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.options("*", cors()); // Maneja preflight requests

app.get("/api/rest", (req, res) => {
  res.json({ message: "CORS working!!!" });
});

connectDB();

app.get("/", (req, res) => {
  res.send("Bienvenido a la API tienda de ropa");
});

app.use("/api/clients", clientRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
