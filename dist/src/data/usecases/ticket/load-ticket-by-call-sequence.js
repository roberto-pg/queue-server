"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadTicketsByCallSequenceUseCaseImpl = void 0;
class LoadTicketsByCallSequenceUseCaseImpl {
    constructor(ticketRepository) {
        this.ticketRepository = ticketRepository;
    }
    async call() {
        const tickets = await this.ticketRepository.loadTicketsByCallSequence();
        return tickets;
    }
}
exports.LoadTicketsByCallSequenceUseCaseImpl = LoadTicketsByCallSequenceUseCaseImpl;
//# sourceMappingURL=load-ticket-by-call-sequence.js.map