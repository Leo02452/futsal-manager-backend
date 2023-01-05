import { Router } from 'express';
import LoginControllerFactory from '../factories/implementations/LoginControllerFactory';

const loginController = LoginControllerFactory.make();
const route = Router();

route.post(
  '/',
  async (req, res) => {
    const response = await loginController.handle(req);
    return res.status(response.status).json(response.body);
  },
);

export default route;
