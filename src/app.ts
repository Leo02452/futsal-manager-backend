import express from 'express';
import 'express-async-errors';
import {
  authRoutes,
  managerRoutes,
  playerRoutes,
} from './routes';
import errorHandler from './middlewares/errorHandler';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.get('/', (_req, res) => res.json({ ok: true }));
  }

  private config():void {
    this.app.use(express.json());
    this.app.use('/managers', managerRoutes);
    this.app.use('/login', authRoutes);
    this.app.use('/players', playerRoutes);
    this.app.use(errorHandler);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };
export const { app } = new App();
