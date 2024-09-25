import { Request, Response } from "express";
import prisma from "../config/prisma";

export const getAllNotes = async (_: Request, res: Response) => {
  const notes = await prisma.note.findMany();
  res.status(200).json(notes);
};
