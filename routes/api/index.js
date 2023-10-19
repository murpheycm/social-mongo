// Imports router and routes
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');

// Middleware
router.use('/username', userRoutes);
router.use('/thoughts', thoughtsRoutes);

// Exports routers
module.exports = router;