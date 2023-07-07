// Importa los módulos requeridos
const express = require('express');
const router = express.Router();
const authController = require('./authController')

// Este método post registrará al usuario
router.post('/register',(req,res)=>{
    // Recupera el nombre, correo electrónico y contraseña del cuerpo de la solicitud (req.body)
    const { name, email, password } = req.body;
    
    // Llama al método "registerUser" del controlador "authController" pasando los detalles del usuario
    authController.registerUser({ name, email, password },(err,result)=>{
        if (err) {
            // Maneja el mensaje de error devuelto por el controlador
            res.status(400).json({ error: err });
        } else {
            // Maneja el resultado exitoso devuelto por el controlador
            res.status(200).json({ message: result });
        }
    });
});

// Este método post permitirá el inicio de sesión del usuario una vez que esté registrado
router.post('/login',(req,res)=>{
    // Recupera el correo electrónico y la contraseña del cuerpo de la solicitud (req.body)
    const { email, password } = req.body;
    
    // Llama al método "loginUser" del controlador "authController" pasando el correo electrónico y la contraseña
    authController.loginUser({ email, password },(err,result)=>{
        if (err) {
            // Maneja el mensaje de error devuelto por el controlador
            res.status(401).json({ error: err });
        } else {
            // Maneja el resultado exitoso devuelto por el controlador
            res.status(200).json({ message: result, STATUS: "OK"});
        }
    });
});

module.exports = router;
