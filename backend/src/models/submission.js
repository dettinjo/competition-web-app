import mongoose from "mongoose";
const { Schema } = mongoose;

const submissionSchema = new Schema({
  submissionBody: {
    type: String,
    required: true,
  },
  submissionDate: {
    type: Date,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  competition: {
    type: Schema.Types.ObjectId,
    ref: "Competition",
    required: true,
  },
  rating: {
    type: Number,
  },
  winner: {
    type: Boolean,
  },
});

const Submission = mongoose.model("Submission", submissionSchema);

export default Submission;
