import { Request, Response, Router } from "express";
import { userCourseAll, userCourseByUser, userCourseUpdate, userCourseAdd } from "../handlers/userCourseHandler";
import prisma from "../config/prisma";

const usersCourseRouter = Router();

usersCourseRouter.get("/", userCourseAll);

usersCourseRouter.get("/user/:id", userCourseByUser);

usersCourseRouter.post("/", userCourseAdd);

usersCourseRouter.put("/:id", userCourseUpdate);

export default usersCourseRouter;