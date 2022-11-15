import express from "express";
import SaveFile from "../controller/File";
const router = express.Router();

router.post("/saveFile", SaveFile);

export default router;
