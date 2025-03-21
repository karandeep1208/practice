// const express = require("express");
// const User = require("../models/usermodels");
// const router = express.Router();

// // Add a new user
// router.post("/", async (req, res) => {
//   try {
//     const { name, email } = req.body;
//     const newUser = new User({ name, email });
//     await newUser.save();
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(500).json({ error: "Error creating user" });
//   }
// });

// // Retrieve all users
// router.get("/", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(500).json({ error: "Error fetching users" });
//   }
// });

// module.exports = router;

const express = require("express");
const Task = require("../models/usermodels");
const router = express.Router();

// Add a new task
router.post("/", async (req, res) => {
  try {
    const { title } = req.body;
    const newTask = new Task({ title });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: "Error creating task" });
  }
});

// Retrieve all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Error fetching tasks" });
  }
});

module.exports = router;