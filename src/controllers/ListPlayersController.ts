import ListPlayersService from '../services/ListPlayersService';
import { IHttpRequest, IHttpResponse } from './protocols/IHttp';

export default class ListPlayersController {
  constructor(
    private _listPlayersService: ListPlayersService,
  ) { }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { teamId } = httpRequest.query as IHttpRequest & { teamId: string };
    const playersList = await this._listPlayersService.execute(teamId);

    return { status: 200, body: playersList };
  }
}
