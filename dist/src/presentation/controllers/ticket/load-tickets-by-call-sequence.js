"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadTicketsByCallSequenceController = void 0;
const view_models_1 = require("@src/presentation/view-models");
const helpers_1 = require("@src/presentation/helpers");
class LoadTicketsByCallSequenceController {
    constructor(ticketsByCallSequenceUseCase) {
        this.ticketsByCallSequenceUseCase = ticketsByCallSequenceUseCase;
    }
    async handle() {
        try {
            const tickets = await this.ticketsByCallSequenceUseCase.call();
            return (0, helpers_1.serverSuccess)(view_models_1.TicketViewModel.mapCollection(tickets));
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.LoadTicketsByCallSequenceController = LoadTicketsByCallSequenceController;
//# sourceMappingURL=load-tickets-by-call-sequence.js.map