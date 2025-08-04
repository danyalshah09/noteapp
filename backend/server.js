import express from "express"

// const express = require("express")
import notesRoutes from './src/routes/notesRoutes.js'
import { connectDB } from "./src/config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./src/middleware/rateLimiter.js" ;

dotenv.config();
const app = express()

//middleware
app.use(express.json())
app.use(rateLimiter)
// custom Middleware
// app.use((req,res,next)=>{
//     console.log(`Req Method is ${req.method} & Req URL is ${req.url}`)
// })



//middlewarea setup
app.use(express.json())
app.use("/api/notes",notesRoutes);
connectDB().then(()=>
    app.listen(process.env.PORT, () => {
        console.log(`Server started on PORT : ${process.env.PORT}`)
    })
)
