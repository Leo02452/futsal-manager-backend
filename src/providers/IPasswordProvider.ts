export interface IPasswordEncryptorProvider {
  encrypt(password: string): string
}
