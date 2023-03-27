import { Router } from 'express';
import CreateMatchEventControllerFactory
  from '../factories/implementations/CreateMatchEventControllerFactory';

const createMatchEventController = CreateMatchEventControllerFactory.make();

const route = Router();

route.post(
  '/',
  async (req, res) => {
    const response = await createMatchEventController.handle(req);
    return res.status(response.status).json(response.body);
  },
);

export default route;
