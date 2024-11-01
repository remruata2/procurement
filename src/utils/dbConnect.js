const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");

// Find the root directory
const rootDir = path.resolve(__dirname, "../../");

// Load environment variables
dotenv.config({ path: path.join(rootDir, ".env.local") });

const MONGODB_URI = process.env.MONGODB_URI;
console.log("MONGODB_URI:", MONGODB_URI);

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    // Remove deprecated options
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      console.log("Database connected successfully");
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

module.exports = dbConnect;
