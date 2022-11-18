import { Schema, model } from "mongoose";

const RoomSchema = new Schema(
  {
    _id: { type: String, required: true },
    author_email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const RoomModel = model("copment-rooms", RoomSchema);

export default RoomModel;
