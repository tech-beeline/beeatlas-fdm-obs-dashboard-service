import express from "express";
import { addApiRoutes } from "./routes/index.mjs";
import {
    errorHandler,
    promMiddleware,
    promMetrics
} from "./middleware/index.mjs";

const API_PORT = process.env.API_PORT ?? 3000;

const app = express();

app.use(express.json({ limit: '50mb'}));
app.use(express.urlencoded({ extended: true }));

app.get("/actuator/prometheus", promMetrics);
app.use(promMiddleware);

addApiRoutes(app);

//app.use(errorHandler);


process.on('SIGINT', () => {
    console.log(`Stop listen and exit`);
    server.close();
})

const server = app.listen(API_PORT, () => {
    console.log(`Start listen on port ${API_PORT}`)
})

