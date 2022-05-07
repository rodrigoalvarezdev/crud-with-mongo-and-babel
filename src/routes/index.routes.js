import { Router } from "express";
const router = Router();
import {
  getAllTasks,
  editTask,
  addTask,
  updateTask,
  deleteTask,
  toggleDone,
} from "../controllers/task.controller";

router.get("/", getAllTasks);

router.get("/edit/:id", editTask);

router.post("/tasks/add", addTask);

router.post("/edit/:id", updateTask);

router.get("/delete/:id", deleteTask);

router.get("/toggleDone/:id", toggleDone);

export default router;
