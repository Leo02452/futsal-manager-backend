import IdProvider from '../../providers/implementations/IdProviderAdapter';
import PasswordProvider from '../../providers/implementations/PasswordProviderAdapter';

export const idHandler = new IdProvider();
export const passwordHandler = new PasswordProvider();

export default class Manager {
  public id: string;
  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<Manager, 'id'>, id?: string) {
    this.name = props.name;
    this.email = props.email;
    this.password = passwordHandler.encrypt(props.password);

    if (!id) {
      this.id = idHandler.generate();
    } else {
      this.id = id;
    }
  }
}
