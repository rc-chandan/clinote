"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./app/index");
var BANNER_TEXT = " ██████╗██╗     ██╗███╗   ██╗ ██████╗ ████████╗███████╗ \n" +
    "██╔════╝██║     ██║████╗  ██║██╔═══██╗╚══██╔══╝██╔════╝\n" +
    "██║     ██║     ██║██╔██╗ ██║██║   ██║   ██║   █████╗  \n" +
    "██║     ██║     ██║██║╚██╗██║██║   ██║   ██║   ██╔══╝  \n" +
    "╚██████╗███████╗██║██║ ╚████║╚██████╔╝   ██║   ███████╗\n" +
    " ╚═════╝╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝    ╚═╝   ╚══════╝\n" +
    "(v0.0.1) Commandline note taking app";
console.log(BANNER_TEXT);
index_1.initiateSession();
