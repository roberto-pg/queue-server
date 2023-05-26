"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveTicketsUseCaseImpl = void 0;
class RemoveTicketsUseCaseImpl {
    constructor(ticketRepository) {
        this.ticketRepository = ticketRepository;
    }
    async call() {
        const result = await this.ticketRepository.removeTickets();
        return result;
    }
}
exports.RemoveTicketsUseCaseImpl = RemoveTicketsUseCaseImpl;
//# sourceMappingURL=remove-tickets.js.map