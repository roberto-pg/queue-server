"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTicketCallSequenceUseCaseImpl = void 0;
class UpdateTicketCallSequenceUseCaseImpl {
    constructor(ticketRepository) {
        this.ticketRepository = ticketRepository;
    }
    async call(id, callSequence) {
        const ticket = await this.ticketRepository.updateTicketCallSequence(id, callSequence);
        return ticket;
    }
}
exports.UpdateTicketCallSequenceUseCaseImpl = UpdateTicketCallSequenceUseCaseImpl;
//# sourceMappingURL=update-ticket-call-sequence.js.map