import createSubmission from "./createSubmission.js";
import deleteSubmission from "./deleteSubmission.js";
import editSubmission from "./editSubmission.js";

const resolvers = {
  ...createSubmission,
  ...editSubmission,
  ...deleteSubmission,
};

export default resolvers;