"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTicketStatusController = void 0;
const helpers_1 = require("@src/presentation/helpers");
const view_models_1 = require("@src/presentation/view-models");
const errors_1 = require("@src/data/errors");
class UpdateTicketStatusController {
    constructor(updateTicketStatus) {
        this.updateTicketStatus = updateTicketStatus;
    }
    async handle(request) {
        try {
            if (!request.id) {
                throw (0, errors_1.customException)('Informe o ID do ticket');
            }
            if (!request.status) {
                throw (0, errors_1.customException)('Informe o novo status');
            }
            const ticket = await this.updateTicketStatus.call(request.id, request.status);
            return (0, helpers_1.serverSuccess)(view_models_1.TicketViewModel.map(ticket));
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.UpdateTicketStatusController = UpdateTicketStatusController;
//# sourceMappingURL=update-ticket-status.js.map