"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTicketCallSequenceController = void 0;
const postgres_1 = require("@src/infra/db/postgres");
const repositories_1 = require("@src/infra/repositories");
const ticket_1 = require("@src/data/usecases/ticket");
const ticket_2 = require("@src/presentation/controllers/ticket");
const updateTicketCallSequenceController = () => {
    const prisma = new postgres_1.PrismaServer();
    const queueRepository = new repositories_1.QueueRepositoryImpl(prisma);
    const ticketRepository = new repositories_1.TicketRepositoryImpl(prisma, queueRepository);
    const updateCallSequenceUseCase = new ticket_1.UpdateTicketCallSequenceUseCaseImpl(ticketRepository);
    return new ticket_2.UpdateTicketCallSequenceController(updateCallSequenceUseCase);
};
exports.updateTicketCallSequenceController = updateTicketCallSequenceController;
//# sourceMappingURL=update-ticket-call-sequence.js.map