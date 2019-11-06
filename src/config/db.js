import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:5001/tasks", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
