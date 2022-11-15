import { Schema, model } from "mongoose";

const FileSchema = new Schema(
  {
    _id: { type: String, required: true },
    author_id: { type: String, required: true },
    room_id: { type: String, required: true },
    room_number: { type: Number, required: true },
    author_name: { type: String, required: true },
    author_email: { type: String, required: true },
    course_name: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const FileModel = model("copment-files", FileSchema);

export default FileModel;
