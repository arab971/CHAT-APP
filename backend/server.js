import express from 'express';
import { app,server } from './socket/socket.js';

import cookieParser from 'cookie-parser';
import cors from "cors"
import env from 'dotenv';
import connectToMongoDB from './db/conection.js'

import authRoutes from './routes/auth.router.js';
import messageRoutes from './routes/messageRoutes.js';
import userRoutes from './routes/userRoutes.js';
env.config();
app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 5000;
const options = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],

   
};
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)
app.use(cors(options));
server.listen(port,()=>{
    connectToMongoDB()
    console.log(` http://localhost:${port}`)
})
