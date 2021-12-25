import Jwt from "jsonwebtoken";
import User from "../../../../models/user.js";
import Bcrypt from "bcryptjs";

const privateKey = "OwFgZYgS0BGsjcAV9ClNCnGvVj3t0OD9";

class UserNotFound extends Error {
  constructor(email) {
    super(`User with email "${email}" does not exist.`);
  }
}
class InvalidPassword extends Error {
  constructor(email) {
    super(`Invalid password for user "${email}"`);
  }
}

const loginResolver = {
  login: async (args) => {
    const user = await User.findOne({ email: args.email });

    if (!user) {
      throw new UserNotFound(email);
    }

    const isEqual = await Bcrypt.compare(args.password, user.password);
    if (!isEqual) {
      throw new InvalidPassword(email);
    }

    const token = Jwt.sign(
      { userId: user.id, userRole: user.userRole, email: user.email },
      privateKey
    );

    const authData = {
      userId: user.id,
      userRole: user.userRole,
      token: token,
      email: user.email,
    };

    return authData;
  },
};

export default loginResolver;
