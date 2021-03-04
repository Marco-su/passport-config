const passport = require("passport");
const bcrypt = require("bcryptjs");

const User = require("../models/user.model");

const ctrl = {};

//----------------OBTENER USUARIO---------------
ctrl.obtenerUsuario = (req, res) => {
  res.send(req.user);
};

//----------------CREAR USUARIO--------------
ctrl.crearUsuario = async (req, res) => {
  try {
    const findUser = await User.findOne({ email: req.body.email });

    if (findUser) res.send("El email ya está en uso");

    const hashedPass = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      email: req.body.email,
      password: hashedPass,
    });

    await newUser.save();

    res.send("Usuario creado");
  } catch (error) {
    res.send(`Error al crear el usuario: ${error}`);
  }
};

//----------------LOGUEAR USUARIO----------------
ctrl.loguear = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send(info);
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send(info);
      });
    }
  })(req, res, next);
};

//----------------DESLOGUEAR USUARIO---------------
ctrl.desloguear = (req, res) => {
  try {
    req.logout();
    res.send("Te has deslogueado");
  } catch (error) {
    res.send(error);
  }
};

//----------------EXPORT-----------------
module.exports = ctrl;
