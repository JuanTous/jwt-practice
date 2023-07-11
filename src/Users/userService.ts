import userDAO from './userDAO';
// Aquí se supone que se importa el módulo correspondiente, pero no se muestra el código real de importación.

function findUser(email: string, done: (err: any, user?: any) => void) {
    // Llama al método findUser del DAO
    userDAO.findUser(email, (err: any, user?: any) => {
        if (err) {
            done(err); // Llama al callback "done" pasando el mensaje de error
        } else {
            done(null, user); // Llama al callback "done" pasando el resultado exitoso
        }
    });
}

function registerUser(userData: any, done: (err: any, result?: any) => void) {
    // Llama al método registerUser del DAO
    userDAO.registerUser(userData, (err: any, result?: any) => {
        if (err) {
            done(err); // Llama al callback "done" pasando el mensaje de error
        } else {
            done(null, result); // Llama al callback "done" pasando el resultado exitoso
        }
    });
}

export default{
    findUser,
    registerUser
};
