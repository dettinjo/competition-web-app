import User from "../../../../models/user.js";

const deleteUserResolver = {
  deleteUser: async (args, req) => {
    //Check for authentification
    if (!req.isAuth) {
      throw new Error("Unauthenticated");
    }
    
    try {
      const user = await User.findById(args.userId);
      await User.deleteOne({
        _id: args.userId,
      });
      return user;
    } catch (err) {
      throw err;
    }
  },
};

export default deleteUserResolver;
