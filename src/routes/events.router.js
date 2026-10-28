import { Router } from "express";

import { EventsController } from "../controllers/events.controllers.js";

const router = Router();

router.get('/', EventsController.getAll);

export default router;
