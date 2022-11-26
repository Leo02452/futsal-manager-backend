import { loginDTO } from '../providers/implementations/zodValidator/schemas/Login';
import LoginService from '../services/LoginService';
import { IHttpRequest, IHttpResponse } from './protocols/IHttp';
import { IRequestValidator } from './protocols/IRequestValidator';

export default class LoginController {
  constructor(
    private _loginService: LoginService,
    private _bodyValidator: IRequestValidator,
  ) { }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const dto = await this._bodyValidator.parseAsync(httpRequest.body) as loginDTO;
    const token = await this._loginService.execute(dto);
    return { status: 200, body: { token } };
  }
}
