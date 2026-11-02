
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI?.trim();

        if (!uri) {
            throw new Error("MONGODB_URI is missing");
        }

        const connectionInstance = await mongoose.connect(uri);

        console.log("MongoDB connected successfully!");
        console.log("Database:", connectionInstance.connection.name);

    } catch (error) {
        console.log("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

export default connectDB;
