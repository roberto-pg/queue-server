"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("@src/main/adapters");
const queue_1 = require("@src/main/factories/queue");
exports.default = (router) => {
    router.post('/create-queue', (0, adapters_1.adaptRoute)((0, queue_1.addQueueController)()));
    router.get('/queues', (0, adapters_1.adaptRoute)((0, queue_1.loadQueuesController)()));
    router.get('/queue-by-title/:title', (0, adapters_1.adaptRoute)((0, queue_1.loadQueueByTitleController)()));
    router.delete('/delete/:id', (0, adapters_1.adaptRoute)((0, queue_1.removeQueueController)()));
};
//# sourceMappingURL=queue.js.map