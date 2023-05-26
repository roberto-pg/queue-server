"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveTicketsController = void 0;
const helpers_1 = require("@src/presentation/helpers");
class RemoveTicketsController {
    constructor(removeTicketsUseCase) {
        this.removeTicketsUseCase = removeTicketsUseCase;
    }
    async handle() {
        try {
            const result = await this.removeTicketsUseCase.call();
            return (0, helpers_1.serverSuccess)(result);
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.RemoveTicketsController = RemoveTicketsController;
//# sourceMappingURL=remove-tickets.js.map