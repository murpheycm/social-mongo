// Imports
const { User, Thoughts, Reaction, Friends} = require("../models");
const mongoose = require("mongoose");
const connection = require("../config/connection");

// To check if connection was successful
console.log(connection);


// Seed data
const users = [
  {
    username: "Mack",
    email: "mack@gmail.com",
    thought: [],
  },
];

// Connects to server
connection.once("open", async () => {
  console.log("You are now connected!");

  // Drop existing users
  await User.deleteMany({});

  // Adds seed data to database
  await User.collection.insertMany(users);

  console.table(users);
  console.info("Database has been seeded!");
  process.exit(0);
});