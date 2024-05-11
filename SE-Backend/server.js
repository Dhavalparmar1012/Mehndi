import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routers/authRoute.js";
import cors from "cors";

dotenv.config();

// database config
connectDB();
// rest object
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/auth", authRoutes);
// rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Mahendi</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server ${PORT} start`);
});
