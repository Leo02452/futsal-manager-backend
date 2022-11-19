import CreateManagerController from '../controllers/CreateManagerController';
import JwtTokenProvider from '../providers/implementations/JwtTokenProvider';
import {
  createManagerSchema,
} from '../providers/implementations/zodValidator/schemas/CreateManager';
import PrismaManagerRepository from '../repositories/implementations/PrismaUserRepository';
import CreateManagerService from '../services/CreateManagerService';

export default class CreateManagerControllerFactory {
  public static make() {
    const managerRepository = new PrismaManagerRepository();
    const tokenProvider = new JwtTokenProvider();
    const createManagerService = new CreateManagerService(
      managerRepository,
      tokenProvider,
    );
    const createManagerController = new CreateManagerController(
      createManagerService,
      createManagerSchema,
    );

    return createManagerController;
  }
}
