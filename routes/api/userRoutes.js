// Imports
const router = require('express').Router();

// userController.js function imports
const {

} = require('../../controllers/userController');

// ROUTE: http://localhost:3001/api/users
router.route("/").get(getUsers).post(createUser);

// ROUTE: http://localhost:3001/api/users/:id
router
  .route("/:id")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

// ROUTE: http://localhost:3001/api/users/:id/friends/:friendId
router.route("/:id/friends/:friendId").post(addFriend).delete(deleteFriend);

// Exports
modeule.exports = router;