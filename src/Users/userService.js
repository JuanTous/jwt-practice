// Importa la capa DAO
const userDAO = require('./userDAO');
// Aquí se supone que se importa el módulo correspondiente, pero no se muestra el código real de importación.

function findUser(email, done) {
    // Llama al método findUser del DAO
    userDAO.findUser(email, (err, user) => {
        if (err) {
            done(err); // Llama al callback "done" pasando el mensaje de error
        } else {
            done(null, user); // Llama al callback "done" pasando el resultado exitoso
        }
    });
}

function registerUser(userData, done) {
    // Llama al método registerUser del DAO
    userDAO.registerUser(userData, (err, result) => {
        if (err) {
            done(err); // Llama al callback "done" pasando el mensaje de error
        } else {
            done(null, result); // Llama al callback "done" pasando el resultado exitoso
        }
    });
}

module.exports = {
    findUser,
    registerUser
};
