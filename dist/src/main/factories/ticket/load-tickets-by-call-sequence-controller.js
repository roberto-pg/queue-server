"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadTicketsByCallSequenceController = void 0;
const ticket_1 = require("@src/data/usecases/ticket");
const postgres_1 = require("@src/infra/db/postgres");
const repositories_1 = require("@src/infra/repositories");
const ticket_2 = require("@src/presentation/controllers/ticket");
const loadTicketsByCallSequenceController = () => {
    const prisma = new postgres_1.PrismaServer();
    const queueRepository = new repositories_1.QueueRepositoryImpl(prisma);
    const ticketRepository = new repositories_1.TicketRepositoryImpl(prisma, queueRepository);
    const loadTicketsByCallSequenceUseCase = new ticket_1.LoadTicketsByCallSequenceUseCaseImpl(ticketRepository);
    return new ticket_2.LoadTicketsByCallSequenceController(loadTicketsByCallSequenceUseCase);
};
exports.loadTicketsByCallSequenceController = loadTicketsByCallSequenceController;
//# sourceMappingURL=load-tickets-by-call-sequence-controller.js.map