import { ICreatePlayerDTO } from '../providers/implementations/zodValidator/schemas/Player';
import CreatePlayerService from '../services/CreatePlayerService';
import { IHttpRequest, IHttpResponse } from './protocols/IHttp';
import { IRequestValidator } from './protocols/IRequestValidator';

export default class CreatePlayerController {
  constructor(
    private _createPlayerService: CreatePlayerService,
    private _bodyValidator: IRequestValidator,
  ) { }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const dto = await this._bodyValidator.parseAsync(httpRequest.body) as ICreatePlayerDTO;

    await this._createPlayerService.execute(dto);

    return { status: 201, body: { message: 'Player registered!' } };
  }
}
