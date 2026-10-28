import express from "express";
import healthRouter from './routes/health.router.js';
import EventsController from './routes/events.router.js';

const app = express();

app.use(express.json());

app.use('/api/health', healthRouter);
app.use('/api/events', EventsController);

export default app;