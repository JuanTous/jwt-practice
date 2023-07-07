// Importa jsonwebtoken y el archivo de configuración
const config = require('../../config');
const jwt = require('jsonwebtoken')
// Aquí se supone que se importan los módulos correspondientes, pero no se muestra el código real de importación.

// Esta función verifica el correo electrónico y la contraseña y devuelve true o false.
function verifyUser({ email, password }, userData) {
  if (userData === undefined) {
      return false;
  } else {
      if (email === userData.email && password === userData.password) {
          return true;
      }
  }
}

// Esta función crea un token JWT y devuelve el token.
// Utiliza el método jwt.sign con dos parámetros: payload y Auth_Secret.
function createJWT(userData, done) {
  // Crea el payload
  const payload = {
      email: userData.email,
      // Otros datos relevantes que pueden agregarse al payload
  };
  done(null, jwt.sign(payload, config.AUTH_SECRET, { expiresIn: '24h' }));
}

module.exports = {
  verifyUser,
  createJWT
};
