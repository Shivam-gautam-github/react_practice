import mongoose from 'mongoose';

// DB Connection
export const db = async () => {
  mongoose.set('strictQuery', true);
  const conn = await mongoose.connect(
    'mongodb://127.0.0.1:27017/apolloServerDB'
  );
  console.info(`Connected to db`, conn?.connections[0]?._connectionString);
};
