import Submission from "../../../../models/submission.js";
import transformSubmission from "../../merge.js";

const editSubmissionResolver = {
  editSubmission: async (args, req, res) => {
    //Check for authentification
    /* if (!req.isAuth) {
      throw new Error("Unauthenticated");
    } */
    console.log(args.rating);
    const submission = await Submission.findOneAndUpdate(
      { _id: args.id },
      {
        submissionBody: args.submissionBody,
        submissionDate: args.submissionDate,
        rating: args.rating,
      },
      { upsert: true }
    );

    try {
      return submission;
    } catch (err) {
      throw err;
    }
  },
};

export default editSubmissionResolver;
