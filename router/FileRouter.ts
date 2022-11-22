import express from "express";
import { body } from "express-validator";
import { SaveFile, FecthFile, DeleteFile } from "../controller/File";
import upload from "../middleware/index";
import { isAuth } from "../middleware/isAuth";
const router = express.Router();

router.post(
  "/saveFile",
  // isAuth,
  upload.single("content"),
  [body("author_email", "Enter a valid email").isEmail()],
  SaveFile
);
router.get("/getFile/:room_id", isAuth, FecthFile);
router.delete("/deleteFile", isAuth, DeleteFile);

export default router;
