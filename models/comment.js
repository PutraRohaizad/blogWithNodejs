const Bookshelf = require('../connection');

const comment = Bookshelf.Model.extend({
    tableName: 'comments',
    hasTimestamps: true
   
});

module.exports = Bookshelf.model('Comment', comment);