"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketViewModel = void 0;
class TicketViewModel {
    static map(entity) {
        return {
            id: entity === null || entity === void 0 ? void 0 : entity.id,
            position: entity === null || entity === void 0 ? void 0 : entity.position,
            timestamp: entity === null || entity === void 0 ? void 0 : entity.timestamp.toISOString(),
            status: entity === null || entity === void 0 ? void 0 : entity.status,
            queueId: entity === null || entity === void 0 ? void 0 : entity.queue_id,
            queueAbb: entity === null || entity === void 0 ? void 0 : entity.queue_abb,
            serviceDesk: entity === null || entity === void 0 ? void 0 : entity.service_desk,
            callSequence: entity === null || entity === void 0 ? void 0 : entity.call_sequence,
        };
    }
    static mapCollection(entities) {
        return entities.map((entity) => TicketViewModel.map(entity));
    }
}
exports.TicketViewModel = TicketViewModel;
//# sourceMappingURL=ticket.js.map