import User from "../../../../models/user.js";

const editUserResolver = {
  editUser: async (args) => {
    try {
      const oldWinner = await User.findOneAndUpdate(
        { winner: true },
        { winner: false }
      );

      await oldWinner.save();

      const user = await User.findById.findOneAndUpdate(
        { _id: args.id },
        {
          winner: args.winner,
        },
        { upsert: true }
      );

      await user.save();
      return user;
    } catch (err) {
      throw err;
    }
  },
};

export default editUserResolver;
