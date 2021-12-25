import Submission from "../../../../models/submission.js";
import transformSubmission from "../../merge.js";

const rateSubmissionResolver = {
  rateSubmission: async (args, req, res) => {
    //Check for authentification
    /* if (!req.isAuth) {
      throw new Error("Unauthenticated");
    } */

    const submission = await Submission.findOneAndUpdate(
      { _id: args.id },
      { rating: args.rating },
      { upsert: true },
    );

    try {
      return transformSubmission(submission);
    } catch (err) {
      throw err;
    }
  },
};

export default rateSubmissionResolver;
