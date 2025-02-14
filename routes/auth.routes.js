import { Router } from "express";

const authRouter = Router();

authRouter.post('/sign-up', (req, res) => {
    res.status(200).json({
        message: "success"
    });
});

authRouter.post("/sign-in", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

authRouter.get("/sign-out/:id", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

export default authRouter