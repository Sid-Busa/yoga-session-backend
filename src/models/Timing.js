import mongoose from "mongoose";

const timeSchema = new mongoose.Schema(
  {
    month: {
      type: Number,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
      trim: true,
    },
    dates: [
      {
        date: String,
        data : [
          {
            time: String,
            duration: Number,
            session_name: String,
            price: Number,
          },
        ]
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Timing = mongoose.model("Timing", timeSchema);

export default Timing;
