// Importa los módulos requeridos
const express = require('express');
const router = express.Router();
const userController = require('./userController');
const userDAO = require('./userDAO');

// Este método GET obtendrá al usuario con el token
router.get('/', (req, res) => {
    // Recupera los datos del usuario desde los claims del req
    const userdata = req.body;

    // Llama al método findUser del controlador userController pasando el correo electrónico del usuario
    userController.findUser(userdata.email, (err, result) => {
        if (err) {
            res.status(400).json({ error: err }); // Maneja el mensaje de error devuelto por el controlador
        } else {
            res.status(200).json({ user: result }); // Maneja el resultado exitoso devuelto por el controlador
        }
    });
});

router.post('/register', (req, res) => {
        const user = req.body;

        userDAO.registerUser(user, (err, message) => {
                if (err) {
                        res.status(404).json({"message": "No se pudo crear el ususario"});       
                } else {
                        res.status(201).json({"message": message});
                }
        });   
});

module.exports = router;
