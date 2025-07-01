import express from "express";
import { authRouter } from "./auth";

export const routes = express.Router();

routes.use(authRouter);
