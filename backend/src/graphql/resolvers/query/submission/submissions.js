import Submission from "../../../../models/submission.js";
import transformSubmission from "../../merge.js";

const submissionsResolver = {
  submissions: async (args, req) => {
    //Check for authentification
    /* if (!req.isAuth) {
      throw new Error("Unauthenticated");
    } */

    try {
      const submissions = await Submission.find()
        .populate("competition")
        .populate("user");

      const sorted = submissions.sort(function (a, b) {
        var c = new Date(a.submissionDate);
        var d = new Date(b.submissionDate);
        return d - c;
      });

      return sorted;
    } catch (err) {
      throw err;
    }
    /*   try {
      return submissions.map((submission) => {
        //const transformed = transformSubmission(submission);
        console.log(submission)
        return submission;
      });
    } catch (err) {
      throw err;
    } */
  },
};

export default submissionsResolver;
