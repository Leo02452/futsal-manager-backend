import ListEventsService from '../services/ListEventsService';
import { IHttpResponse } from './protocols/IHttp';

export default class ListEventsController {
  constructor(
    private _listEventsService: ListEventsService,
  ) { }

  async handle(): Promise<IHttpResponse> {
    const eventsList = await this._listEventsService.execute();

    return { status: 201, body: eventsList };
  }
}
