import * as os from 'os';

import * as databaseUtil from '../database/index';
import { checkOSSupport, getConfiguration, Config } from '../utils/index';

export async function initiateSession() {
    checkOSSupport();
    const { uid, homedir } = os.userInfo();
    const config = await getConfiguration(uid, homedir);
    startApp(config);
}

function startApp({ dbFilePath }: Config) {
    databaseUtil.connect(dbFilePath);
    // cliUtil.attachEventListners(eventListners)
}

function encrypt(passphrase: string) {
    // encreypt the database here.
}
