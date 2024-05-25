const User = require("../schema/User");

module.exports = {
  //create user
  createUser: async (user) => {
    try {
      const newUser = new User(user);
      return await newUser.save();
    } catch (error) {
      throw error;
    }
  },
  //get user by userId
  getUserById: async (userID) => {
    try {
      if (userID) {
        const user = await User.findOne({ userID }).select("-password");
        console.log(`User found: ${user}`);
        return user;
      } else {
        throw new Error("User ID is required");
      }
    } catch (error) {
      console.error(`Error fetching user: ${error.message}`);
      throw new Error(`Error fetching user: ${error.message}`);
    }
  },
};
