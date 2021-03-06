// import all necessary dependancy
import express from "express";
import cors  from "cors";
import "./database/db.js";
import userRouter from "./routers/user.js";
import Timing from "./routers/timing.js";

// configuration 
const port = process.env.PORT || 3001;
const app = express();
app.use(express.json());
//core settings
let corsOption = {
    origin: '*',
    optionsSuccessStatus: 200 
}
app.use(cors(corsOption))

// configure routers
app.use("/user", userRouter);
app.use("/timing", Timing);

// running serverss
app.listen(port, () => console.log(`App is running on port ${port}`));
