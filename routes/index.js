// Imports express/api routers
const router = require('express').Router();
const apiRoutes = require('./api');

// Middleware
router.use('/api', apiRoutes);
router.use((req, res) => res.send('Please check the route'));

// Exports middleware routers 
module.exports = router;