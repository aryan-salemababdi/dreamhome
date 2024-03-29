// import to database
import mongoose from "mongoose";

export async function connectDB() {
    console.log("Connecting to DB ...");
    if (mongoose.connections[0].readyState) return;
    else {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URI || "");
        console.log("Connect to DB");
    }
}