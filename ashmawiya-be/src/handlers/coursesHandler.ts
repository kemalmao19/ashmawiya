import { Request, Response } from "express";
import prisma from "../config/prisma";
import { CreateCourse } from "../dtos/Course.dto";
import { Course, Message } from "../types/response";

export const getCourses = async (_: Request, res: Response) => {
  const courses = await prisma.course.findMany();

  res.json(courses);
};

export const getCourseById = async (
  req: Request<{ id: number }>,
  res: Response<Message | Course>,
) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }
  try {
    const course = await prisma.course.findUnique({
      where: {
        id: Number(id), // Ensure ID is converted to number for consistent comparison
      },
    });

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  } catch (error) {
    console.error("Error fetching course:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createCourse = async (
  req: Request<{}, {}, CreateCourse>,
  res: Response<{ data: Course; message: string } | Message>,
) => {
  const { title, url, videoDuration } = req.body;

  if (!title || !url || !videoDuration) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const course = await prisma.course.create({
      data: {
        title,
        url,
        videoDuration,
      },
    });
    res.status(201).json({
      message: "Course created successfully",
      data: course,
    });
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
