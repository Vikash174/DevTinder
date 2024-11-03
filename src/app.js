const express = require("express");
const connectDb = require("./config/database");
const app = express();
const User = require("./models/user");

// Express middleware to convert json into javascript object
app.use(express.json());

//Sign up API
app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User saved successfully");
  } catch (err) {
    res.status(400).send(err);
  }
});

// Find user by email
app.get("/user", async (req, res) => {
  const emailId = req.body.emailId;
  try {
    const users = await User.findOne({ emailId });
    if (!users) {
      return res.status(404).send("User not found");
    }
    res.send(users);
  } catch (err) {
    res.status(400).send(err);
  }
});

//Get All Feed API
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send(err);
  }
});

connectDb()
  .then(() => {
    console.log("Database connected");
    app.listen(3000, () => {
      console.log("Example app listening on port 3000!");
    });
  })
  .catch((err) => {
    console.log(err);
  });
