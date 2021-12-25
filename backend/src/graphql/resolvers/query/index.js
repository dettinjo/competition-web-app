import competition from "./submission/index.js";
import submission from "./competition/index.js";
import user from "./user/index.js";


const resolvers = {
  ...competition,
  ...submission,
  ...user,
};

export default resolvers;

