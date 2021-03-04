const mongoose = require("mongoose");

mongoose
  .connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Base de datos conectada");
  })
  .catch((err) => {
    console.log("Error al conectar la base de datos", err);
  });
