import express from "express";
import User from "../models/user.js";

const router = new express.Router();

// Register user route
router.post("/", async (req, res) => {
    console.log("request", req.body)
  // Find if user is already exist or not 
  try {
    const checkUserisExist = await User.findOne({ email: req.body.email });
    if (checkUserisExist) {
      return res.status(400).send({ status:false, error: "email is already exist" });
    }
  } catch (e) {
    console.log(e);
  }

  // Add new user
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send({ status: true, user });
  } catch (e) {
    res.status(400).send({ status: false, e });
  }
});

const userRouter = router;

export default userRouter;
