const router = require('express').Router();
const postsCtr = require('../controllers/posts');

router.get('/', postsCtr.getPosts);  
router.post('/', postsCtr.createPost);
router.patch('/:id', postsCtr.editPost);


module.exports = router;