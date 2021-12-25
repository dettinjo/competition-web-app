import Submission from "../../../../models/submission.js";

const deleteSubmissionResolver = {
  deleteSubmission: async (args, req) => {
    //Check for authentification
    if (!req.isAuth) {
      throw new Error("Unauthenticated");
    }

    try {
      const submission = await Submission.findById(args.submissionId);
      await Submission.deleteOne({
        _id: args.submissionId,
      });
      return submission;
    } catch (err) {
      throw err;
    }
  },
};

export default deleteSubmissionResolver;
