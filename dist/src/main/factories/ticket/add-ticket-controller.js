"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTicketController = void 0;
const postgres_1 = require("@src/infra/db/postgres");
const repositories_1 = require("@src/infra/repositories");
const ticket_1 = require("@src/data/usecases/ticket");
const ticket_2 = require("@src/presentation/controllers/ticket");
const addTicketController = () => {
    const prisma = new postgres_1.PrismaServer();
    const queueRepository = new repositories_1.QueueRepositoryImpl(prisma);
    const ticketRepository = new repositories_1.TicketRepositoryImpl(prisma, queueRepository);
    const ticketAdd = new ticket_1.AddTicketUseCaseImpl(ticketRepository);
    return new ticket_2.AddTicketController(ticketAdd);
};
exports.addTicketController = addTicketController;
//# sourceMappingURL=add-ticket-controller.js.map