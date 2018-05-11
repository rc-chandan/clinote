export interface IConfig {
  uid: number;
  encrypt: boolean;
  passphrase?: string;
  dbFilePath: string;
}

export interface IQuestion {
  message: string;
  name: string;
  type: string;
}
