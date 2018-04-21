const os = require('os');
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const inquirer = require('inquirer');

const prompt = inquirer.createPromptModule();
const SUPPORTED_OS = [
    'Linux',
    'Darwin',
    'Windows_NT'
];
const CONFIGURATION_TEMPLATE = {
    uid: '',
    encryption: false,
    passphrase: '',
    dbFilePath: '',
};

function isPlatformSupported() {
    return SUPPORTED_OS.includes(os.type());
}

async function createCofigForUser(uid, configFile) {
    const questionEncryption = {
        type: 'confirm',
        name: 'questionEncryption',
        message: 'Do you want to enable encryption',
    };
    const questionPassphrase = {
        type: 'password',
        name: 'questionPassphrase',
        message: 'Enter passphrase: '
    }
    const encryptionRequired = await prompt(questionEncryption);
    let passphrase;
    if(encryptionRequired.questionEncryption)
        passphrase = await prompt(questionPassphrase);
        
    const configFileDir = path.dirname(configFile);
    mkdirp(configFileDir);
    
    CONFIGURATION_TEMPLATE.uid = uid;
    CONFIGURATION_TEMPLATE.encryption = encryptionRequired.questionEncryption;
    CONFIGURATION_TEMPLATE.passphrase = passphrase.questionPassphrase;
    CONFIGURATION_TEMPLATE.dbFilePath = `${configFileDir}/notes_${uid}.db`;
    
    fs.writeFileSync(configFile, JSON.stringify(CONFIGURATION_TEMPLATE), {encoding: 'utf8'});
    fs.writeFileSync(CONFIGURATION_TEMPLATE.dbFilePath);
    return CONFIGURATION_TEMPLATE;
}

function loadConfig(uid, homedir) {
    let configFile = `${homedir}/.clinote/${uid}/config.json`;
    let configJson;
    if(!fs.existsSync(configFile))
        configJson = createCofigForUser(uid, configFile);
    else
        configJson = JSON.parse(fs.readFileSync(configFile, {encoding: 'utf8'}));
    return configJson;
}
/**
 * @public
 */
function initiateSession() {
    const platform =  os.platform();
    const { uid, homedir } = os.userInfo();
    
    if(!isPlatformSupported(platform))
        console.error(`Operating System not supported, clinotes is only supported on ${SUPPORTED_OS} platforms`);
    
    const config = loadConfig(uid, homedir);
    console.log(config);
    // start session and list note
}

function encrypt(passphrase) {
    // encreypt the database here.
}

module.exports = {
    initiateSession
}