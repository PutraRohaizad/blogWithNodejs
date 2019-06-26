const Bookshelf = require('../connection');

require('./comment');

const Post = Bookshelf.Model.extend({
    tableName: 'post',
    hasTimestamps: true,
    comments:function(){
        return this.hasMany('Comment');
    }
});

module.exports = Bookshelf.model('Post', Post);