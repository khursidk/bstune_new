import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const db = async () =>{ 
try{
  const connectionInstance=await mongoose.connect(process.env.MONGODB_URI)
console.log(` mongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
}catch(error){ 
  console.log('MongoDB connection error'+error);
  process.exit(1);
}
};

export default db;
