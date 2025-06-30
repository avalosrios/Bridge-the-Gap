import express from "express";
import { authRouter } from "./auth.routes";

export const routes = express.Router();

routes.use(authRouter);
