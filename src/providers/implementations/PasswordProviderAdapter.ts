import bcrypt from 'bcrypt';
import { IPasswordEncryptorProvider } from '../IPasswordProvider';

export default class PasswordProviderAdapter implements IPasswordEncryptorProvider {
  private _passwordHandler: typeof bcrypt;

  constructor() {
    this._passwordHandler = bcrypt;
  }

  encrypt(password: string): string {
    const salt = this._passwordHandler.genSaltSync(5);
    const hashPassword = this._passwordHandler.hashSync(password, salt);
    return hashPassword;
  }
}
