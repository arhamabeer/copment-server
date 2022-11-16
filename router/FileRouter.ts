import express from "express";
import { body, validationResult } from "express-validator";
import { SaveFile, FecthFile, DeleteFile } from "../controller/File";
const router = express.Router();

router.post(
  "/saveFile",
  [
    body("author_email", "Enter a valid email").isEmail(),
    body("room_number", "invaid room number type").isNumeric(),
  ],
  SaveFile
);
router.get("/getFile", FecthFile);
router.delete("/deleteFile", DeleteFile);

export default router;
