import { Identifiable } from './GeneralInterfaces';
import { IPlayer } from './IPlayer';

export interface ITeam extends
  Identifiable {
  name: string
  userId: string
  players: IPlayer[]
}
