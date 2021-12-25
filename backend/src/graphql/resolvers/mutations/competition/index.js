import createCompetition from "./createCompetition.js";
import deleteCompetition from "./deleteCompetition.js";
import { mergeResolvers } from "@graphql-tools/merge";

const resolvers = {
  ...createCompetition,
  ...deleteCompetition,
};

export default resolvers;

/*
export default mergeResolvers(
        createCompetition, 
        deleteCompetition
 );
 */
