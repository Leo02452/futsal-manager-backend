import { ICreatePlayerDTO } from '../providers/implementations/zodValidator/schemas/Player';
import { DBMetaInformation, Identifiable } from './GeneralInterfaces';

export interface IPlayer extends
  ICreatePlayerDTO,
  Identifiable { }

export interface ICreatedPlayer extends
  IPlayer,
  DBMetaInformation { }
