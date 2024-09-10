import './config/loadEnv';
import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import {sign} from "jsonwebtoken";
import Cookies from 'js-cookie'

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.get("/api/users", async (req, res) => {
  const users = await prisma.user.findMany();

  res.json(users);
});

app.post("/api/users", async (req, res) => {
  const { username, email, password } = req.body;
  try {

    // Check if the user already exists
    const existingMail = await prisma.user.findUnique({
      where: { email },
    });
    const existingUser = await prisma.user.findUnique({
      where: { username },
    })


    if (existingUser || existingMail) {
      return res
        .status(409)
        .json({ message: "User already exists with this email/username." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    // Send the user data back
    return res.status(201).json({
      message: "User created successfully.",
      user,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Failed to create user" });
  }
});

app.post("/api/users/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res.status(400).json({ errorMessage: "Username and password are required" });
    }
    
    const findUser = await prisma.user.findUnique({
      where: {
        username,
      },
    });
  
    if (!findUser) {
      return res.status(404).json({ errorMessage: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, findUser.password);

    if (!isMatch) {
      return res.status(401).json({ errorMessage: "Incorrect password" });
    }

    const payload = {
      id: findUser.id,
      username: findUser.username,
      email: findUser.email,
    };

    const secret = process.env.JWT_SECRET;

    const token = sign(payload, secret as string, { expiresIn: "7d" });
    Cookies.set("token", token);

    return res.status(200).json({
      data: payload,
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Failed to login" });
  }
});

app.listen(port, () => {
  console.log("server running on localhost:" + port);
});

export default app;
