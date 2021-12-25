import createUser from "./createUser.js";
import deleteUser from "./deleteUser.js";
import editUserResolver from "./editUser.js";

const resolvers = {
  ...createUser,
  ...deleteUser,
  ...editUserResolver,
};

export default resolvers;

/*
export default mergeResolvers(
    createUser,
    deleteUser,
);
*/
