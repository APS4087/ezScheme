import mongoose from "mongoose";

const connectToMongoDB = async()=>{
    try{
        console.log("Connecting to Database");
    
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB");
    }catch(error){
        console.log("Error connecting to MongoDB... ", error.message);
    }
}

export default connectToMongoDB;