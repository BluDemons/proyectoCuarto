const express = require("express");

const router = express.Router();

const Reserva = require("../models/tiporeserva");
const Scooter = require("../models/scotter")
//tipo_reservas metodos
router.get("/treserva", (req, res) => {
    const { query } = req;
    Reserva.findAll({ where: query })
        .then(reserva => {
            res.json(reserva);
        })
        .catch(err => {
            res.send("error: " + err);
        });
});

router.post("/treserva", (req, res, next) => {
    const datos = {
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        hora: req.body.hora,
    };

    if (!datos) {
        res.status(400);
        res,
        json({
            error: "Datos incorrectos"
        });
    } else {
        Reserva.create(datos)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.json("error: " + err);
            });
    }
});
//tipo_reservas metodos
router.get("/scooter", (req, res) => {
    const { query } = req;
    Scooter.findAll({ where: query })
        .then(scooter => {
            res.json(scooter);
        })
        .catch(err => {
            res.send("error: " + err);
        });
});

router.post("/scooter", (req, res, next) => {
    const datos = {
        descripcion: req.body.descripcion,
        estado: req.body.estado,
        codigo: req.body.codigo,
    };

    if (!datos) {
        res.status(400);
        res,
        json({
            error: "Datos incorrectos"
        });
    } else {
        Scooter.create(datos)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.json("error: " + err);
            });
    }
});
module.exports = router;