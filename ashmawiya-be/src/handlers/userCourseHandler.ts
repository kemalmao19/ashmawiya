import { Request, Response } from "express";
import prisma from "../config/prisma";
import { UserCourse, Message } from "../types/response";

export const userCourseByUser = async (req: Request<{ userId: number }>, res: Response<UserCourse[] | Message>) => {
    const { userId } = req.params;
    try {
        const userCourse = await prisma.userCourse.findMany({
            where: {
                userId: Number(userId),
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