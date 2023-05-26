"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadQueueByTitleUseCaseImpl = void 0;
const errors_1 = require("@src/data/errors");
class LoadQueueByTitleUseCaseImpl {
    constructor(queueRepository, validate) {
        this.queueRepository = queueRepository;
        this.validate = validate;
    }
    async call(title) {
        const queueTitle = await this.validate.verifyQueueTitle(title);
        if (!queueTitle) {
            throw (0, errors_1.customException)('A fila não existe');
        }
        const queue = await this.queueRepository.loadByTitle(title);
        return queue;
    }
}
exports.LoadQueueByTitleUseCaseImpl = LoadQueueByTitleUseCaseImpl;
//# sourceMappingURL=load-queue-by-title.js.map