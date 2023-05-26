"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadTicketByIdController = void 0;
const ticket_1 = require("@src/data/usecases/ticket");
const postgres_1 = require("@src/infra/db/postgres");
const repositories_1 = require("@src/infra/repositories");
const ticket_2 = require("@src/presentation/controllers/ticket");
const validation_1 = require("@src/validation");
const loadTicketByIdController = () => {
    const prisma = new postgres_1.PrismaServer();
    const queueRepository = new repositories_1.QueueRepositoryImpl(prisma);
    const ticketRepository = new repositories_1.TicketRepositoryImpl(prisma, queueRepository);
    const validate = new validation_1.VerifyTicketId(prisma);
    const loadTicketByIdUseCase = new ticket_1.LoadTicketByIdUseCaseImpl(ticketRepository, validate);
    return new ticket_2.LoadTicketByIdController(loadTicketByIdUseCase);
};
exports.loadTicketByIdController = loadTicketByIdController;
//# sourceMappingURL=load-ticket-by-id-controller.js.map