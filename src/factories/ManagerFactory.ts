/* eslint-disable class-methods-use-this */
import { IManager } from '../entities/IManager';
import Manager from '../entities/Manager';
import { IManagerFactory } from './IManagerFactory';

export default class ManagerFactory implements IManagerFactory {
  make(manager: IManager): Manager {
    return new Manager(manager);
  }
}
