import * as os from 'os';

import * as databaseUtil from '../database/index';
import eventTypes from '../events/eventTypes';
import events from '../events';
import { checkOSSupport, getConfiguration, IConfig } from '../utils/index';

export async function initiateSession() {
  checkOSSupport();
  const { uid, homedir } = os.userInfo();
  const config = await getConfiguration(uid, homedir);
  startApp(config);
}

function startApp({ dbFilePath }: IConfig) {
  databaseUtil.connect(dbFilePath);
  events.emit(eventTypes.GET_ALL_NOTES);
  // cliUtil.attachEventListners(eventListners)
}

function encrypt(passphrase: string) {
  // encreypt the database here.
}
