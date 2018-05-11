import { DB } from '../';
import * as Sequelize from 'sequelize';

enum NoteStatus {
  LIVE,
  COMPLETED,
  ARCHIVED,
}

interface NoteAttributes {
  id?: string;
  content: string;
  tags: string[];
  status?: NoteStatus;
  createionDate?: Date;
  updationDate?: Date;
}

interface NoteInstance extends Sequelize.Instance<NoteAttributes> {
  dataValues: NoteAttributes;
}

const notes = DB.define('note', {});
