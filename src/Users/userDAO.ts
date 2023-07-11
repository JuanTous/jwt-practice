import fs from 'fs';

// Esta función encuentra al usuario.
function findUser(email: string, done: (err: Error | null, user?: any) => void) {
    // Utiliza el método filter para encontrar al usuario en el archivo users.json
    fs.readFile('src/Users/users.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            done(err);
        } else {
            const users: any[] = JSON.parse(data);
            const user = users.find(user => user.email === email);
            done(null, user); // Llama al callback "done" pasando el resultado exitoso
        }
    });
}

// Esta función registra al usuario.
function registerUser(userData: any, done: (err: Error | null, result?: string) => void) {
    // Lee el archivo users.json para obtener los usuarios existentes
    fs.readFile('src/Users/users.json', 'utf8', (err, data) => {
        if (err) {
            done(err); // Llama al callback "done" pasando el mensaje de error
        } else {
            const users: any = JSON.parse(data);
            // Agrega el nuevo usuario al arreglo de usuarios
            users.push(userData);
            // Escribe el archivo actualizado con el nuevo usuario
            fs.writeFile('src/Users/users.json', JSON.stringify(users), 'utf8', err => {
                if (err) {
                    done(err); // Llama al callback "done" pasando el mensaje de error
                } else {
                    done(null, 'User registered successfully'); // Llama al callback "done" pasando el resultado exitoso
                }
            });
        }
    });
}

export default {
    findUser,
    registerUser
};
