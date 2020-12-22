const router = require('express').Router();
const postsCtr = require('../controllers/posts');

router.get('/', postsCtr.getPosts);  
router.post('/', postsCtr.createPost);  


module.exports = router;