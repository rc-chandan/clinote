import * as os from "os";

import * as databaseUtil from "../database/index";
import EVENTS from "../events/eventTypes";
import emitter from "../events/index";
import { checkOSSupport, Config, getConfiguration } from "../utils/index";

export async function initiateSession() {
  checkOSSupport();
  const { uid, homedir } = os.userInfo();
  const config = await getConfiguration(uid, homedir);
  startApp(config);
}

function startApp({ dbFilePath }: Config) {
  databaseUtil.connect(dbFilePath);
  emitter.emit(EVENTS.GET_ALL_NOTES);
  // cliUtil.attachEventListners(eventListners)
}

function encrypt(passphrase: string) {
  // encreypt the database here.
}
