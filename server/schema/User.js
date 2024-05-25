const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uuid = require("uuid");
const bcrypt = require("bcrypt");

const userSchema = Schema({
  userID: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  position: {
    type: String,
  },
  imageUrl: {
    type: String,
    required: true,
    default: "/userprofile/default.jpg",
  },
  role: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  // notes: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Note',
  // }],
  // projects:[{
  //   type: Schema.Types.ObjectId,
  //   ref:'Project'
  // }]
});

// Middleware to hash the password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (err) {
    return next(err);
  }
});

// compare passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (err) {
    throw err;
  }
};
const User = mongoose.model("User", userSchema);
module.exports = User;
