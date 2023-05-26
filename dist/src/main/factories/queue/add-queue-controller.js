"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addQueueController = void 0;
const queue_1 = require("@src/data/usecases/queue");
const postgres_1 = require("@src/infra/db/postgres");
const repositories_1 = require("@src/infra/repositories");
const queue_2 = require("@src/presentation/controllers/queue");
const addQueueController = () => {
    const prisma = new postgres_1.PrismaServer();
    const queueRepository = new repositories_1.QueueRepositoryImpl(prisma);
    const queueAdd = new queue_1.AddQueueUseCaseImpl(queueRepository);
    return new queue_2.AddQueueController(queueAdd);
};
exports.addQueueController = addQueueController;
//# sourceMappingURL=add-queue-controller.js.map