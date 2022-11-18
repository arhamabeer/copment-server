import express from "express";
import FileRouter from "./FileRouter";
import RoomRouter from "./RoomRouter";

const router = express.Router();

router.use("/", FileRouter);
router.use("/", RoomRouter);

export default router;
