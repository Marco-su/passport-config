const { Router } = require("express");

//--------------CONTROLADORES--------------
const {
  obtenerUsuario,
  crearUsuario,
  loguear,
  desloguear,
} = require("../controllers/user.controller");

//---------------INICIALIZACION--------------
const router = Router();

//------------------RUTAS------------------
router.post("/", crearUsuario);
router.post("/login", loguear);
router.get("/logout", desloguear);
router.get("/", obtenerUsuario);

//-------------------EXPORT------------------
module.exports = router;
