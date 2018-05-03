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

export enum NoteStatus {
  LIVE,
  COMPLETED,
  ARCHIVED,
}

export interface INote {
  id?: string;
  content: string;
  tags: string[];
  status?: NoteStatus;
  createionDate?: Date;
  updationDate?: Date;
}
