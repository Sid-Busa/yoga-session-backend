import express from "express";
import Timing from "../models/Timing.js";

const router = new express.Router();

// Add data for yoga session route
router.post("/", async (req, res) => {
  const timing = new Timing(req.body);
  try {
    await timing.save();
    res.status(201).send({ status: true, timing });
  } catch (e) {
    res.status(400).send({ status: false, e });
  }
});

router.get('/:year/:month', async (req, res) => {
    const year = parseInt(req.params.year)
    const month = parseInt(req.params.month)
    try {
        const timing = await Timing.findOne({year,month})
        if (!timing) {
            return res.status(400).send({
                status:false,
                message :"This month doesn't containe any date"
            })
        }
        res.send({ status:true, timing})
    } catch (e) {
        res.status(500).send()
    }
})

const timingRouter = router;

export default timingRouter;
