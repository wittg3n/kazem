const express = require("express");
const router = express.Router();
const User = require("../controller/usercontroller");

//get user by id
router.get("/:userid", async (req, res) => {
  try {
    const user = await User.getUserById(req.params.userid);
    if (user) {
      res.status(200).json({
        message: "ok",
        content: user,
      });
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error happened in get user by userID",
      err: error.message,
    });
  }
});
//create user
router.post("/createUser", async (req, res) => {
  console.log("Creating user");
  const { user } = req.body;
  try {
    await User.createUser(user);
    res.status(200).json({
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


module.exports = router;
