import { Router } from 'express';
import CreateTeamControllerFactory from '../factories/implementations/CreateTeamControllerFactory';

const createTeamController = CreateTeamControllerFactory.make();

const route = Router();

route.post(
  '/',
  async (req, res) => {
    const response = await createTeamController.handle(req);
    return res.status(response.status).json(response.body);
  },
);

export default route;
