import { Router } from 'express';
import ListEventsControllerFactory from '../factories/implementations/ListEventsControllerFactory';

const listEventsController = ListEventsControllerFactory.make();

const route = Router();

route.get(
  '/',
  async (_req, res) => {
    const response = await listEventsController.handle();
    return res.status(response.status).json(response.body);
  },
);

export default route;
