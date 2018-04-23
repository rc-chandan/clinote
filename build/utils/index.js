"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var os = require("os");
var path = require("path");
var fs = require("fs");
var mkdirp = require('mkdirp-promise');
var constants_1 = require("../constants");
var cliutil_1 = require("./cliutil");
;
function createCofigForUser(uid, configFile) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, encrypt, passphrase, configFileDir, dbFilePath, configObj;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, cliutil_1.getEncryptionDetails()];
                case 1:
                    _a = _b.sent(), encrypt = _a.encrypt, passphrase = _a.passphrase;
                    configFileDir = path.dirname(configFile);
                    dbFilePath = configFileDir + "/notes_" + uid + ".db";
                    return [4 /*yield*/, mkdirp(configFileDir)];
                case 2:
                    _b.sent();
                    fs.writeFileSync(dbFilePath, constants_1.APPLICATION_NAME + " database file");
                    configObj = { uid: uid, encrypt: encrypt, passphrase: passphrase, dbFilePath: dbFilePath };
                    fs.writeFileSync(configFile, JSON.stringify(configObj), { encoding: 'utf8' });
                    return [2 /*return*/, configObj];
            }
        });
    });
}
function checkOSSupport() {
    if (constants_1.SUPPORTED_OS.indexOf(os.type()) !== -1)
        return;
    console.error(os.type() + " is not supported by " + constants_1.APPLICATION_NAME + ", supported OS list: " + constants_1.SUPPORTED_OS);
}
exports.checkOSSupport = checkOSSupport;
function getConfiguration(uid, homedir) {
    return __awaiter(this, void 0, void 0, function () {
        var configFile, configJson;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    configFile = homedir + "/." + constants_1.APPLICATION_NAME + "/" + uid + "/config.json";
                    if (!!fs.existsSync(configFile)) return [3 /*break*/, 2];
                    return [4 /*yield*/, createCofigForUser(uid, configFile)];
                case 1:
                    configJson = _a.sent();
                    console.log(constants_1.APPLICATION_NAME + " configurations saved :)");
                    _a.label = 2;
                case 2:
                    configJson = JSON.parse(fs.readFileSync(configFile, { encoding: 'utf8' }));
                    return [2 /*return*/, configJson];
            }
        });
    });
}
exports.getConfiguration = getConfiguration;
