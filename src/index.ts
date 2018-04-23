import { initiateSession } from './app/index';

const BANNER_TEXT: string =
    " ██████╗██╗     ██╗███╗   ██╗ ██████╗ ████████╗███████╗ \n" +
    "██╔════╝██║     ██║████╗  ██║██╔═══██╗╚══██╔══╝██╔════╝\n" +
    "██║     ██║     ██║██╔██╗ ██║██║   ██║   ██║   █████╗  \n" +
    "██║     ██║     ██║██║╚██╗██║██║   ██║   ██║   ██╔══╝  \n" +
    "╚██████╗███████╗██║██║ ╚████║╚██████╔╝   ██║   ███████╗\n" +
    " ╚═════╝╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝    ╚═╝   ╚══════╝\n" +
    "(v0.0.1) Commandline note taking app";

console.log(BANNER_TEXT);

initiateSession();