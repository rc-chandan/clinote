import * as Sequelize from 'sequelize';

export function getConnection(dbFilePath: string): Sequelize.Sequelize {
  const sequelize = new Sequelize('clinote', '', '', {
    dialect: 'sqlite',
    storage: dbFilePath,
  });

  sequelize
    .authenticate()
    .then(connection => console.info('authenticated'))
    .catch(error => console.error(error));

  return sequelize;
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

// export function connect(dbFilePath: string): Connection {
//   return {};
// }
