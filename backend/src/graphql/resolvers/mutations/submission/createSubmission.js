import Submission from "../../../../models/submission.js";
import User from "../../../../models/user.js";
import transformSubmission from "../../merge.js";

const createSubmissionResolver = {
  createSubmission: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated");
    }

    const userID = req.userId;

    const submission = new Submission({
      submissionBody: args.submissionBody,
      submissionDate: new Date(args.submissionDate).toString(),
      user: userID,
      competition: args.competition,
    });

    let createdSubmission;

    try {
      const result = await submission.save();

      //createdSubmission = transformSubmission(result);

      const user = await User.findById(userID);

      if (!user) {
        throw new Error("User not found.");
      }

      user.submissions.push(result._id);
      await user.save();

      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};

export default createSubmissionResolver;
