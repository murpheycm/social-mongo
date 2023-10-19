const { connect, connection } = require('mongoose');
// To create the DB
const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-mongoDB';
// MogoDB <==> Mongoose
connect(connectionString);

module.exports = connection;