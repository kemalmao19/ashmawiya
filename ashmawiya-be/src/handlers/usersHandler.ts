import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import prisma from "../config/prisma";
import { RegisterUserDto, LoginUserDto } from "../dtos/User.dto";
import { Message, User } from "../types/response";

export const getUsers = async (req: Request, res: Response<User[]>) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      email: true,
    },
  });

  res.json(users);
};

export const getUserById = async (req: Request<{id: number}>, res: Response<Message | User>) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id), // Ensure ID is converted to number for consistent comparison
      },
      select: {
        id: true,
        username: true,
        email: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    // Log error for debugging
    res.status(500).json({ message: "Internal server error" });
  }
};

export const registerUser = async (req: Request<{}, {}, RegisterUserDto>, res: Response<Message>) => {
  const { username, email, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Check if the user already exists
    const existingMail = await prisma.user.findUnique({
      where: { email },
    });

    if (existingMail) {
      return res
        .status(409)
        .json({ message: "User already exists with this email/username." });
    }

    // Hash the password
    const hashedPassword: string = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    // Send the user data back
    return res.status(201).json({
      message: "User created successfully."
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Failed to create user" });
  }
};

export const loginUser = async (req: Request<{},{}, LoginUserDto>, res: Response<{data: User, message: string} | Message>) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const findUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!findUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, findUser.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const payload = {
      id: findUser.id,
      username: findUser.username,
      email: findUser.email,
    };

    const secret = process.env.JWT_SECRET as string;

    const token = sign(payload, secret, { expiresIn: "7d" });

    return res.status(200).json({
      data: payload,
      message: "Login successful"
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Failed to login" });
  }
};

export const updateUser = async (req: Request<{id: number}, {}, User&{password: string} >, res: Response<Message>) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }
  try {
    const hashedPassword: string = await bcrypt.hash(password, 10);

    const user = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    // res.json(user);
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    // Log error for debugging
    res.status(500).json({ message: "Internal server error" });
  }
};
