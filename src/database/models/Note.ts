import * as Sequelize from 'sequelize';

import { NoteStatus, INote } from '../../types';

type NoteInstance = Sequelize.Instance<INote> & INote;
function createNoteModel(sequelize: Sequelize.Sequelize) {}
export default createNoteModel;
