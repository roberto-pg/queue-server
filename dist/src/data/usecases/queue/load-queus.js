"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadQueuesUseCaseImpl = void 0;
class LoadQueuesUseCaseImpl {
    constructor(queueRepository) {
        this.queueRepository = queueRepository;
    }
    async call() {
        const queues = await this.queueRepository.load();
        return queues;
    }
}
exports.LoadQueuesUseCaseImpl = LoadQueuesUseCaseImpl;
//# sourceMappingURL=load-queus.js.map