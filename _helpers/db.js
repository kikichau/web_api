const config = require('config.json');
const mongoose = require('mongodb+srv://kikichau:00000000@web-api-4azln.mongodb.net/test?retryWrites=true');
mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};