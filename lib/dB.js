const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection error:", error.message);
    }
};

module.exports=dbConnect
