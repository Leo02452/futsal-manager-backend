import { Router } from 'express';
import CreatePlayerControllerFactory
  from '../factories/implementations/CreatePlayerControllerFactory';
import ListPlayersControllerFactory
  from '../factories/implementations/ListPlayersControllerFactory';

const createPlayerController = CreatePlayerControllerFactory.make();
const listPlayersController = ListPlayersControllerFactory.make();

const route = Router();

route.post(
  '/',
  async (req, res) => {
    const response = await createPlayerController.handle(req);
    return res.status(response.status).json(response.body);
  },
);

route.get(
  '/',
  async (req, res) => {
    const response = await listPlayersController.handle(req);
    return res.status(response.status).json(response.body);
  },
);

export default route;
