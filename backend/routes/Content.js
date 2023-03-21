import express from "express";
import dotenv from "dotenv";
import {
  contentHistory,
  createContent,
} from "../controllers/content.controller.js";

dotenv.config();

const contentRouter = express.Router();

contentRouter.get("/history", async (req, res) => {
  let contentHistoryData = await contentHistory(req);
  res.json(contentHistoryData);
});

contentRouter.post("/create", async (req, res) => {
  await createContent(req, req.body?.data);
  res.status(200).send({ msg: "Successfully created content" });
});

export default contentRouter;
