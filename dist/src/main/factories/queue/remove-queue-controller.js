"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeQueueController = void 0;
const queue_1 = require("@src/data/usecases/queue");
const postgres_1 = require("@src/infra/db/postgres");
const repositories_1 = require("@src/infra/repositories");
const queue_2 = require("@src/presentation/controllers/queue");
const removeQueueController = () => {
    const prisma = new postgres_1.PrismaServer();
    const queueRepository = new repositories_1.QueueRepositoryImpl(prisma);
    const removeQueueUseCase = new queue_1.RemoveQueueUseCaseImpl(queueRepository);
    return new queue_2.RemoveQueueController(removeQueueUseCase);
};
exports.removeQueueController = removeQueueController;
//# sourceMappingURL=remove-queue-controller.js.map