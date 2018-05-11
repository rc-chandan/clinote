import * as os from 'os';

import eventTypes from '../events/eventTypes';
import events from '../events';
import { checkOsSupport, getConfiguration } from '../utils';
import { getConnection } from '../database';
import { IConfig } from '../types';
import { Sequelize } from 'sequelize';

export async function startApp() {
  checkOsSupport(os.type());
  const { uid, homedir } = os.userInfo();
  const config = await getConfiguration(uid, homedir);
  run(config);
}

function run({ dbFilePath }: IConfig) {
  const db = getConnection(dbFilePath);
  db.sync();
}
