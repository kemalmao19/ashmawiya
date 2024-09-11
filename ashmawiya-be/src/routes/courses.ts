import { Router } from "express";
import { getCourses, getCourseById, createCourse } from "../handlers/coursesHandler";

const coursesRouter = Router();

// Get all courses
coursesRouter.get("/", getCourses)

// Get single course by id
coursesRouter.get("/:id", getCourseById)

// create course
coursesRouter.post("/", createCourse)

// edit course
// coursesRouter.put("/:id", async (req, res) => {});

export default coursesRouter;