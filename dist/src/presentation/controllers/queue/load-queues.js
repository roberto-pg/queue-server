"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadQueuesController = void 0;
const helpers_1 = require("@src/presentation/helpers");
class LoadQueuesController {
    constructor(loadQueuesUseCase) {
        this.loadQueuesUseCase = loadQueuesUseCase;
    }
    async handle() {
        try {
            const queues = await this.loadQueuesUseCase.call();
            return (0, helpers_1.serverSuccess)(queues);
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.LoadQueuesController = LoadQueuesController;
//# sourceMappingURL=load-queues.js.map