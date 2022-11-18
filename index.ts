import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Config from "./config/config";
import formData from "express-form-data";
const os = require("os");
// import router from "./router/main_route";

const server = express();
const port = 5000;

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

Config(server);

// server.use("/", router);

server.listen(port, () => {
  console.log("Server is running...");
});
