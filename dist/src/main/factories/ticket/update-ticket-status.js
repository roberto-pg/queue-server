"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTicketStatusController = void 0;
const ticket_1 = require("@src/data/usecases/ticket");
const postgres_1 = require("@src/infra/db/postgres");
const repositories_1 = require("@src/infra/repositories");
const ticket_2 = require("@src/presentation/controllers/ticket");
const updateTicketStatusController = () => {
    const prisma = new postgres_1.PrismaServer();
    const queueRepository = new repositories_1.QueueRepositoryImpl(prisma);
    const ticketRepository = new repositories_1.TicketRepositoryImpl(prisma, queueRepository);
    const updateTicketStatus = new ticket_1.UpdateTicketStatusUseCaseImpl(ticketRepository);
    return new ticket_2.UpdateTicketStatusController(updateTicketStatus);
};
exports.updateTicketStatusController = updateTicketStatusController;
//# sourceMappingURL=update-ticket-status.js.map