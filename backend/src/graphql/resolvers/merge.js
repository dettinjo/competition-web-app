import Submission from "../../models/submission.js";
import User from "../../models/user.js";

const getSubmissions = async (submissionIDs) => {
  try {
    const submissions = await Submission.find({
      _id: {
        $in: submissionIDs,
      },
    });
    return submissions.map((submission) => {
      return {
        ...submission._doc,
        _id: submission.id,
        user: getUser.bind(this, submission.user._id),
      };
    });
  } catch (err) {
    throw err;
  }
};

const getUser = async (userID) => {
  try {
    const user = await User.findById(userID);
    return {
      ...user._doc,
      submissions: getSubmissions.bind(this, user._doc.submissions),
    };
  } catch (err) {
    throw err;
  }
};

const getCompetition = async (competitionId) => {
  try {
    const competition = await Competition.findById(competitionId);
    return {
      ...competition._doc,
    };
  } catch (err) {
    throw err;
  }
};

const transformSubmission = (submission) => {
  return {
    ...submission._doc,
    user: getUser.bind(this, submission._doc.user),
    submissionDate: new Date(submission._doc.submissionDate).toISOString(),
    rating: submission.rating,
  };
};

export default transformSubmission;
