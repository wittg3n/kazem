const express = require("express");
const router = express.Router();
const passport = require("../config/passport"); // Your local strategy
const jwt = require("jsonwebtoken");
const User = require('../schema/User')

router.post("/login", async (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err) {
      return res
        .status(500)
        .json({
          success: false,
          message: "An error occurred during authentication",
        });
    }
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }
    req.logIn(user, { session: false }, (err) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, message: "An error occurred during login" });
      }
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      }); // Set token in HTTP-only cookie
      return res
        .status(200)
        .json({
          success: true,
          message: "Login successful",
          userID: user.userID,
        });
    });
  })(req, res, next);
});

router.get('/check-auth', async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ authenticated: false });
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ authenticated: false });
    }
    const user = await User.findById(decoded.id).select('-password');
    if (!user) {
      return res.status(401).json({ authenticated: false });
    }
    return res.status(200).json({ authenticated: true, user });
  });
});

module.exports = router;
