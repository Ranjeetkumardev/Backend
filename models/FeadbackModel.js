import mongoose from "mongoose";

const feadBackSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  query: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Feadback", feadBackSchema);
