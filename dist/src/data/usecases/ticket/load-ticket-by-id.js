"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadTicketByIdUseCaseImpl = void 0;
const errors_1 = require("@src/data/errors");
class LoadTicketByIdUseCaseImpl {
    constructor(ticketRepository, validate) {
        this.ticketRepository = ticketRepository;
        this.validate = validate;
    }
    async call(id) {
        const ticketId = await this.validate.verifyTicketId(id);
        if (!ticketId) {
            throw (0, errors_1.customException)('O ticket não existe');
        }
        const ticket = await this.ticketRepository.loadTicketById(id);
        return ticket;
    }
}
exports.LoadTicketByIdUseCaseImpl = LoadTicketByIdUseCaseImpl;
//# sourceMappingURL=load-ticket-by-id.js.map