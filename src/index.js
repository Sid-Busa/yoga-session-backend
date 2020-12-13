// import all necessary dependancy
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import "./database/db.js";
import userRouter from "./routers/user.js";
import Timing from "./routers/timing.js";

// configure application
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

// configure routers
app.use("/user", userRouter);
app.use("/timing", Timing);

// running serverss
app.listen(port, () => console.log(`App is running on port ${port}`));

//mongodb+srv://sidbusa:<password>@cluster0.3mhoh.mongodb.net/test
