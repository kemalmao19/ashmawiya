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