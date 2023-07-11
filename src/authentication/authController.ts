import userService from '../Users/userService';
import authService from './authService';

interface UserData {
  name?: string;
  password: string;
  email: string
}

// Esta función registrará al usuario. Toma dos parámetros: userData y done (callback).
// Llama al método findUser del servicio userService y luego al método register del servicio userService.
function registerUser(userData: UserData, done: (error: string | null, result?: any) => void): void {
  userService.findUser(userData.email, (err: string | null, user: any) => {
    if (err) {
      done(err); // Llama al callback "done" pasando el mensaje de error
    } else if (user) {
      done('User already exists'); // Llama al callback "done" pasando un mensaje de error si el usuario ya existe
    } else {
      userService.registerUser(userData, (err: string | null, result?: any) => {
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
function loginUser(
  { email, password }: UserData,
  done: (error: string | null, result?: any) => void
): void {
  userService.findUser(email, (err: string | null, user: any) => {
    if (err) {
      done(err); // Llama al callback "done" pasando el mensaje de error
    } else if (!user) {
      done('Invalid email or password'); // Llama al callback "done" pasando un mensaje de error si el usuario no es válido
    } else {
      authService.createJWT(user, (err: any, token?: string) => {
        if (err) {
          done(err); // Llama al callback "done" pasando el mensaje de error
        } else {
          done(null, token); // Llama al callback "done" pasando el resultado exitoso
        }
      });
    }
  });
}

export default {
  registerUser,
  loginUser
};
