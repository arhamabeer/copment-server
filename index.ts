import express from "express";
import cors from "cors";
import Config from "./config/config";
// import router from "./router/main_route";

const server = express();
const port = 5000;

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true, limit: "50mb" }));

Config(server);

// server.use("/", router);

server.listen(port, () => {
  console.log("Server is running...");
});