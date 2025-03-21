// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
// });

// module.exports = mongoose.model("User", UserSchema);

const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

module.exports = mongoose.model("Task", TaskSchema);