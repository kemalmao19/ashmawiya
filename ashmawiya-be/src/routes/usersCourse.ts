import { Router } from "express";
import {
  userCourseAll,
  userCourseByUser,
  userCourseUpdate,
  userCourseAdd,
} from "../handlers/userCourseHandler";

const usersCourseRouter = Router();

usersCourseRouter.get("/", userCourseAll);

usersCourseRouter.get("/user/:id", userCourseByUser);

usersCourseRouter.post("/", userCourseAdd);

usersCourseRouter.put("/:id", userCourseUpdate);

export default usersCourseRouter;
