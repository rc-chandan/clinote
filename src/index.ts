import { initiateSession } from './app';

const BANNER_TEXT: string =
  ' ██████╗██╗     ██╗███╗   ██╗ ██████╗ ████████╗███████╗ \n' +
  '██╔════╝██║     ██║████╗  ██║██╔═══██╗╚══██╔══╝██╔════╝ \n' +
  '██║     ██║     ██║██╔██╗ ██║██║   ██║   ██║   █████╗   \n' +
  '██║     ██║     ██║██║╚██╗██║██║   ██║   ██║   ██╔══╝   \n' +
  '╚██████╗███████╗██║██║ ╚████║╚██████╔╝   ██║   ███████╗ \n' +
  ' ╚═════╝╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝    ╚═╝   ╚══════╝ \n' +
  '(v0.0.1) Commandline note taking app';

/* tslint:disable-next-line: no-console */
console.log(BANNER_TEXT);

initiateSession();
