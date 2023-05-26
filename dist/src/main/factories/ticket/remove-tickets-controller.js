"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTicketsController = void 0;
const ticket_1 = require("@src/data/usecases/ticket");
const postgres_1 = require("@src/infra/db/postgres");
const repositories_1 = require("@src/infra/repositories");
const remove_tickets_1 = require("@src/presentation/controllers/ticket/remove-tickets");
const removeTicketsController = () => {
    const prisma = new postgres_1.PrismaServer();
    const queueRepository = new repositories_1.QueueRepositoryImpl(prisma);
    const ticketRepository = new repositories_1.TicketRepositoryImpl(prisma, queueRepository);
    const removeTicketsUseCase = new ticket_1.RemoveTicketsUseCaseImpl(ticketRepository);
    return new remove_tickets_1.RemoveTicketsController(removeTicketsUseCase);
};
exports.removeTicketsController = removeTicketsController;
//# sourceMappingURL=remove-tickets-controller.js.map