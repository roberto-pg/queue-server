"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadQueueByTitleController = void 0;
const helpers_1 = require("@src/presentation/helpers");
class LoadQueueByTitleController {
    constructor(loadByTitleUseCase) {
        this.loadByTitleUseCase = loadByTitleUseCase;
    }
    async handle(request) {
        try {
            const queue = await this.loadByTitleUseCase.call(request.title);
            return (0, helpers_1.serverSuccess)(queue);
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.LoadQueueByTitleController = LoadQueueByTitleController;
//# sourceMappingURL=load-queue-by-title.js.map