"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadQueuesController = void 0;
const queue_1 = require("@src/data/usecases/queue");
const postgres_1 = require("@src/infra/db/postgres");
const repositories_1 = require("@src/infra/repositories");
const queue_2 = require("@src/presentation/controllers/queue");
const loadQueuesController = () => {
    const prisma = new postgres_1.PrismaServer();
    const queueRepository = new repositories_1.QueueRepositoryImpl(prisma);
    const loadQueuesUseCase = new queue_1.LoadQueuesUseCaseImpl(queueRepository);
    return new queue_2.LoadQueuesController(loadQueuesUseCase);
};
exports.loadQueuesController = loadQueuesController;
//# sourceMappingURL=load-queues-controller.js.map