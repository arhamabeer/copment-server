import express from "express";
import { body } from "express-validator";
import { SaveFile, FecthFile, DeleteFile } from "../controller/File";
import upload from "../middleware/index";

const router = express.Router();

router.post(
  "/saveFile",
  upload.single("content"),
  [body("author_email", "Enter a valid email").isEmail()],
  SaveFile
);
router.get("/getFile/:room_id", FecthFile);
router.delete("/deleteFile", DeleteFile);

export default router;
