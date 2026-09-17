import express from "express";
import cors from "cors";

import pool from "./config/db.js";
import authRoutes from "./routes/authroutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";

const PORT= process.env.PORT || 5000;
const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN || "https://application-tracker-jade.vercel.app" }));
app.use(express.json());

pool.query("SELECT NOW()")
.then(()=> console.log("Database connected successfully"));

app.get("/",(req,res)=>{
    res.send("Job tracker app running...")
})

app.use("/api/auth",authRoutes);

app.use("/api/applications",applicationRoutes);

app.listen(PORT,()=>{
    console.log(`Serving running in port ${PORT}`)
})

