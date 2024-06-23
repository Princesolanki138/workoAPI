import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

//config
dotenv.config();

//database 
connectDB();

//create express app
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use('/api/v1/worko', authRoutes)

app.get("/", (req, res) => {
  res.send("Worko.io Assignment")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`server running on port ${PORT}`)
)


