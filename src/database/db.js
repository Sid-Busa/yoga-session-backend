import mongoose from "mongoose";
import {url} from "../config/config.js"

// connnect to mongodb Atlas
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("database connnection successfully");
});
