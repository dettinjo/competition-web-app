import User from "../../../../models/user.js";

const userResolver = {
  user: async (args) => {
    try {
      const user = await User.findById(args.id).populate({
        path: "submissions",
        populate: {
          path: "user",
          path: "competition",
        },
      });

      console.log(user);
      return user;
    } catch (err) {
      throw err;
    }
  },
};

export default userResolver;
