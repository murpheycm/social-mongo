// Importing routers
const router = require('express').Router();

// userController.js function imports
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

// ROUTE: localhost:3001/api/users
router.route("/").get(getUsers).post(createUser);

// ROUTE: localhost:3001/api/users/:id
router.route("/:id").get(getUser);
router.route("/:id").put(updateUser);
router.route("/:id").delete(deleteUser);

// ROUTE: localhost:3001/api/users/:id/friends/:friendId
// router.route("/:id/friends/:friendId").post(addFriend);
// router.route("/:id/friends/:friendId").delete(deleteFriend);

// Exports routers
module.exports = router;