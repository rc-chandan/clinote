import * as fs from 'fs';
import * as path from 'path';

const mkdirp = require('mkdirp-promise');

import { APPLICATION_NAME, SUPPORTED_OS } from '../constants';
import { getEncryptionDetails } from './cliutil';

export interface IConfig {
  uid: number;
  encrypt: boolean;
  passphrase: string;
  dbFilePath: string;
}

async function createCofigForUser(
  uid: number,
  configFile: string,
): Promise<IConfig> {
  const { encrypt, passphrase } = await getEncryptionDetails();
  const configFileDir = path.dirname(configFile);
  const dbFilePath = `${configFileDir}/notes_${uid}.db`;
  await mkdirp(configFileDir);
  fs.writeFileSync(dbFilePath, `${APPLICATION_NAME} database file`);
  const configObj = { uid, encrypt, passphrase, dbFilePath };
  fs.writeFileSync(configFile, JSON.stringify(configObj), { encoding: 'utf8' });
  return configObj;
}

export function checkOsSupport(osType: string): boolean {
  if (SUPPORTED_OS.indexOf(osType) !== -1) {
    return true;
  }
  throw new Error(`${osType} is not supported by ${APPLICATION_NAME},` + 
  `supported OS list: ${SUPPORTED_OS}`);
}

export async function getConfiguration(
  uid: number,
  homedir: string,
): Promise<IConfig> {
  const configFile = `${homedir}/.${APPLICATION_NAME}/${uid}/config.json`;
  let configJson;
  if (!fs.existsSync(configFile)) {
    configJson = await createCofigForUser(uid, configFile);
  }
  configJson = JSON.parse(fs.readFileSync(configFile, { encoding: 'utf8' }));
  return configJson;
}
