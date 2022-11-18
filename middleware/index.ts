import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    cb(null, "uploads/");
  },
  filename: function (req: any, file: any, cb: any) {
    const ext = file.originalname.split(".");
    cb(null, Math.random().toString(32).slice(-7) + "." + ext[1]);
  },
});

export default multer({ storage: storage });
