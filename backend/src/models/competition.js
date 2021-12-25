import mongoose from "mongoose";
const { Schema } = mongoose;

const competitionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  winnerSubmission: {
    type: Schema.Types.ObjectId,
    ref: "Submission",
  },
});

const Competition = mongoose.model("Competition", competitionSchema);

export default Competition;
