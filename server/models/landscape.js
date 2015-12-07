var mongoose = require('mongoose');

module.exports = mongoose.model('Landscape', {
    title: String,
    content: String,
    author: String,
    image: Array,
    category: String,
    fromSite: String,
    fromSiteName: String,
    createTime: Date,
    type: String,
    sha1: String
});
