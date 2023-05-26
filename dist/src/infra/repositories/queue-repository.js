"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueRepositoryImpl = void 0;
const server_1 = require("@src/main/server");
class QueueRepositoryImpl {
    constructor(prismaServer) {
        this.prismaServer = prismaServer;
    }
    async addQueue(title, abbreviation, priority) {
        const queue = await this.prismaServer.connectPrisma().queue.create({
            data: {
                title,
                abbreviation,
                priority,
            },
        });
        await this.load();
        return queue;
    }
    async load() {
        const queues = await this.prismaServer.connectPrisma().queue.findMany({
            orderBy: {
                priority: 'desc',
            },
            include: {
                tickets: {
                    orderBy: {
                        timestamp: 'asc',
                    },
                },
            },
        });
        server_1.io.emit('load_queues', queues);
        return queues;
    }
    async loadByTitle(title) {
        const queue = await this.prismaServer.connectPrisma().queue.findFirst({
            where: {
                title,
            },
            include: {
                tickets: true,
            },
        });
        return queue;
    }
    async removeQueueById(id) {
        const queue = await this.prismaServer.connectPrisma().queue.delete({
            where: {
                id,
            },
        });
        await this.load();
        return queue.id;
    }
}
exports.QueueRepositoryImpl = QueueRepositoryImpl;
//# sourceMappingURL=queue-repository.js.map