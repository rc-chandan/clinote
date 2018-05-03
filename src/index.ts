const figlet = require('figlet');

import { initiateSession } from './app';

const APPLICATION_BANNER_TEXT = 'clinote';
const APPLICATION_VERSION = '1.0.0';

const fontConfig = {
  font: 'big',
  horizontalLayout: 'default',
  verticalLayout: 'default',
};

const handleFigletResponse = (error: Error, asciiArt: string): void =>
  console.log(
    error
      ? `${APPLICATION_BANNER_TEXT} v${APPLICATION_VERSION}`
      : `${asciiArt} v${APPLICATION_VERSION}`,
  );

figlet(APPLICATION_BANNER_TEXT, fontConfig, handleFigletResponse);

initiateSession();
