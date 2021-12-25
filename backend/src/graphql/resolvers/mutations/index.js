import competition from "./competition/index.js";
import submission from "./submission/index.js";
import user from "./user/index.js";
import { mergeResolvers } from "@graphql-tools/merge";

const resolvers = {
  ...competition,
  ...submission,
  ...user,
};

export default resolvers;

//export default mergeResolvers(competition, submission, user);
