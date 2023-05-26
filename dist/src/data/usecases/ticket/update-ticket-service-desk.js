"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTicketServiceDeskUseCaseImpl = void 0;
class UpdateTicketServiceDeskUseCaseImpl {
    constructor(ticketRepository) {
        this.ticketRepository = ticketRepository;
    }
    async call(id, serviceDesk) {
        const ticket = await this.ticketRepository.updateTicketServiceDesk(id, serviceDesk);
        return ticket;
    }
}
exports.UpdateTicketServiceDeskUseCaseImpl = UpdateTicketServiceDeskUseCaseImpl;
//# sourceMappingURL=update-ticket-service-desk.js.map