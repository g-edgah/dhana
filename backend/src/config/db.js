import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

export const connectDB = async  () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongodb connected")
    } catch (error) {
        console.log("mongodb connection error: "+error)
        process.exit(1) //exit with failure
    }
}