export interface IPasswordEncryptorProvider {
  encrypt(password: string): string
}

export interface IPasswordValidatorProvider {
  validate(password: string, hashPassword: string): Promise<boolean>;
}
