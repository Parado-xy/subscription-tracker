import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controllers.js";

const authRouter = Router();

authRouter.post('/sign-up', signUp);

authRouter.post("/sign-in", signIn);

authRouter.get("/sign-out/:id", signOut);

export default authRouter