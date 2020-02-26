const { Router } = require('express');

const login = require('../controllers/login');
const horario = require('../controllers/horarioCRUD');
const reserva = require('../controllers/reservaCRUD');
const persona = require('../controllers/personaCRUD');
const scooter = require('../controllers/scooterCRUD');

const router = Router();

router.get('/', (req, res) => res.send('Bienvenido'))

router.post('/login', login.login);

router.get('/horario', horario.getData);
router.post('/horario', horario.postData);
router.put('/horario', horario.putData);
router.delete('/horario', horario.deleteData);

router.get('/reserva', reserva.getData);
router.post('/reserva', reserva.postData);
router.put('/reserva', reserva.putData);
router.delete('/reserva', reserva.deleteData);
router.get('/estadistica', reserva.estadistica);

router.get('/persona', persona.getData);
router.get('/getlogin', persona.getlogin);
router.post('/persona', persona.postData);
router.put('/persona', persona.putData);
router.delete('/persona', persona.deleteData);

router.get('/scooter', scooter.getData);
router.get('/scooters_disponibles', scooter.getScooter);
router.post('/scooter', scooter.postData);
router.put('/scooter', scooter.putData);
router.delete('/scooter', scooter.deleteData);

module.exports = router;
