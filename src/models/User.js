const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  console.log("Inside matchPassword method");
  console.log("Entered password:", enteredPassword);
  console.log("Stored password hash:", this.password);
  const isMatch = await bcrypt.compare(enteredPassword, this.password);
  console.log("Password match result:", isMatch);
  return isMatch;
};

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
