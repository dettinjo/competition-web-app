import mutations from "./mutations/index.js";
import queries from "./query/index.js";
import { mergeResolvers } from "@graphql-tools/merge";


const resolvers = {
  ...mutations,
  ...queries,
};

export default resolvers;

//export default mergeResolvers(resolvers);
