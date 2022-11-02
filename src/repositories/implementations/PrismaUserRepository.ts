import { PrismaClient } from '@prisma/client';
import { ICreatedManager, IManagerWithoutPassword } from '../../entities/IManager';
import { ICreateManagerRepository } from '../IManagerRepository';

const prismaModel = new PrismaClient();

export default class PrismaManagerRepository implements ICreateManagerRepository {
  private _model: typeof prismaModel.user;

  constructor() {
    this._model = prismaModel.user;
  }

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
