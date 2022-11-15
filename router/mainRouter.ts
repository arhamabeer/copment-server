import express from "express";
import FileRouter from "./FileRouter";

const router = express.Router();

router.use("/", FileRouter);

export default router;
