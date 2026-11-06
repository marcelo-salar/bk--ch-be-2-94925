import { Router } from "express";

import { SessionController } from "../controllers/session.controller.js"; 

const router = Router();

router.post('/register', SessionController.register);

export default router;