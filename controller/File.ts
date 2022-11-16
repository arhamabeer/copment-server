import { response } from "express";
import FileModel from "../model/FileModel";

// SAVE
const SaveFile = async (req: any, res: any) => {
  try {
    let data = new FileModel({ ...req.body });
    // await FileModel.findOneAndUpdate(
    //   { data },
    //   {},
    //   {
    //     upsert: true,
    //     new: true,
    //   }
    // ).exec();

    let response = await data.save();
    res.status(200).send({ msg: "New File Added!", result: response });
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error", error: error });
  }
};

// FETCH
const FecthFile = async (req: any, res: any) => {
  try {
    let response = await FileModel.find({ room_id: req.body.room_id });
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
