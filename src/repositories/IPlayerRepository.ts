import { ICreatedPlayer, IPlayer } from '../entities/IPlayer';

export interface ICreatePlayerRepository {
  findByName(name: string, teamId: string): Promise<ICreatedPlayer | null>
  save(player: IPlayer): Promise<void>
}

export interface IListPlayersRepository {
  getAll(teamId: string): Promise<IPlayer[]>
}

export interface IFindPlayerRepository {
  findByParam(param: string, value: string): Promise<ICreatedPlayer | null>
}
