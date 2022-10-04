import { Schema, model } from "mongoose"

const usersScheme = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
    },
    first_name: {
      type: String,
      trim: true,
    },
    last_name: {
      type: String,
      trim: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
    rfc: {
      type: String,
      unique: true,
      required: [true, "Please enter your rfc"],
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)
const usersMongo = model("users", usersScheme)
export { usersMongo }
