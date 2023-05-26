"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveQueueUseCaseImpl = void 0;
class RemoveQueueUseCaseImpl {
    constructor(queueRepository) {
        this.queueRepository = queueRepository;
    }
    async call(id) {
        const result = await this.queueRepository.removeQueueById(id);
        return result;
    }
}
exports.RemoveQueueUseCaseImpl = RemoveQueueUseCaseImpl;
//# sourceMappingURL=remove-queue.js.map