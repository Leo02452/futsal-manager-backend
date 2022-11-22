import { JwtPayload } from 'jsonwebtoken';

export interface ICreatedManager {
  id: string
  name: string
  email: string
  password: string
}

export interface IManager {
  id?: string
  name: string
  email: string
  password: string
}

export type IManagerWithoutPassword = Omit<ICreatedManager, 'password'>;

export interface IManagerTokenPayload extends JwtPayload, IManagerWithoutPassword { }
