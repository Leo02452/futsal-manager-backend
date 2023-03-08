import { Router } from 'express';
import CreateMatchPlayerControllerFactory
  from '../factories/implementations/CreateMatchPlayerControllerFactory';
import ListMatchPlayersControllerFactory
  from '../factories/implementations/ListMatchPlayersControllerFactory';

const createMatchPlayerController = CreateMatchPlayerControllerFactory.make();
const listMatchPlayersController = ListMatchPlayersControllerFactory.make();

const route = Router();

route.post(
  '/',
  async (req, res) => {
    const response = await createMatchPlayerController.handle(req);
    return res.status(response.status).json(response.body);
  },
);

route.get(
  '/',
  async (req, res) => {
    const response = await listMatchPlayersController.handle(req);
    return res.status(response.status).json(response.body);
  },
);

export default route;
