import express from "express";
import healthRouter from './routes/health.router.js';

const app = express();

// agregar rutas
app.use(express.json());

app.use('/api/health', healthRouter);

export default app;