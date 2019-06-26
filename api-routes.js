const router = require ('express').Router();
const postController = require ('./controllers/api-v1/postController');

router.get('/post',postController.index);
router.get('/post/:id',postController.show);
router.delete('/post/:id',postController.destroy);

router.post('/post',postController.store);
router.put('/post/:id',postController.save);
router.post('/post/:id/comments',postController.postComment);


module.exports = router;