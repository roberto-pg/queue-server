"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadTicketsByStatusUseCaseImpl = void 0;
const errors_1 = require("@src/data/errors");
class LoadTicketsByStatusUseCaseImpl {
    constructor(ticketRepository) {
        this.ticketRepository = ticketRepository;
    }
    async call(status) {
        if (status !== 'waiting' &&
            status !== 'called' &&
            status !== 'beingAttended' &&
            status !== 'notFound' &&
            status !== 'finished') {
            throw (0, errors_1.customException)('Status inválido');
        }
        const tickets = await this.ticketRepository.loadTicketsByStatus(status);
        return tickets;
    }
}
exports.LoadTicketsByStatusUseCaseImpl = LoadTicketsByStatusUseCaseImpl;
//# sourceMappingURL=load-tickets-by-status.js.map