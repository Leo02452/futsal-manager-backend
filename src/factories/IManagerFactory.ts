import { IManager } from '../entities/IManager';
import Manager from '../entities/implementations/Manager';

export interface IManagerFactory {
  make(manager: IManager): Manager
}
