const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/tienda-ropa"

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Database connection established");
    } catch (error) {
        console.error("Error connecting to Mongo", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;