//------------------LIBRERIES------------------
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");

//------------------OTHER IMPORTS------------------

//------------------INITIALIZATIONS------------------
const app = express();

//------------------SETTINGS------------------
app.set("port", process.env.PORT || 4000);

//------------------MIDDLEWARES------------------
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: "misecreto",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("misecreto"));

app.use(passport.initialize());
app.use(passport.session());
require("../config/passport")(passport);

//------------------ROUTES------------------
app.use("/user", require("../routes/user.routes"));

//------------------EXPORT------------------
module.exports = app;
