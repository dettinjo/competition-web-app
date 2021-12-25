import Submission from "../../../../models/submission.js";
import transformSubmission from "../../merge.js";

const submissionResolver = {
  submission: async (args, req) => {
    //Check for authentification
    /*if (!req.isAuth) {
      throw new Error("Unauthenticated");
    }
    */
    const submission = await Submission.findById(args.id)
      .populate("competition")
      .populate("user");
    try {
      return transformSubmission(submission);
    } catch (err) {
      throw err;
    }
  },
};

export default submissionResolver;
