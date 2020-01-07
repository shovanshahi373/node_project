const mongoose = require('mongoose');

const connect = function connect() {
    mongoose.connect('mongodb://localhost:27017/myapp', {
        useNewUrlParser: true
    });
    return mongoose.connection;
}

module.exports = connect;