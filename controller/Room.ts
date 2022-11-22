import { validationResult } from "express-validator";
import RoomModel from "../model/RoomModel";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
import dotenv from "dotenv";

dotenv.config();

// SAVE
const SaveRoom = async (req: any, res: any) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    try {
      let room_id =
        Math.random().toString(36).substr(2, 3) +
        Math.random().toString(36).substr(2, 3) +
        Math.random().toString(36).substr(2, 4);
      const db_data = await RoomModel.findOne({ _id: room_id });

      if (db_data) {
        res.status(408).send({ msg: "Request Timeout, please try again" });
      } else {
        let hash_pass = await bcrypt.hash(req.body.password, 12);
        let data_obj = {
          author_email: req.body.author_email,
          password: hash_pass,
          _id: room_id,
        };
        let data = new RoomModel({ ...data_obj });
        let response = await data.save();
        res.status(200).send({ msg: "New Room Added!", result: response });
      }
    } catch (error) {
      console.log(error);

      res.status(500).send({ msg: "Internal Server Error", error: error });
    }
  }
};

// ENTER
const EnterRoom = async (req: any, res: any) => {
  try {
    const check = await RoomModel.findOne({ _id: req.body.room_id });
    if (!check) {
      res.status(404).send({ msg: "Room Not Found" });
    } else {
      let hash_pass = await bcrypt.compare(req.body.room_code, check.password);
      if (hash_pass) {
        const def_key =
          process.env.JWT_STR ||
          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
        var token = jwt.sign({ user: req.body.room_id }, def_key);
        res.status(200).send({
          msg: "Authentication successful",
          result: true,
          token: token,
        });
      } else {
        res.status(401).send({ msg: "Wrong Credentials", result: false });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Internal Server Error", error: error });
  }
};

export { SaveRoom, EnterRoom };
