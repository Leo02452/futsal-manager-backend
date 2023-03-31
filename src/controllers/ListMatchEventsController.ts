import ListMatchEventsService from '../services/ListMatchEventsService';
import { IHttpRequest, IHttpResponse } from './protocols/IHttp';

export default class ListMatchEventsController {
  constructor(
    private _listMatchEventsService: ListMatchEventsService,
  ) { }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { matchId, game } = httpRequest.query as {
      matchId: string
      game: string
    };
    const matchEventsList = await this._listMatchEventsService.execute(matchId, game);

    return { status: 200, body: matchEventsList };
  }
}
