import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

app.get("/api/users", async (req, res) => {
  const users = await prisma.user.findMany();

  res.json(users);
});

app.post("/api/users", async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    },
  });
  //result and messages
  res.json(user); 
});

app.listen(port, () => {
  console.log("server running on localhost:" + port);
});
