// import all necessary dependancy
import express from "express";
import cors  from "cors";
import "./database/db.js";
import userRouter from "./routers/user.js";
import Timing from "./routers/timing.js";

// configure application
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors())

// configure routers
app.use("/user", userRouter);
app.use("/timing", Timing);

// running serverss
app.listen(port, () => console.log(`App is running on port ${port}`));

//mongodb+srv://sidbusa:<password>@cluster0.3mhoh.mongodb.net/test
