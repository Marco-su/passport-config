const bcrypt = require("bcryptjs");
const { Strategy } = require("passport-local");

const User = require("../models/user.model");

//--------------------LOGIN--------------------
module.exports = function (passport) {
  passport.use(
    new Strategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        await User.findOne({ email }, (err, user) => {
          if (err) throw err;
          if (!user) return done(null, false, { message: "Email incorrecto" });
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) throw err;
            if (result === true) {
              return done(null, user, { message: "Autenticación exitosa" });
            } else {
              return done(null, false, { message: "Contraseña incorrecta" });
            }
          });
        });
      }
    )
  );

  //-----------SERIALIZE AND DESERIALIZE-----------
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ _id: id });

      if (user) {
        delete user.password;
        const userInfo = { id: user._id };
        return done(null, userInfo);
      }
    } catch (error) {
      return done(error, false);
    }
  });
};
