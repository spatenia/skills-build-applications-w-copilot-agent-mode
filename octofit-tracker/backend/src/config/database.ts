import mongoose from 'mongoose';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

export async function connectDatabase() {
  try {
    if (mongoose.connection.readyState === 1) {
      return;
    }

    await mongoose.connect(connectionString);
    console.log(`Connected to MongoDB at ${connectionString}`);
  } catch (error) {
    console.error('MongoDB connection failed. Starting the API without a database connection.', error);
  }
}
