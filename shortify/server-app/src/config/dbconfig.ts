import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connectDb = async () => {
    const connectionString = process.env.CONNECTION_STRING;
    console.log("string is ", connectionString);
    if (!connectionString) {
        console.error('Database connection string is not defined');
        process.exit(1);
    }

    try {
        const connect = await mongoose.connect(connectionString);
        console.log('Database connected:', connect.connection.host, connect.connection.name);
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
};

export default connectDb;
