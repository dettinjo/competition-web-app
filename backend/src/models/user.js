import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  submissions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Submission",
    },
  ],
  userRole: {
    type: String,
    required: true,
  },
  biography: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
