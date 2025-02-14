const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const { port } = require("./config/environment");
const clientRoutes = require("./routes/clientRoutes");

const app = express();

app.use(
  cors({
    origin: [""],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());

connectDB();

app.get("/", () => {
  res.send("Bienvenido a la API tienda de ropa");
});

app.use("/api/clients", clientRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
