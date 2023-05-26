"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTicketStatusUseCaseImpl = void 0;
const errors_1 = require("@src/data/errors");
class UpdateTicketStatusUseCaseImpl {
    constructor(ticketRepository) {
        this.ticketRepository = ticketRepository;
    }
    async call(id, status) {
        if (status !== 'waiting' &&
            status !== 'called' &&
            status !== 'beingAttended' &&
            status !== 'notFound' &&
            status !== 'finished') {
            throw (0, errors_1.customException)('Status inválido');
        }
        const ticket = await this.ticketRepository.updateTicketStatus(id, status);
        return ticket;
    }
}
exports.UpdateTicketStatusUseCaseImpl = UpdateTicketStatusUseCaseImpl;
//# sourceMappingURL=update-ticket-status.js.map