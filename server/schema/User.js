const mongoose = require('mongoose')
const Schema  = mongoose.Schema
const uuid = require('uuid')

const userSchema = Schema({
    userID: {
        type: String,
        required: true,
        default: uuid.v4
    }




})



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
module.exports = User