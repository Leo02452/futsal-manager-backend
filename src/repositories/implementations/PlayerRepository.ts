import prismaModel from '../../database/prisma/index';
import { ICreatedPlayer, IPlayer } from '../../entities/IPlayer';
import {
  ICreatePlayerRepository,
  IFindPlayerRepository,
  IListPlayersRepository,
} from '../IPlayerRepository';

export default class PlayerRepository implements
ICreatePlayerRepository,
IListPlayersRepository,
IFindPlayerRepository {
  constructor(
    private _model: typeof prismaModel.player,
  ) { }

  async findByName(name: string, teamId: string): Promise<ICreatedPlayer | null> {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const player = await this._model.findFirst({ where: { name, AND: { teamId } } });
    return player;
  }

  async save(player: IPlayer): Promise<void> {
    await this._model.create({ data: player });
  }

  async getAll(teamId: string): Promise<IPlayer[]> {
    return this._model.findMany({
      where: { id: teamId },
    });
  }

  findByParam(param: string, value: string): Promise<ICreatedPlayer | null> {
    return this._model.findUnique({ where: { [param]: value } });
  }
}
