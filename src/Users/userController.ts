import userService from './userService';
// Aquí se supone que se importa el módulo correspondiente, pero no se muestra el código real de importación.

function findUser(email: string, done: (error: any, user?: any) => void) {
    userService.findUser(email, (err: any, user?: any) => {
        if (err) {
            done(err);
        } else {
            done(null, user);
        }
    });
}

export default {
    findUser
};
