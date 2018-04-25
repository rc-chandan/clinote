import * as os from 'os';

import eventTypes from '../events/eventTypes';
import events from '../events';
import { checkOsSupport, getConfiguration, IConfig } from '../utils';

export async function initiateSession() {
  checkOsSupport(os.type());
  const { uid, homedir } = os.userInfo();
  const config = await getConfiguration(uid, homedir);
  startApp(config);
}

function startApp({ dbFilePath }: IConfig) {
  events.emit(eventTypes.GET_ALL_NOTES);
}

function encrypt(passphrase: string) {
  // encreypt the database here.
}
