// const knex = require ('../connection');
const Post = require('../../models/post');

module.exports={
    index: async (req,res) => {
        // knex.select('*').from('post').asCallback((err,post) => {

        //         console.log(post);
        // })
            // const post = await Post.where('id',2).fetch();
            // console.log(post);

        res.render('index/index',{
            title : 'My App'
        });

        // res.json(post);
    }
}