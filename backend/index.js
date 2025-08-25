// DEPENDENCIES
import express from "express";
import dotenv from "dotenv";
import connectToDB from "./Connect/db.js";

// Configuring ENV
dotenv.config();

// Establishing Connection ith Databases
connectToDB(process.env.DB_URL)


// Establishing main router
const app = express();


// Starting Services ON LH
app.listen(8000,() => {
    console.log("Server Is Up At PORT 8000")
})

