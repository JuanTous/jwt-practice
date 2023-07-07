// Importa los módulos userService y authService
const userService = require('../Users/userService');
const authService = require('./authService');

// Esta función registrará al usuario. Toma dos parámetros: userData y done (callback).
// Llama al método findUser del servicio userService y luego al método register del servicio userService.
function registerUser(userData, done) {
  userService.findUser(userData, (err, user) => {
      if (err) {
          done(err); // Llama al callback "done" pasando el mensaje de error
      } else if (user) {
          done('User already exists'); // Llama al callback "done" pasando un mensaje de error si el usuario ya existe
      } else {
          userService.register(userData, (err, result) => {
              if (err) {
                  done(err); // Llama al callback "done" pasando el mensaje de error
              } else {
                  done(null, result); // Llama al callback "done" pasando el resultado exitoso
              }
          });
      }
  });
}

// Esta función iniciará sesión del usuario.
// Utiliza el método findUser del servicio userService para verificar primero y si se encuentra el usuario, llama al método createToken.
function loginUser({ email, password }, done) {
  userService.findUser(email, (err, user) => {
      if (err) {
          done(err); // Llama al callback "done" pasando el mensaje de error
      } else if (!user) {
          done('Invalid email or password'); // Llama al callback "done" pasando un mensaje de error si el usuario no es válido
      } else {
          authService.createJWT(user, (err, token) => {
              if (err) {
                  done(err); // Llama al callback "done" pasando el mensaje de error
              } else {
                  done(null, token); // Llama al callback "done" pasando el resultado exitoso
              }
          });
      }
  });
}

module.exports = {
  registerUser,
  loginUser
};
