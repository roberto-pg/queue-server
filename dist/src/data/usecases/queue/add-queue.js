"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddQueueUseCaseImpl = void 0;
const errors_1 = require("@src/data/errors");
class AddQueueUseCaseImpl {
    constructor(queueRepository) {
        this.queueRepository = queueRepository;
    }
    async call(title, abbreviation, priority) {
        if (typeof priority !== 'number') {
            throw (0, errors_1.customException)('A prioridade deve ser númerica');
        }
        const queue = this.queueRepository.addQueue(title, abbreviation, priority);
        return queue;
    }
}
exports.AddQueueUseCaseImpl = AddQueueUseCaseImpl;
//# sourceMappingURL=add-queue.js.map