import { Request, Response, Router } from "express";
import { userCourseAll, userCourseByUser, userCourseUpdate } from "../handlers/userCourseHandler";
import prisma from "../config/prisma";

const usersCourseRouter = Router();

usersCourseRouter.get("/", userCourseAll);

usersCourseRouter.get("/user/:id", userCourseByUser);

usersCourseRouter.put("/:id", userCourseUpdate);

export default usersCourseRouter;