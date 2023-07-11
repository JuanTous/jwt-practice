import { Request, Response, NextFunction } from 'express';
import config from '../config';
import jwt, { VerifyErrors } from 'jsonwebtoken';

const verifyToken = (req: any, res: any, next: any): void => {
  const token = req.headers["authorization"]; // Obtener el encabezado de autorización

  if (!token) {
    res.status(401).json({ error: 'Missing token' }); // Devolver un error si no hay token presente
    return;
  }

  try {
    const decoded = jwt.verify(token, config.AUTH_SECRET); // Verificar sincrónicamente el token dado utilizando un secreto o una clave pública para obtener un token decodificado
    req.user = decoded; // Guardar los datos decodificados en el objeto req para su posterior uso
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' }); // Devolver un error si el token es inválido
    return;
  }

  next(); // Llamar a la siguiente función de middleware
};

export default verifyToken;
