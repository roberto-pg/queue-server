"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTicketController = void 0;
const helpers_1 = require("@src/presentation/helpers");
const view_models_1 = require("@src/presentation/view-models");
const errors_1 = require("@src/data/errors");
class AddTicketController {
    constructor(addTicket) {
        this.addTicket = addTicket;
    }
    async handle(request) {
        try {
            if (!request.queueId) {
                throw (0, errors_1.customException)('Informe o Id da fila');
            }
            if (!request.position) {
                throw (0, errors_1.customException)('Informe a posição');
            }
            if (!request.timestamp) {
                throw (0, errors_1.customException)('Informe o horário');
            }
            if (!request.status) {
                throw (0, errors_1.customException)('Informe o status');
            }
            if (!request.queueAbb) {
                throw (0, errors_1.customException)('Informe a abreviação da fila');
            }
            const ticket = await this.addTicket.call(request.queueId, request.position, request.timestamp, request.status, request.queueAbb);
            return (0, helpers_1.serverSuccess)(view_models_1.TicketViewModel.map(ticket));
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.AddTicketController = AddTicketController;
//# sourceMappingURL=add-ticket.js.map