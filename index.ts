import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Config from "./config/config";
import formData from "express-form-data";
import dotenv from "dotenv";

const os = require("os");
// import router from "./router/main_route";

dotenv.config();

const server = express();
const port = process.env.PORT || 4000;

// const options = {
//   uploadDir: os.tmpdir(),
//   autoClean: true,
// };

// server.use(formData.parse(options));
// // delete from the request all empty files (size == 0)
// server.use(formData.format());
// // change the file objects to fs.ReadStream
// server.use(formData.stream());
// // union the body and the files
// server.use(formData.union());

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/uploads", express.static("uploads"));
Config(server);
server.use("/", (req, res) => res.status(404).send("Not Found"));

// server.use("/", router);

server.listen(port, () => {
  console.log("Server is running...");
});
