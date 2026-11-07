// import mongoose from "mongoose";

// export const connectDB = () => {
//     mongoose
//         .connect(process.env.MONGO_URI, {
//             dbName: "MERN_STACK_LIBRARY_MANAGEMENT",
//         })
//         .then(() => {
//             console.log("Database connected successfully!");
//         })
//         .catch((err) => {
//             console.log("Error connecting to database:", err);
//         });
// };



import mongoose from "mongoose";

let cached = globalThis.mongoose;

if (!cached) {
    cached = globalThis.mongoose = {
        conn: null,
        promise: null,
    };
}

export const connectDB = async () => {
    if (cached.conn) {
        return cached.conn;
    }

    if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI is missing in environment variables");
    }

    if (!cached.promise) {
        cached.promise = mongoose
            .connect(process.env.MONGO_URI, {
                dbName: "MERN_STACK_LIBRARY_MANAGEMENT",
                serverSelectionTimeoutMS: 10000,
            })
            .then((mongoose) => mongoose)
            .catch((error) => {
                cached.promise = null;
                throw error;
            });
    }

    cached.conn = await cached.promise;

    console.log("Database connected successfully!");

    return cached.conn;
};
