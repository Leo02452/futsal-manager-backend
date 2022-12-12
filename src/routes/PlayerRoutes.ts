import { Router } from 'express';
import CreatePlayerControllerFactory
  from '../factories/implementations/CreatePlayerControllerFactory';

const createPlayerController = CreatePlayerControllerFactory.make();

const route = Router();

route.post(
  '/',
  async (req, res) => {
    const response = await createPlayerController.handle(req);
    return res.status(response.status).json(response.body);
  },
);

export default route;
