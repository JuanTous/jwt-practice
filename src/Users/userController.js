// Importa el servicio userService
const userService = require('./userService');
// Aquí se supone que se importa el módulo correspondiente, pero no se muestra el código real de importación.

function findUser(email, done) {
    // Llama al método findUser del servicio userService y pasa los parámetros
    userService.findUser(email, (err, user) => {
        if (err) {
            done(err); // Llama al callback "done" pasando el mensaje de error
        } else {
            done(null, user); // Llama al callback "done" pasando el resultado exitoso
        }
    });
}

module.exports = {
    findUser
};
