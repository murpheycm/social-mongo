const router = require('express').Router();
const usernameRoutes = require('./');
const emailRoutes = require('./');
const thoughtsRoutes = require('./');
const friendsRoutes = require('./');

router.use('/username', usernameRoutes);
router.use('/email', emailRoutes);
router.use('/thoughts', thoughtsRoutes);
router.use('/friends', friendsRoutes);

module.exports = router;