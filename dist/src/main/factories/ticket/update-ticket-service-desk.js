"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTicketServiceDeskController = void 0;
const postgres_1 = require("@src/infra/db/postgres");
const repositories_1 = require("@src/infra/repositories");
const ticket_1 = require("@src/data/usecases/ticket");
const ticket_2 = require("@src/presentation/controllers/ticket");
const updateTicketServiceDeskController = () => {
    const prisma = new postgres_1.PrismaServer();
    const queueRepository = new repositories_1.QueueRepositoryImpl(prisma);
    const ticketRepository = new repositories_1.TicketRepositoryImpl(prisma, queueRepository);
    const updateServiceDeskUseCase = new ticket_1.UpdateTicketServiceDeskUseCaseImpl(ticketRepository);
    return new ticket_2.UpdateTicketServiceDeskController(updateServiceDeskUseCase);
};
exports.updateTicketServiceDeskController = updateTicketServiceDeskController;
//# sourceMappingURL=update-ticket-service-desk.js.map