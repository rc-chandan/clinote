const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();

/**
 * @public
 * Gets encryption config from user on first application run
 */
async function getEncryptionDetails() {
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
    
    return {
        encrypt: encryptionRequired.questionEncryption,
        passphrase: passphrase.questionPassphrase
    };
}

module.exports = {
    getEncryptionDetails
}