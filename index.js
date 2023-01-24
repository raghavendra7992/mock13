require("dotenv").config();
const express = require('express');
const connect = require("./config/db");
const server = express();
const cors = require('cors');
server.use(express.json());
server.use(cors());
const userRouter = require("./Routes/user.route.js")
const jobRouter=require("./Routes/job.routes.js")

server.use("/user",userRouter);
server.use("/jobs",jobRouter)

server.get("/",(req,res)=>{
    res.send("Masai job Application")
})

server.listen(8080,async(req,res)=>{
   try{
    await connect();
    console.log(`Database connected`)
   }
   catch(e){
    console.log(e)
   }
   console.log(`server listening at port ${8080}`)
});