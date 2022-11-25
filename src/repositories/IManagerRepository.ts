import { ICreatedManager, IManager, IManagerWithoutPassword } from '../entities/IManager';

export interface IFindManagerByEmail {
  findByEmail(email: string): Promise<ICreatedManager | null>
}

export interface ICreateManagerRepository extends IFindManagerByEmail {
  save(manager: Omit<IManager, 'id'>): Promise<IManagerWithoutPassword>
}
