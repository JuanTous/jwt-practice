import express, { Request, Response } from 'express';
import authController from './authController';

const router = express.Router();

router.post('/register', (req: any, res: any) => {
  const { name, email, password } = req.body;

  authController.registerUser({ name, email, password }, (err: string | null, result: string | null) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.status(200).json({ message: result });
    }
  });
});

router.post('/login', (req: any, res: any) => {
  const { email, password } = req.body;

  authController.loginUser({ email, password }, (err: string | null, result: string | null) => {
    if (err) {
      res.status(401).json({ error: err });
    } else {
      res.status(200).json({ message: result, STATUS: "OK" });
    }
  });
});

export default router;
