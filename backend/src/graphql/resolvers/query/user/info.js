import User from "../../../../models/user.js";

class UserNotFound extends Error {
  constructor(userID) {
    super(`User with id "${userID}" does not exist.`);
  }
}

const infoResolver = {
  me: async (args, req) => {
    const userID = req.userId;
    const userRole = req.userRole;
    const user = await User.findOne({ _id: userID });

    if (!user) {
      throw new UserNotFound(userID);
    }

    const info = {
      name: user.name,
      email: user.email,
      userRole: userRole,
    };

    return { name: user.name, email: user.email, userRole: userRole };
  },
};

export default infoResolver;
