import {Router} from 'express'

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
    res.status(200).json({
        message: "success"
    })
});

subscriptionRouter.post("/", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

subscriptionRouter.put("/", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

subscriptionRouter.delete("/", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

export default subscriptionRouter