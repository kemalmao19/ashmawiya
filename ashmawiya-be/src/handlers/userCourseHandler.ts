import { Request, Response } from "express";
import prisma from "../config/prisma";
import { UserCourse, Message } from "../types/response";

export const userCourseAll = async (req: Request, res: Response) => {
    try {
        const userCourse = await prisma.userCourse.findMany()
        res.json(userCourse)
    } catch (error) {
        console.log(error)
    }
}

export const userCourseByUser = async (req: Request<{ id: number }>, res: Response<UserCourse[] | Message>) => {
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
                    }
                },
                course: {
                    select: {
                        id: true,
                        title: true,
                        videoDuration: true,
                    }
                }
            }
        });
        res.json(userCourse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const userCourseAdd = async (req: Request<{},{}, {userId: number, courseId: number}>, res: Response<Message>) => {
    const { userId, courseId } = req.body;
    if (!userId || !courseId) {
        return res.status(400).json({ message: "User ID or Course ID is required" });
    }
    
    try {
        const userCourse = await prisma.userCourse.create({
            data: {
                userId: Number(userId),
                courseId: Number(courseId),
            }
        })
        res.status(201).json({message: "User Course added successfully"})
    } catch (error) {
        console.log(error)
    }
}

export const userCourseUpdate = async (req: Request<{ id: number }, {}, {isComplete: boolean}>, res: Response) => {
    const {id} = req.params
    const {isComplete} = req.body

    if (!id) {
        return res.status(400).json({ message: "ID is required" });
    }
    try {
        const userCourse = await prisma.userCourse.update({
            where: {
                id: Number(id),
            },
            data: {
                isComplete
            }
        })
        res.status(201).json(userCourse)
    } catch (error) {
        console.log(error)
    }
}