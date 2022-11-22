import { Schema, model } from "mongoose";

const FileSchema = new Schema(
  {
    author_id: { type: String, required: true },
    room_id: { type: String, required: true },
    // room_number: { type: Number, required: true },
    author_name: { type: String, required: true },
    author_email: { type: String, required: true },
    course_name: { type: String, required: true },
    content: {
      fieldname: { type: String },
      originalname: { type: String },
      encoding: { type: String },
      mimetype: { type: String },
      destination: { type: String },
      filename: { type: String },
      path: { type: String },
      size: { type: Number },
    },
  },
  { timestamps: true }
);

const FileModel = model("copment-files", FileSchema);

export default FileModel;
