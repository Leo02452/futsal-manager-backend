import LoginController from '../../controllers/LoginController';
import prismaModel from '../../database/prisma';
import PasswordProviderAdapter from '../../providers/implementations/PasswordProviderAdapter';
import TokenProviderAdapter from '../../providers/implementations/TokenProviderAdapter';
import { loginSchema } from '../../providers/implementations/zodValidator/schemas/Login';
import ManagerRepository from '../../repositories/implementations/ManagerRepository';
import LoginService from '../../services/LoginService';

export default class LoginControllerFactory {
  public static make() {
    const managerRepository = new ManagerRepository(prismaModel.user);
    const passwordProvider = new PasswordProviderAdapter();
    const tokenProvider = new TokenProviderAdapter();

    const loginService = new LoginService(
      managerRepository,
      passwordProvider,
      tokenProvider,
    );

    const loginController = new LoginController(
      loginService,
      loginSchema,
    );

    return loginController;
  }
}
