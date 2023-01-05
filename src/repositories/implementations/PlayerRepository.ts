import prismaModel from '../../database/prisma/index';
import { ICreatedPlayer, IPlayer } from '../../entities/IPlayer';
import { ICreatePlayerRepository } from '../IPlayerRepository';

export default class PlayerRepository implements
ICreatePlayerRepository {
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
}
