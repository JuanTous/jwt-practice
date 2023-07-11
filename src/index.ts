import express from 'express';
import config from './config';
import authRouter from './authentication';
import userRouter from './Users';
import verifyAuth from './authentication/authMiddleware';
import morgan from 'morgan';

const app = express();
app.use(express.json());
app.use(morgan('combined'));
app.use('/auth', authRouter);
app.use('/users', verifyAuth, userRouter);

const server = app.listen(config.PORT, () => {
  console.log('Listening on port', config.PORT);
});

export default server;