import { ICreateMatchDTO } from '../providers/implementations/zodValidator/schemas/Match';
import CreateMatchService from '../services/CreateMatchService';
import { IHttpRequest, IHttpResponse } from './protocols/IHttp';
import { IRequestValidator } from './protocols/IRequestValidator';

export default class CreateMatchController {
  constructor(
    private _createMatchService: CreateMatchService,
    private _bodyValidator: IRequestValidator,
  ) { }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const dto = await this._bodyValidator.parseAsync(httpRequest.body) as ICreateMatchDTO;
    const matchId = await this._createMatchService.execute(dto);
    return { status: 201, body: { id: matchId } };
  }
}
