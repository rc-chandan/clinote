// @ts-check

const os = require('os');
import * as clinoteDB from '../database';

const { checkOSSupport, getConfiguration } = require('../utils');

async function initiateSession() {
    checkOSSupport();
    const { uid, homedir } = os.userInfo();
    const config = await getConfiguration(uid, homedir);
    startApp(config);
}

function startApp({ dbFilePath }) {
    clinoteDB.connect(dbFilePath);
    // cliUtil.attachEventListners(eventListners)
}

function encrypt(passphrase) {
    // encreypt the database here.
}

module.exports = {
    initiateSession
}