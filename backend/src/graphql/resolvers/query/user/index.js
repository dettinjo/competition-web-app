import infoResolver from "./info.js";
import login from "./login.js";
import user from "./user.js";

const resolvers = {
  ...login,
  ...user,
  ...infoResolver,
};

export default resolvers;
