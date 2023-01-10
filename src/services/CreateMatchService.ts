import { IMatchFactory } from '../factories/IMatchFactory';
import { ICreateMatchDTO } from '../providers/implementations/zodValidator/schemas/Match';
import { ICreateMatchRepository } from '../repositories/IMatchRepository';
import { IFindTeamByIdRepository } from '../repositories/ITeamRepository';

export default class CreateMatchService {
  constructor(
    private _teamRepository: IFindTeamByIdRepository,
    private _matchRepository: ICreateMatchRepository,
    private _matchFactory: IMatchFactory,
  ) { }

  async execute(data: ICreateMatchDTO): Promise<string> {
    const team = await this._teamRepository.findById(data.teamId);

    if (!team) throw new Error('Time');

    const createdMatch = this._matchFactory.make(data);

    await this._matchRepository.save(createdMatch);

    return createdMatch.id;
  }
}
