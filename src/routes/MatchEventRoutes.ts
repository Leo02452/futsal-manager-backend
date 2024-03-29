import { Router } from 'express';
import CreateMatchEventControllerFactory
  from '../factories/implementations/CreateMatchEventControllerFactory';
import ListMatchEventsControllerFactory
  from '../factories/implementations/ListMatchEventsControllerFactory';
import UpdateMatchEventControllerFactory
  from '../factories/implementations/UpdateMatchEventControllerFactory';
import DeleteMatchEventControllerFactory
  from '../factories/implementations/DeleteMatchEventControllerFactory';

const createMatchEventController = CreateMatchEventControllerFactory.make();
const listMatchEventsController = ListMatchEventsControllerFactory.make();
const updateMatchEventController = UpdateMatchEventControllerFactory.make();
const deleteMatchEventController = DeleteMatchEventControllerFactory.make();

const route = Router();

route.post(
  '/',
  async (req, res) => {
    const response = await createMatchEventController.handle(req);
    return res.status(response.status).json(response.body);
  },
);

route.get(
  '/',
  async (req, res) => {
    const response = await listMatchEventsController.handle(req);
    return res.status(response.status).json(response.body);
  },
);

route.put(
  '/:id',
  async (req, res) => {
    const response = await updateMatchEventController.handle(req);
    return res.status(response.status).json(response.body);
  },
);

route.delete(
  '/:id',
  async (req, res) => {
    const response = await deleteMatchEventController.handle(req);
    return res.status(response.status).json(response.body);
  },
);

export default route;
