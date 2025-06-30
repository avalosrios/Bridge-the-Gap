import express from "express";
import { authRouter } from "./auth.route";

export const routes = express.Router();

routes.use(authRouter);