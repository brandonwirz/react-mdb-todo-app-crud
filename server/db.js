import mongoose from "mongoose"
import { MongoMemoryServer } from "mongodb-memory-server"

async function connectDB() {
  const mongod = await MongoMemoryServer.create()
  const uri = mongod.getUri()
  await mongoose.connect(uri)
  console.log("Connected to in-memory MongoDB")
}

export default connectDB
