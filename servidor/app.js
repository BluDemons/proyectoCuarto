const express = require("express");

const bodyParser = require("body-parser");

const t_reserv = require("./rutas/ruta_tipo_reserva");
const cors = require("cors");

const PORT = 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Bienvenidos al Yavirac!");
});
app.use("/api", t_reserv);

app.listen(PORT, () => {
    console.log(`Servidor en el puerto: ${PORT}`);
});