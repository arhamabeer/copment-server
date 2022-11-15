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

export default SaveFile;
