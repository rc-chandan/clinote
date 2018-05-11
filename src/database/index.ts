import * as Sequelize from 'sequelize';

export let DB: Sequelize.Sequelize;

// establish a db connection to given sqlite db file path
export function getConnection(dbFilePath: string): Sequelize.Sequelize {
  const connection = new Sequelize('clinote', '', '', {
    dialect: 'sqlite',
    storage: dbFilePath,
  });
  DB = connection;
  return DB;
}

// export function getAllNotesForUser(uid: number): INote[] {
//   return [];
// }

// export function getNoteById(noteId: string): INote {
//   return {};
// }

// export function createNote(note: INote): INote {
//   return {};
// }

// export function updateNote(note: INote): INote {
//   return {};
// }

// export function deleteNote(note: INote): INote {
//   return {};
// }
