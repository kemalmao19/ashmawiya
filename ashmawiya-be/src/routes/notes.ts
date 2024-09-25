import { Router } from "express";
import { getAllNotes } from "../handlers/notesHandler";

const notesRouter = Router();

// get All Notes
notesRouter.get("/", getAllNotes);

export default notesRouter;
