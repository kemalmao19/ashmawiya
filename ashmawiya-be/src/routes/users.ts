import { Router } from "express";
import { getUsers, getUserById, registerUser, loginUser, updateUser } from "../handlers/usersHandler";

const usersRouter = Router();

// Get all users
usersRouter.get("/", getUsers)

// Get single user by id
usersRouter.get("/:id", getUserById)

// register
usersRouter.post("/", registerUser)

// login
usersRouter.post("/login", loginUser)

// update user
usersRouter.put("/:id", updateUser)


export default usersRouter;