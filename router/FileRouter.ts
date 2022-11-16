import express from "express";
import { SaveFile, FecthFile, DeleteFile } from "../controller/File";
const router = express.Router();

router.post("/saveFile", SaveFile);
router.get("/getFile", FecthFile);
router.delete("/deleteFile", DeleteFile);

export default router;
