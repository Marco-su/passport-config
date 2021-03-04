require("dotenv").config();
require("./config/mongoose");

const app = require("./server/server");

app.listen(app.get("port"), () => {
  console.log("Servidor escuchando en el puero", app.get("port"));
});
