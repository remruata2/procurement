const bcrypt = require("bcryptjs");
const dbConnect = require("../utils/dbConnect");
const User = require("../models/User");

async function updatePasswordHash() {
  try {
    await dbConnect();
    console.log("Connected to database");

    const username = "admin"; // replace with the actual username
    const plainTextPassword = "admin@321#"; // replace with the actual password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(plainTextPassword, salt);

    const updatedUser = await User.findOneAndUpdate(
      { username },
      { $set: { password: hashedPassword } },
      { new: true }
    );

    if (updatedUser) {
      console.log("Password updated successfully for user:", username);
    } else {
      console.log("User not found");
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    process.exit();
  }
}

updatePasswordHash();
