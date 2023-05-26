"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTicketCallSequenceController = void 0;
const errors_1 = require("@src/data/errors");
const helpers_1 = require("@src/presentation/helpers");
const view_models_1 = require("@src/presentation/view-models");
class UpdateTicketCallSequenceController {
    constructor(updateCallSequenceUseCase) {
        this.updateCallSequenceUseCase = updateCallSequenceUseCase;
    }
    async handle(request) {
        try {
            if (!request.id) {
                throw (0, errors_1.customException)('Informe o ID do ticket');
            }
            const ticket = await this.updateCallSequenceUseCase.call(request.id, request.callSequence);
            return (0, helpers_1.serverSuccess)(view_models_1.TicketViewModel.map(ticket));
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.UpdateTicketCallSequenceController = UpdateTicketCallSequenceController;
//# sourceMappingURL=update-ticket-call-sequence.js.map