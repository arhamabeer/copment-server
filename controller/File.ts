import { validationResult } from "express-validator";
import FileModel from "../model/FileModel";

// SAVE
const SaveFile = async (req: any, res: any) => {
  console.log(req.body, "REQ");

  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    console.log(req.file, "Upload");
    // try {
    //   let room_id =
    //     Math.random().toString(36).substr(2, 3) +
    //     Math.random().toString(36).substr(2, 3) +
    //     Math.random().toString(36).substr(2, 4);
    //   let author_id = req.body.author_email;
    //   let data = new FileModel({ ...req.body, author_id, room_id });
    //   console.log({ ...req.body, author_id, room_id });
    //   //   let response = await data.save();
    //   //   res.status(200).send({ msg: "New File Added!", result: response });
    // } catch (error) {
    //   console.log(error);
    //   res.status(500).send({ msg: "Internal Server Error", error: error });
    // }
  }
};

// FETCH
const FecthFile = async (req: any, res: any) => {
  console.log(req.params);
  try {
    let response = await FileModel.find({ room_id: req.params.room_id });
    res.status(200).send({ msg: "File Fetched!", result: response });
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error", error: error });
  }
};

// DELETE
const DeleteFile = async (req: any, res: any) => {
  const { file_id, author_id } = req.body;
  try {
    let response = await FileModel.deleteOne({
      author_id: author_id,
      _id: file_id,
    });
    res.status(200).send({ msg: "File Deleted!", result: response });
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error", error: error });
  }
};

export { SaveFile, FecthFile, DeleteFile };
