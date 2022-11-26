import bcrypt from 'bcrypt';
import { IPasswordEncryptorProvider, IPasswordValidatorProvider } from '../IPasswordProvider';

export default class PasswordProviderAdapter implements
IPasswordEncryptorProvider,
IPasswordValidatorProvider {
  private _passwordHandler: typeof bcrypt;

  constructor() {
    this._passwordHandler = bcrypt;
  }

  encrypt(password: string): string {
    const salt = this._passwordHandler.genSaltSync(5);
    const hashPassword = this._passwordHandler.hashSync(password, salt);
    return hashPassword;
  }

  async validate(password: string, hashPassword: string): Promise<boolean> {
    const isCorrectPassword = await this._passwordHandler.compare(password, hashPassword);

    return isCorrectPassword;
  }
}
