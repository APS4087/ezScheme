// importing 
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";



import connectToMongoDB from "./DB/connectToMongoDB.js";


const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;





// main page route
app.get("/",(req, res)=>{
    // root route 
    res.send("TESTING Server !!!")
});


app.use(express.json()); // parse incoming request with json (from req.body)
app.use(cookieParser());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, ()=> {

    connectToMongoDB();
    console.log(`Server Running at port ${PORT}`);

});