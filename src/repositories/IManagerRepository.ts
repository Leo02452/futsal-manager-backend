import { ICreatedManager, IManagerWithoutPassword } from '../entities/IManager';

export interface ICreateManagerRepository {
  findByEmail(email: string): Promise<ICreatedManager | null>
  save(manager: ICreatedManager): Promise<IManagerWithoutPassword>
}
