"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptRoute = void 0;
const adaptRoute = (controller) => {
    return async (request, response) => {
        const requestBody = {
            ...(request.body || {}),
            ...(request.params || {}),
        };
        const httpResponse = await controller.handle(requestBody);
        response.status(httpResponse.statusCode).json(httpResponse.data);
    };
};
exports.adaptRoute = adaptRoute;
//# sourceMappingURL=express-router.js.map