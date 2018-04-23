import * as inquirer from "inquirer";

const prompt = inquirer.createPromptModule();

type Question = {
    type: string,
    name: string,
    message: string,
};

/**
 * @public
 * Gets encryption config from user on first application run
 */
export async function getEncryptionDetails() {
    const questionEncryption: Question = {
        type: "confirm",
        name: "questionEncryption",
        message: "Do you want to enable encryption",
    };
    const questionPassphrase: Question = {
        type: "password",
        name: "questionPassphrase",
        message: "Enter passphrase: "
    }
    const encryptionRequired: any = await prompt(questionEncryption);
    let passphrase: any;
    if(encryptionRequired.questionEncryption)
        passphrase = await prompt(questionPassphrase);
    
    return {
        encrypt: encryptionRequired.questionEncryption,
        passphrase: passphrase.questionPassphrase
    };
}