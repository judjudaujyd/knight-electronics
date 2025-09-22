// DEPENDENCIES
import express from "express";
import dotenv from "dotenv";
import connectToDB from "./Connect/db.js";
import cors from "cors"

// Routes
import userRouter from "./Routers/userRouter.js";

// Configuring ENV
dotenv.config();

// Establishing Connection ith Databases
connectToDB(process.env.DB_URL)


// Establishing main router
const app = express();

// Configuring App Router
app.use(cors());
app.use(express.json())

app.use("/user",userRouter)


// Starting Services ON LH
app.listen(8000,() => {
    console.log("Server Is Up At PORT 8000")
})

