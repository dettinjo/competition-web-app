import competition from "./competition.js";
import submission from "./submission.js";
import user from "./user.js";
import { buildSchema } from "graphql";
import { mergeTypeDefs } from "@graphql-tools/merge";

const typeDefs = [competition, submission, user];

const schema = buildSchema(`
    ${competition}
    ${submission}
    ${user}
`);

export default schema;

//export default mergeTypeDefs(typeDefs);
