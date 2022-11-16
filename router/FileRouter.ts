import express from "express";
import { SaveFile, FecthFile } from "../controller/File";
const router = express.Router();

router.post("/saveFile", SaveFile);
router.get("/getFile", FecthFile);

export default router;
