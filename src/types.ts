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

export interface INote {
  titile: string;
  description: string;
  tags: string[];
  createionDate: Date;
  updationDate: Date;
}

export interface IConnection {
  url: string;
}
