import mongoose from "mongoose";
// const url = process.env.MONGODB_URL;
const url="mongodb+srv://sidbusa:Sid_Busa123@cluster0.3mhoh.mongodb.net/yoga?retryWrites=true&w=majority"
console.log("url", url);
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
