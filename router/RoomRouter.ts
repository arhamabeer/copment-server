import express from "express";
import { body } from "express-validator";
import { EnterRoom, SaveRoom } from "../controller/Room";
import upload from "../middleware/index";

const router = express.Router();

router.post(
  "/saveRoom",
  [
    body("author_email", "Enter a valid email").isEmail(),
    body("password", "Password must contain atleast 6 characters"),
  ],
  SaveRoom
);
router.post("/enterRoom", EnterRoom);

export default router;
