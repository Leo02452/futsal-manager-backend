import { Router } from 'express';
import CreateMatchPlayerControllerFactory
  from '../factories/implementations/CreateMatchPlayerControllerFactory';

const createMatchPlayerController = CreateMatchPlayerControllerFactory.make();

const route = Router();

route.post(
  '/',
  async (req, res) => {
    const response = await createMatchPlayerController.handle(req);
    return res.status(response.status).json(response.body);
  },
);

export default route;
