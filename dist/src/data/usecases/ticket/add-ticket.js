"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTicketUseCaseImpl = void 0;
const errors_1 = require("@src/data/errors");
class AddTicketUseCaseImpl {
    constructor(ticketRepository) {
        this.ticketRepository = ticketRepository;
    }
    async call(queueId, position, timestamp, status, queueAbb) {
        if (status !== 'waiting' &&
            status !== 'called' &&
            status !== 'beingAttended' &&
            status !== 'notFound' &&
            status !== 'finished') {
            throw (0, errors_1.customException)('Status inválido');
        }
        const ticket = await this.ticketRepository.addTicket(queueId, position, timestamp, status, queueAbb);
        return ticket;
    }
}
exports.AddTicketUseCaseImpl = AddTicketUseCaseImpl;
//# sourceMappingURL=add-ticket.js.map