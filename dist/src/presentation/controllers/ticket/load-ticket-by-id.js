"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadTicketByIdController = void 0;
const helpers_1 = require("@src/presentation/helpers");
const view_models_1 = require("@src/presentation/view-models");
class LoadTicketByIdController {
    constructor(loadTicketByIdUseCase) {
        this.loadTicketByIdUseCase = loadTicketByIdUseCase;
    }
    async handle(request) {
        try {
            const ticket = await this.loadTicketByIdUseCase.call(request.id);
            return (0, helpers_1.serverSuccess)(view_models_1.TicketViewModel.map(ticket));
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.LoadTicketByIdController = LoadTicketByIdController;
//# sourceMappingURL=load-ticket-by-id.js.map