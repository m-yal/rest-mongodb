"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const session_1 = __importDefault(require("./session-middlvare/session"));
const crud_1 = __importDefault(require("./routes/v1/crud"));
const auth_1 = __importDefault(require("./routes/v1/auth"));
const satic_1 = __importDefault(require("./routes/static/satic"));
const router_1 = __importDefault(require("./routes/v2/router"));
const cors_1 = __importDefault(require("./cors-middleware/cors"));
const app = (0, express_1.default)();
const PORT = 3005;
/* middleware */
app.use(cors_1.default);
app.use(body_parser_1.default.json());
app.use(session_1.default);
/* routing */
app.use("/api/v2/router", router_1.default);
app.use("/api/v1/items", crud_1.default);
app.use("/api/v1", auth_1.default);
app.use("/", satic_1.default);
/* server start */
app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));
