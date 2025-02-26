const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const { port } = require("./config/environment");
const clientRoutes = require("./routes/clientRoutes");

const app = express();

app.use(
  cors({
    origin: "https://frontend-garment-store-eight.vercel.app",
    credentials: true,
    methods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.get("/api/rest", () => {
  res.json({ message: "CORS working!!!" });
});
app.use(express.json());

connectDB();

app.get("/", () => {
  res.send("Bienvenido a la API tienda de ropa");
});

app.use("/api/clients", clientRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
