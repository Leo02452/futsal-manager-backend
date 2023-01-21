import { Router } from 'express';
import CreateManagerControllerFactory
  from '../factories/implementations/CreateManagerControllerFactory';

const createManagerController = CreateManagerControllerFactory.make();

const route = Router();

route.post(
  '/',
  async (req, res) => {
    const response = await createManagerController.handle(req);
    return res.status(response.status).json(response.body);
  },
);

export default route;
