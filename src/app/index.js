const os = require('os');
const clinoteDB = require('./database');

const { checkOSSupport, getConfiguration } = require('../utils');

async function initiateSession() {
    checkOSSupport();
    const { uid, homedir } = os.userInfo();
    const config = await getConfiguration(uid, homedir);
    startApp(config);
}

function startApp({ dbFilePath }) {
    clinoteDB.connect(dbFilePath);
}

function encrypt(passphrase) {
    // encreypt the database here.
}

module.exports = {
    initiateSession
}