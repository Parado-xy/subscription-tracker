import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controllers.js";
import authorize from "../middlewares/auth.middlewares.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.post("/", (req, res) => {
    res.status(200).json({
        message: "success"
    });
});

userRouter.put("/:id", (req, res) => {
    res.status(200).json({
        message: "success"
    });
});

userRouter.delete("/:id", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

export default userRouter

