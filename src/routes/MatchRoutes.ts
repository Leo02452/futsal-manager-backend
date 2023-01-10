import { Router } from 'express';
import CreateMatchControllerFactory
  from '../factories/implementations/CreateMatchControllerFactory';

const createMatchController = CreateMatchControllerFactory.make();

const route = Router();

route.post(
  '/',
  async (req, res) => {
    const response = await createMatchController.handle(req);
    return res.status(response.status).json(response.body);
  },
);

export default route;
