import { IDeleteMatchEventRepository } from '../repositories/IMatchEventRepository';

export default class DeleteMatchEventService {
  constructor(
    private _matchEventRepository: IDeleteMatchEventRepository,
  ) { }

  async execute(id: string): Promise<void> {
    await this._matchEventRepository.delete(id);
  }
}
