const bcrypt = require("bcryptjs");
const dbConnect = require("../utils/dbConnect");
const User = require("../models/User");
const mongoose = require("mongoose");

async function createAdminUser() {
  try {
    await dbConnect();
    console.log("Connected to database");

    const username = "admin";
    const password = "admin@321#"; // You can change this to your desired admin password

    // Check if admin user already exists
    const existingAdmin = await User.findOne({ username });
    if (existingAdmin) {
      console.log("Admin user already exists");
      return;
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const adminUser = new User({
      username,
      password: hashedPassword,
      isAdmin: true,
    });

    await adminUser.save();
    console.log("Admin user created successfully");
  } catch (error) {
    console.error("Error creating admin user:", error);
  } finally {
    // Close the MongoDB connection
    try {
      await mongoose.connection.close();
      console.log("Database connection closed");
    } catch (err) {
      console.error("Error closing database connection:", err);
    }
    process.exit();
  }
}

createAdminUser();
