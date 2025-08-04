import mongoose from "mongoose"

export const connectDB = async () => {

    try
    {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB connected Successfully ")

    }
    catch(error){
        console.log("ERROR connecting to MongoDB", error )
        process.exit(1) //exit with failure // 0 means success
    }
}