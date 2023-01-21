import { Router } from 'express';
import CreateMatchControllerFactory
  from '../factories/implementations/CreateMatchControllerFactory';
import ListMatchesControllerFactory
  from '../factories/implementations/ListMatchesControllerFactory';

const createMatchController = CreateMatchControllerFactory.make();
const listMatchesController = ListMatchesControllerFactory.make();

const route = Router();

route.post(
  '/',
  async (req, res) => {
    const response = await createMatchController.handle(req);
    return res.status(response.status).json(response.body);
  },
);

route.get(
  '/',
  async (_req, res) => {
    const response = await listMatchesController.handle();
    return res.status(response.status).json(response.body);
  },
);

export default route;
