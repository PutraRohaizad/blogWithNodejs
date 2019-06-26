const Post = require ('../../models/post')

module.exports ={

    index: async (req,res) => {
        const posts = await Post.fetchAll();
        res.render('post/index', {
            posts : posts
        });
    },

    show: async (req,res) => {
        
        const post =  await Post.where('id',req.params.id).fetch({

            withRelated: ['comments']
        }); 
        res.render('post/show',{
                post : post
        });
    },

    create: async (req,res) => {
    
        res.render('post/create');
    },

    store: async (req,res) => {
        const post = Post.forge({
            title : req.body.title,
            body : req.body.body
        });

       await post.save();

        res.redirect('/post');
    },

    edit: async (req,res) => {

        const post =  await Post.where('id',req.params.id).fetch(); 
        res.render('post/edit',{
            post:post
        });
    },

    save: async (req,res) => {

        const post =  await Post.where('id',req.params.id).fetch(); 
        // res.set('title',req.body.title);
        // res.set('body',req.body.title);

        for (attr in req.body){
            post.set(attr, req.body[attr].trim());
        }

        await post.save();

        res.redirect(`/post/${req.params.id}`);
    },

    destroy: async (req,res) => {

        const post =  await Post.where('id',req.params.id).fetch(); 
        await post.destroy();
        res.redirect('/post');

    },
    
    postComment: async (req,res) => {

        const post =  await Post.where('id',req.params.id).fetch(); 
        
        await post.comments().create({
            message: req.body.comments
        });
        res.redirect(`/post/${req.params.id}`);

    }
};