import Submission from "../../../../models/submission.js";
import Competition from "../../../../models/competition.js";

const winnerResolver = {
  winner: async (args) => {
    try {
      const submissions = await Submission.findByID({ _id: id }).populate(
        "competition"
      );

      const competition = await Competition.findOne({
        _id: submission.competition._id,
      });

      competition.winnerSubmission.push(submission._id);
      return submissions;
    } catch (err) {
      throw err;
    }
  },
};

export default winnerResolver;
