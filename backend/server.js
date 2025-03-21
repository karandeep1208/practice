// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.error(err));

// app.use("/users", require("./routes/userroutes.js"));

// app.listen(8800, () => {
//   console.log("Server running on http://localhost:8800");
// });


require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

app.use("/tasks", require("./routes/userroutes"));

app.listen(8800, () => {
  console.log("Server running on http://localhost:8800");
});