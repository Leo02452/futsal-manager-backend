import { ICreateMatchDTO } from '../providers/implementations/zodValidator/schemas/Match';
import { DBMetaInformation, Identifiable } from './GeneralInterfaces';

export interface IMatch extends
  Identifiable,
  ICreateMatchDTO { }

export interface ICreatedMatch extends
  IMatch,
  DBMetaInformation { }
