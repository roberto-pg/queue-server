"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyQueueTitle = void 0;
class VerifyQueueTitle {
    constructor(prismaServer) {
        this.prismaServer = prismaServer;
    }
    async verifyQueueTitle(title) {
        const queue = await this.prismaServer.connectPrisma().queue.findFirst({
            where: {
                title,
            },
        });
        return queue;
    }
}
exports.VerifyQueueTitle = VerifyQueueTitle;
//# sourceMappingURL=verify-queue-title.js.map