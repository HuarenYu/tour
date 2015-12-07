var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/happy');

module.exports = {
    User: require('./user'),
    Landscape: require('./landscape')
}
