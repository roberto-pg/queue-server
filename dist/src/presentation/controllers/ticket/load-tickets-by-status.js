"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadTicketsByStatusController = void 0;
const helpers_1 = require("@src/presentation/helpers");
const view_models_1 = require("@src/presentation/view-models");
const errors_1 = require("@src/data/errors");
class LoadTicketsByStatusController {
    constructor(loadTicketsByStatusUseCase) {
        this.loadTicketsByStatusUseCase = loadTicketsByStatusUseCase;
    }
    async handle(request) {
        try {
            if (!request.status) {
                throw (0, errors_1.customException)('Informe o status');
            }
            const tickets = await this.loadTicketsByStatusUseCase.call(request.status);
            return (0, helpers_1.serverSuccess)(view_models_1.TicketViewModel.mapCollection(tickets));
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.LoadTicketsByStatusController = LoadTicketsByStatusController;
//# sourceMappingURL=load-tickets-by-status.js.map