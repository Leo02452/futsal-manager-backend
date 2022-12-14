import prismaModel from '../../database/prisma/index';
import { ICreatedManager, IManagerWithoutPassword } from '../../entities/IManager';
import { ICreateManagerRepository, IFindManagerByEmail } from '../IManagerRepository';

export default class ManagerRepository implements
ICreateManagerRepository,
IFindManagerByEmail {
  constructor(
    private _model: typeof prismaModel.user,
  ) { }

  async findByEmail(email: string): Promise<ICreatedManager | null> {
    const manager = await this._model.findFirst({ where: { email } });
    return manager;
  }

  async save(manager: ICreatedManager): Promise<IManagerWithoutPassword> {
    const createdManager = await this._model.create({
      data: manager,
    });

    const { password, createdAt, updatedAt, ...userWithoutPassword } = createdManager;
    return userWithoutPassword;
  }
}
