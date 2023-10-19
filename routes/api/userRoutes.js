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
router
  .route("/:id")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

// ROUTE: localhost:3001/api/users/:id/friends/:friendId
router.route("/:id/friends/:friendId").post(addFriend).delete(deleteFriend);

// Exports routers
modeule.exports = router;