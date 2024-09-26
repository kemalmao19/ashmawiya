import { Request, Response } from "express";
import prisma from "../config/prisma";
import { UserCourse, Message } from "../types/response";

export const userCourseAll = async (_: Request, res: Response) => {
    try {
        const userCourse = await prisma.userCourse.findMany();
        res.json(userCourse);
    } catch (error) {
        console.log(error);
    }
};

export const userCourseByUser = async (
    req: Request<{ id: number }>,
    res: Response<UserCourse[] | Message>,
) => {
    const { id } = req.params;
    try {
        const userCourse = await prisma.userCourse.findMany({
            where: {
                userId: Number(id),
            },
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                    },
                },
                course: {
                    select: {
                        id: true,
                        title: true,
                        videoDuration: true,
                    },
                },
            },
        });
        res.json(userCourse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const userCourseAdd = async (
    req: Request<{}, {}, { userId: number; courseId: number }>,
    res: Response<Message>,
) => {
    const { userId, courseId } = req.body;
    if (!userId || !courseId) {
        return res
            .status(400)
            .json({ message: "User ID or Course ID is required" });
    }

    try {
        const userCourse = await prisma.userCourse.create({
            data: {
                userId: Number(userId),
                courseId: Number(courseId),
            },
        });
        res.status(201).json({ message: "User Course added successfully" });
    } catch (error) {
        console.log(error);
    }
};

export const userCourseUpdate = async (
    req: Request<{ id: number }, {}, { data: Record<string, any> }>,
    res: Response,
) => {
    const { id } = req.params;
    const { data } = req.body;

    if (!id) {
        return res.status(400).json({ message: "ID is required" });
    }

    try {
        // Check if the record exists
        const existingUserCourse = await prisma.userCourse.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!existingUserCourse) {
            return res
                .status(404)
                .json({ message: `UserCourse with ID ${id} not found` });
        }

        // Update the record if it exists
        const updatedUserCourse = await prisma.userCourse.update({
            where: {
                id: Number(id),
            },
            data: {
                ...data,
            },
        });

        return res.status(200).json(updatedUserCourse);
    } catch (error) {
        console.error("Error updating UserCourse:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
