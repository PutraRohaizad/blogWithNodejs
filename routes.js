const router = require ('express').Router();
const postController = require ('./controllers/web/postController');

router.get('/', require('./controllers/web/indexController').index);
router.get('/post',postController.index);
router.get('/post/create',postController.create);
router.get('/post/:id',postController.show);
router.get('/post/:id/edit',postController.edit);
router.get('/post/:id/delete',postController.destroy);

router.post('/post',postController.store);
router.post('/post/:id/edit',postController.save);
router.post('/post/:id/comments',postController.postComment);


module.exports = router;