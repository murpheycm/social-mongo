// Imports router
const router = require('express').Router();

// thoughtsController.js function imports
const {
    getThoughts,
    getThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
  } = require("../../controllers/thoughtsController");

// ROUTE: http://localhost:3001/api/thoughts
router.route("/").get(getThoughts).post(createThought);

// ROUTE: http://localhost:3001/api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);

// ROUTE: http://localhost:3001/api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// ROUTE: http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);


// Exports routers
module.exports = router;