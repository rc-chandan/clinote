import * as os from 'os';

import eventTypes from '../events/eventTypes';
import events from '../events';
import { checkOsSupport, getConfiguration } from '../utils';
import { getConnection } from '../database';
import { IConfig } from '../types';
import { Sequelize } from 'sequelize';

export async function initiateSession() {
  checkOsSupport(os.type());
  const { uid, homedir } = os.userInfo();
  const config = await getConfiguration(uid, homedir);
  startApp(config);
}

function startApp({ dbFilePath }: IConfig) {
  const connection: Sequelize = getConnection(dbFilePath);
}
