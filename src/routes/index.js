import { Router } from "express";

import usersController from "../controllers/UserController";
import loginController from "../controllers/LoginController";
import tasksController from "../controllers/TasksController";

/* Middlewares */
import authMiddlwares from "../middlewares/auth";

const router = Router();

/**
 * Users
 */
router.post("/users", usersController.store);

/**
 * Login
 */
router.post("/login", loginController.show);

/**
 * Tasks
 */
router.get("/tasks", authMiddlwares, tasksController.index);
router.get("/tasks/:id", authMiddlwares, tasksController.show);
router.post("/tasks", authMiddlwares, tasksController.store);
router.put("/tasks", authMiddlwares, tasksController.update);
router.delete("/tasks/:id", authMiddlwares, tasksController.destroy);

module.exports = router;
