"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadTicketsController = void 0;
const helpers_1 = require("@src/presentation/helpers");
const view_models_1 = require("@src/presentation/view-models");
class LoadTicketsController {
    constructor(loadTicketsUseCase) {
        this.loadTicketsUseCase = loadTicketsUseCase;
    }
    async handle() {
        try {
            const tickets = await this.loadTicketsUseCase.call();
            return (0, helpers_1.serverSuccess)(view_models_1.TicketViewModel.mapCollection(tickets));
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.LoadTicketsController = LoadTicketsController;
//# sourceMappingURL=load-tickets.js.map