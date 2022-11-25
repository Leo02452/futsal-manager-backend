import { JwtPayload } from 'jsonwebtoken';

export interface ICreatedManager {
  id: string
  name: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
}

export interface IManager {
  id?: string
  name: string
  email: string
  password: string
}

export type IManagerWithoutPassword = Omit<IManager, 'password'>;

export interface IManagerTokenPayload extends JwtPayload, IManagerWithoutPassword { }
