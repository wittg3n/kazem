const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../schema/User");
passport.use(
  new LocalStrategy(
    {
      usernameField: "userID",
      passwordField: "password",
    },
    async (userID, password, done) => {
      try {
        const user = await User.findOne({ userID });
        if (!user) {
          return done(null, false, { message: "Incorrect userID." });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
          return done(null, false, { message: "Incorrect password." });
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = passport;
