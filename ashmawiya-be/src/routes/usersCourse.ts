import { Router } from "express";
import { userCourseByUser } from "../handlers/userCourseHandler";

const usersCourseRouter = Router();

usersCourseRouter.get("/:userId", userCourseByUser);

export default usersCourseRouter;