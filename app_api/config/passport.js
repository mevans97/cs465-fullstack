const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users'); // This assumes you've already registered the model elsewhere

passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (username, password, done) => {
      const q = await User.findOne({ email: username }).exec();
      if (!q) {
        return done(null, false, {
          message: 'Incorrect username.',
        });
      }

      if (!q.validPassword(password)) {
        return done(null, false, {
          message: 'Incorrect password.',
        });
      }

      return done(null, q);
    }
  )
);