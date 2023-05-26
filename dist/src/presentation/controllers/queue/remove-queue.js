"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveQueueController = void 0;
const helpers_1 = require("@src/presentation/helpers");
class RemoveQueueController {
    constructor(deleteQueueUseCase) {
        this.deleteQueueUseCase = deleteQueueUseCase;
    }
    async handle(request) {
        try {
            const queueId = await this.deleteQueueUseCase.call(request.id);
            return (0, helpers_1.serverSuccess)(queueId);
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.RemoveQueueController = RemoveQueueController;
//# sourceMappingURL=remove-queue.js.map