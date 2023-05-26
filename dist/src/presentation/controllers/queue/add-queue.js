"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddQueueController = void 0;
const errors_1 = require("@src/data/errors");
const helpers_1 = require("@src/presentation/helpers");
class AddQueueController {
    constructor(addQueue) {
        this.addQueue = addQueue;
    }
    async handle(request) {
        try {
            if (!request.title) {
                throw (0, errors_1.customException)('Informe o título');
            }
            if (!request.abbreviation) {
                throw (0, errors_1.customException)('Informe a abreviação');
            }
            if (!request.priority) {
                throw (0, errors_1.customException)('Informe a prioridade');
            }
            const queue = await this.addQueue.call(request.title, request.abbreviation, request.priority);
            return (0, helpers_1.serverSuccess)(queue);
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.AddQueueController = AddQueueController;
//# sourceMappingURL=add-queue.js.map