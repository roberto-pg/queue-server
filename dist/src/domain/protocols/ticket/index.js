"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./add-ticket"), exports);
__exportStar(require("./load-tickets"), exports);
__exportStar(require("./load-tickets-by-call-sequence"), exports);
__exportStar(require("./remove_tickets"), exports);
__exportStar(require("./load-tickets-by-status"), exports);
__exportStar(require("./update-ticket-status"), exports);
__exportStar(require("./update-ticket-service-desk"), exports);
__exportStar(require("./update-ticket-call-sequence"), exports);
__exportStar(require("./load-ticket-by-id"), exports);
//# sourceMappingURL=index.js.map