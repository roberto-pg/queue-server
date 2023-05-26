"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.httpServer = void 0;
require("./util/module-alias");
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const app_1 = require("@src/main/config/app");
const app = (0, app_1.setupApp)();
const httpServer = http_1.default.createServer(app);
exports.httpServer = httpServer;
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: '*',
    },
});
exports.io = io;
io.on('connection', (socket) => {
    console.log(`Usuário conectado no socket ${socket.id}`);
    socket.on('disconnect', () => console.log('Usuário desconectado'));
});
//# sourceMappingURL=server.js.map