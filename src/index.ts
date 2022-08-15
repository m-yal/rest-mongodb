import express from 'express';
import bodyParser from 'body-parser';
import sessionMiddleware from './session-middlvare/session'
import crudRouter from "./routes/v1/crud";
import authRouter from './routes/v1/auth';
import staticRouter from "./routes/static/satic";
import v2Router from "./routes/v2/router";

const app = express();
const PORT: number = 3005;

app.use(bodyParser.json());
app.use(sessionMiddleware);

/* ===================== routing ===================== */
app.use("/api/v2/router", v2Router);
app.use("/api/v1/items", crudRouter);   
app.use("/api/v1", authRouter);
app.use("/", staticRouter);
/* ===================== routing ====================== */

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));