"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const env_1 = require("@src/main/config/env");
server_1.httpServer.listen(env_1.env.port, () => console.log(`Server started at Port ${env_1.env.port}`));
//# sourceMappingURL=app.js.map