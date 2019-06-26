const Post = require ('../../models/post')

module.exports ={

    index: async (req,res) => {
        const posts = await Post.fetchAll();
        
        res.json(posts);
    },

    show: async (req,res) => {
        
        const post =  await Post.where('id',req.params.id).fetch({

            withRelated: ['comments']
        }); 
        
        res.json(posts);
    },

    store: async (req,res) => {
        const post = Post.forge({
            title : req.body.title,
            body : req.body.body
        });

       await post.save();

        res.send(200);
    },

    save: async (req,res) => {

        const post =  await Post.where('id',req.params.id).fetch(); 
        // res.set('title',req.body.title);
        // res.set('body',req.body.title);

        for (attr in req.body){
            post.set(attr, req.body[attr].trim());
        }

        await post.save();

        res.send(200);
    },

    destroy: async (req,res) => {

        const post =  await Post.where('id',req.params.id).fetch(); 
        await post.destroy();
        res.send(200);
        

    },
    
    postComment: async (req,res) => {

        const post =  await Post.where('id',req.params.id).fetch(); 
        
        await post.comments().create({
            message: req.body.comments
        });
        res.send(200);

    }
};