import submission from "./submission.js";
import submissions from "./submissions.js";

const resolvers = {
  ...submission,
  ...submissions,
};

export default resolvers;
