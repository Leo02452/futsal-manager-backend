import { IManager } from '../entities/IManager';
import Manager from '../entities/Manager';

export interface IManagerFactory {
  make(manager: IManager): Manager
}
