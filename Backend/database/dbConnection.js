import mongoose from "mongoose";

export const dbConnection = async () => {
  const mongoUri = process.env.MONGO_URI;
  const dbName = process.env.MONGO_DB_NAME || "Life_Care_Hospital";

  if (!mongoUri) {
    console.error("MONGO_URI is missing in config.env");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri, {
      dbName,
      serverSelectionTimeoutMS: 10000,
      family: 4,
    });
    console.log(`Connected to Database: ${dbName}`);
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
};
