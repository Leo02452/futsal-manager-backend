import { ICreatedPlayer, IPlayer } from '../entities/IPlayer';

export interface ICreatePlayerRepository {
  findByName(name: string, teamId: string): Promise<ICreatedPlayer | null>
  save(player: IPlayer): Promise<void>
}
