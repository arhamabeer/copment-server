import mongoose from "mongoose";
import router from "../router/mainRouter";
import { Express } from "express";
import dotenv from "dotenv";

dotenv.config();

// const db_uri = process.env.MDB_URI || "";

export default function Config(server: Express) {
  process.env.MDB_URI &&
    mongoose
      .connect(process.env.MDB_URI, { dbName: "Copment-server" })
      .then(() => console.log("db connected...."))
      .catch((e) => console.log("db not connected...", e));

  server.use("/", router);
}
