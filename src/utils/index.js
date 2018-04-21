const os = require('os');
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp-promise');

const { SUPPORTED_OS, APPLICATION_NAME } = require('../constants');
const { getEncryptionDetails } = require('./cliutil');

async function createCofigForUser(uid, configFile) {
    const { encrypt, passphrase } = await getEncryptionDetails()
    const configFileDir = path.dirname(configFile);
    const dbFilePath = `${configFileDir}/notes_${uid}.db`;
    await mkdirp(configFileDir);
    fs.writeFileSync(dbFilePath, `${APPLICATION_NAME} database file`);
    const configObj = { uid, encrypt, passphrase, dbFilePath };
    fs.writeFileSync(configFile, JSON.stringify(configObj), {encoding: 'utf8'});
    return configObj;
}

function checkOSSupport() {
    if(SUPPORTED_OS.includes(os.type())) return;   
    console.error(`${os.type()} is not supported by ${APPLICATION_NAME}, supported OS list: ${SUPPORTED_OS}`);
}

async function getConfiguration(uid, homedir) {
    const configFile = `${homedir}/.${APPLICATION_NAME}/${uid}/config.json`;
    let configJson;
    if(!fs.existsSync(configFile)) {
        configJson = await createCofigForUser(uid, configFile);
        console.log(`${APPLICATION_NAME} configurations saved :)`);
    }
    configJson = JSON.parse(fs.readFileSync(configFile, {encoding: 'utf8'}));
    return configJson;
}

module.exports = {
    checkOSSupport,
    getConfiguration
}