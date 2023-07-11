import config from '../config';
import jwt from 'jsonwebtoken';

interface UserData {
  email: string;
  password: string;
}

// Esta función verifica el correo electrónico y la contraseña y devuelve true o false.
function verifyUser({ email, password }: UserData, userData: UserData | undefined): any {
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
function createJWT(userData: UserData, done: (error: Error | null, token?: string) => void): void {
  // Crea el payload
  const payload = {
    email: userData.email,
    // Otros datos relevantes que pueden agregarse al payload
  };

  const options: any = {
    expiresIn: '24h',
  };

  jwt.sign(payload, config.AUTH_SECRET, options, (error: Error | null, token?: string) => {
    if (error) {
      done(error);
    } else {
      done(null, token);
    }
  });
}

export default {
  verifyUser,
  createJWT
};
