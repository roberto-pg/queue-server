"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyTicketId = void 0;
class VerifyTicketId {
    constructor(prismaServer) {
        this.prismaServer = prismaServer;
    }
    async verifyTicketId(id) {
        const ticket = await this.prismaServer.connectPrisma().ticket.findUnique({
            where: {
                id,
            },
        });
        return ticket;
    }
}
exports.VerifyTicketId = VerifyTicketId;
//# sourceMappingURL=verify-ticket-id.js.map