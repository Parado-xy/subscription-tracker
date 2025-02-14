import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
    res.status(200).json({
        message: "success"
    });
});

userRouter.get("/:id", (req, res) => {
    res.status(200).json({
        message: "success"
    });
});

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

