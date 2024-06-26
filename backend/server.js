// import authRoutes from "./routes/auth.routes.js";

import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Rafat!!! welcome to the world");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
