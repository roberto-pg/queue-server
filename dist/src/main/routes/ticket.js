"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("@src/main/adapters");
const ticket_1 = require("@src/main/factories/ticket");
const update_ticket_status_1 = require("@src/main/factories/ticket/update-ticket-status");
exports.default = (router) => {
    router.post('/create-ticket', (0, adapters_1.adaptRoute)((0, ticket_1.addTicketController)()));
    router.get('/tickets', (0, adapters_1.adaptRoute)((0, ticket_1.loadTicketsControllers)()));
    router.get('/tickets-by-call-sequence', (0, adapters_1.adaptRoute)((0, ticket_1.loadTicketsByCallSequenceController)()));
    router.get('/tickets-by-status/:status', (0, adapters_1.adaptRoute)((0, ticket_1.loadTicketsByStatusController)()));
    router.get('/ticket-by-id/:id', (0, adapters_1.adaptRoute)((0, ticket_1.loadTicketByIdController)()));
    router.patch('/update-status', (0, adapters_1.adaptRoute)((0, update_ticket_status_1.updateTicketStatusController)()));
    router.patch('/update-service-desk', (0, adapters_1.adaptRoute)((0, ticket_1.updateTicketServiceDeskController)()));
    router.patch('/update-call-sequence', (0, adapters_1.adaptRoute)((0, ticket_1.updateTicketCallSequenceController)()));
    router.delete('/remove-tickets', (0, adapters_1.adaptRoute)((0, ticket_1.removeTicketsController)()));
};
//# sourceMappingURL=ticket.js.map