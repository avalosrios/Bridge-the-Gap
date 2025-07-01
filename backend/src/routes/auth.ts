import express from "express";
import { PrismaClient, Prisma } from "@prisma/client";
import { hashPassword, verifyPassword } from "./argon";

export const authRouter = express.Router();
const prisma = new PrismaClient();

authRouter.post("/api/auth/register", async (req, res) => {
  //Check the username for uniqness
  const { username, password } = req.body;
  const user = await prisma.user.findUnique({ where: { username } });
  if (user === null) {
    //Hash password and write user to db
    const hash = await hashPassword(password);
    const newUser = await prisma.user.create({
      data: {
        username,
        password: hash,
      },
    });
    res.json(newUser);
  } else {
    res.status(400).json({ message: "Username already exists" });
  }
});

authRouter.post("/api/auth/login", async (req, res) => {
  //Check if username exists
  //Check if password matches stored password
});

authRouter.post("/api/auth/logout", (req, res) => {
  //destroy session
});
