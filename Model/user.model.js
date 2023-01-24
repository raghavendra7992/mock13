const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const UserSchema = new mongoose.Schema(
  {
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
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = mongoose.model("raghav", UserSchema);

module.exports = User;