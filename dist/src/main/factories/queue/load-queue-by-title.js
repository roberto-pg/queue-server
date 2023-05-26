"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadQueueByTitleController = void 0;
const queue_1 = require("@src/data/usecases/queue");
const postgres_1 = require("@src/infra/db/postgres");
const repositories_1 = require("@src/infra/repositories");
const queue_2 = require("@src/presentation/controllers/queue");
const validation_1 = require("@src/validation");
const loadQueueByTitleController = () => {
    const prisma = new postgres_1.PrismaServer();
    const validate = new validation_1.VerifyQueueTitle(prisma);
    const queueRepository = new repositories_1.QueueRepositoryImpl(prisma);
    const loadQueueByTitleUseCase = new queue_1.LoadQueueByTitleUseCaseImpl(queueRepository, validate);
    return new queue_2.LoadQueueByTitleController(loadQueueByTitleUseCase);
};
exports.loadQueueByTitleController = loadQueueByTitleController;
//# sourceMappingURL=load-queue-by-title.js.map