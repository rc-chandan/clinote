import * as inquirer from 'inquirer';

const prompt = inquirer.createPromptModule();

interface IQuestion {
  message: string;
  name: string;
  type: string;
}

/**
 * @public
 * Gets encryption config from user on first application run
 */
export async function getEncryptionDetails() {
  const questionEncryption: IQuestion = {
    message: 'Do you want to enable encryption',
    name: 'questionEncryption',
    type: 'confirm',
  };
  const questionPassphrase: IQuestion = {
    message: 'Enter passphrase: ',
    name: 'questionPassphrase',
    type: 'password',
  };
  const encryptionRequired: any = await prompt(questionEncryption);
  let passphrase: any;
  if (encryptionRequired.questionEncryption) {
    passphrase = await prompt(questionPassphrase);
  }

  return {
    encrypt: encryptionRequired.questionEncryption,
    passphrase: passphrase.questionPassphrase,
  };
}
