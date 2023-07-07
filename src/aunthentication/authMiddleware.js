// Importa jsonwebtoken y el archivo de configuración
const config = require('../../config');
const jwt = require('jsonwebtoken')
// Aquí se supone que se importan los módulos correspondientes, pero no se muestra el código real de importación.

// Esta función verifyToken verificará el token que proviene de los encabezados.
const verifyToken = (req, res, next) => {
  // Obtener el encabezado de autorización
  const token = req.headers["authorization"];

  // Verificar sincrónicamente el token dado utilizando un secreto o una clave pública para obtener un token decodificado
  try {
      const decoded = jwt.verify(token, config.AUTH_SECRET);
      req.user = decoded; // Guardar los datos decodificados en el objeto req para su posterior uso
  } catch (err) {
      return res.status(401).json({ error: 'Invalid token' }); // Devolver un error si el token es inválido
  }

  // Llamar a la siguiente función de middleware
  return next();
};

module.exports = verifyToken;
