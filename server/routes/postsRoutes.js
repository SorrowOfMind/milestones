const router = require('express').Router();
const postsCtr = require('../controllers/posts');

router.get('/', postsCtr.getPosts);  
router.post('/', postsCtr.createPost);
router.patch('/:id', postsCtr.editPost);
router.delete('/:id', postsCtr.deletePost);
router.patch('/:id/like', postsCtr.likePost);


module.exports = router;