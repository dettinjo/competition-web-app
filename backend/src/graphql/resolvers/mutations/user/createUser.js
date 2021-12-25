import User from "../../../../models/user.js";
import bcrypt from "bcryptjs";

const createUserResolver = {
  createUser: async (args) => {
    try {
      const existingUser = await User.findOne({
        email: args.email,
      });
      if (existingUser) {
        throw new Error("User exists already.");
      }

      //Transforms the password into a hash for decryption in the database
      const hashedPassword = await bcrypt.hash(args.password, 12);

      const user = new User({
        name: args.name,
        email: args.email,
        password: hashedPassword,
        userRole: args.userRole.toString(),
        biography: args.biography,
      });

      const result = await user.save();

      console.log(result)

      //Returns null for the password for better Security.
      return {
        ...result._doc,
        password: null,
        userRole: args.userRole.toString(),
      };
    } catch (err) {
      throw err;
    }
  },
};

export default createUserResolver;
