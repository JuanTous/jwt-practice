import { Request, Response, Router } from 'express';
import userController from './userController';
import userDAO from './userDAO';

const router = Router();

router.get('/', (req: any, res: any) => {
    const userdata = req.body;

    userController.findUser(userdata.email, (err: Error | null, result?: any) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(200).json({ user: result });
        }
    });
});

router.post('/register', (req: any, res: any) => {
    const user = req.body;

    userDAO.registerUser(user, (err: Error | null, message?: string) => {
        if (err) {
            res.status(404).json({ message: "No se pudo crear el usuario" });
        } else {
            res.status(201).json({ message: message });
        }
    });
});

export default router;
