import CreateManagerService from '../services/CreateManagerService';
import { IHttpRequest, IHttpResponse } from './protocols/IHttp';
import { createManagerDTO } from '../providers/implementations/zodValidator/schemas/CreateManager';
import { IRequestValidator } from './protocols/IRequestValidator';

export default class CreateManagerController {
  constructor(
    private _createManagerService: CreateManagerService,
    private _bodyValidator: IRequestValidator,
  ) { }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const dto = await this._bodyValidator.parseAsync(httpRequest.body) as createManagerDTO;
    const token = await this._createManagerService.execute(dto);
    return { status: 201, body: { token } };
  }
}
