import BcryptPasswordProvider from '../providers/implementations/BcryptPasswordProvider';
import UuidProvider from '../providers/implementations/UuidProvider';

export const idHandler = new UuidProvider();
export const passwordHandler = new BcryptPasswordProvider();

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
