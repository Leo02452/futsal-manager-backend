import { ICreateMatchDTO } from '../providers/implementations/zodValidator/schemas/Match';
import { Identifiable } from './GeneralInterfaces';

export interface IMatch extends
  Identifiable,
  ICreateMatchDTO { }

export interface ICreatedMatch extends
  IMatch {
  updatedAt: Date
}
