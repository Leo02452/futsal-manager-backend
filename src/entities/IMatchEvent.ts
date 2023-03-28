import { ICreateMatchEventDTO } from '../providers/implementations/zodValidator/schemas/MatchEvent';
import { ConnectForeignKey, Identifiable } from './GeneralInterfaces';

export interface ICreatedMatchEvent extends
  Identifiable,
  ICreateMatchEventDTO { }

export interface IMatchEventToSave {
  id: string
  hasAssist: boolean
  game: string
  event: ConnectForeignKey
  eventPlayer: ConnectForeignKey
  match: ConnectForeignKey
  assistPlayer?: ConnectForeignKey | {
    connect: {
      id: string | undefined
    }
  }
}
