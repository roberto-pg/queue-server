"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadTicketsUseCaseImpl = void 0;
class LoadTicketsUseCaseImpl {
    constructor(ticketRepository) {
        this.ticketRepository = ticketRepository;
    }
    async call() {
        const tickets = await this.ticketRepository.loadTickets();
        return tickets;
    }
}
exports.LoadTicketsUseCaseImpl = LoadTicketsUseCaseImpl;
//# sourceMappingURL=load_ticket.js.map