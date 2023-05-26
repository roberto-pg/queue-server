"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketRepositoryImpl = void 0;
const server_1 = require("@src/main/server");
const view_models_1 = require("@src/presentation/view-models");
class TicketRepositoryImpl {
    constructor(prismaServer, queueRepository) {
        this.prismaServer = prismaServer;
        this.queueRepository = queueRepository;
    }
    async addTicket(queueId, position, timestamp, status, queueAbb) {
        const ticket = await this.prismaServer.connectPrisma().ticket.create({
            data: {
                queue_id: queueId,
                position,
                timestamp: new Date(timestamp),
                status,
                queue_abb: queueAbb,
            },
        });
        await this.queueRepository.load();
        return ticket;
    }
    async loadTickets() {
        const tickets = await this.prismaServer.connectPrisma().ticket.findMany();
        const formattedTickets = view_models_1.TicketViewModel.mapCollection(tickets);
        server_1.io.emit('load_tickets', formattedTickets);
        return tickets;
    }
    async loadTicketsByCallSequence() {
        const tickets = await this.prismaServer.connectPrisma().ticket.findMany({
            where: {
                call_sequence: {
                    gt: 0,
                },
            },
            orderBy: {
                call_sequence: 'asc',
            },
        });
        const formattedTickets = view_models_1.TicketViewModel.mapCollection(tickets);
        server_1.io.emit('tickets_by_call_sequence', formattedTickets);
        return tickets;
    }
    async loadTicketsByStatus(status) {
        const tickets = await this.prismaServer.connectPrisma().ticket.findMany({
            where: {
                status,
            },
        });
        return tickets;
    }
    async loadTicketById(id) {
        const ticket = await this.prismaServer.connectPrisma().ticket.findUnique({
            where: {
                id,
            },
        });
        return ticket;
    }
    async removeTickets() {
        await this.prismaServer.connectPrisma().ticket.deleteMany();
        await this.queueRepository.load();
        await this.loadTickets();
        return 'Tickets removidos';
    }
    async updateTicketStatus(id, status) {
        const ticket = await this.prismaServer.connectPrisma().ticket.update({
            data: {
                status: status,
            },
            where: {
                id,
            },
        });
        await this.queueRepository.load();
        await this.loadTickets();
        return ticket;
    }
    async updateTicketServiceDesk(id, serviceDesk) {
        const ticket = await this.prismaServer.connectPrisma().ticket.update({
            data: {
                service_desk: serviceDesk,
            },
            where: {
                id,
            },
        });
        return ticket;
    }
    async updateTicketCallSequence(id, callSequence) {
        const ticket = await this.prismaServer.connectPrisma().ticket.update({
            data: {
                call_sequence: callSequence,
            },
            where: {
                id,
            },
        });
        await this.loadTicketsByCallSequence();
        return ticket;
    }
}
exports.TicketRepositoryImpl = TicketRepositoryImpl;
//# sourceMappingURL=ticket-repository.js.map