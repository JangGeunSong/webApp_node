const express = require('express');
const router = express.Router();

//Posts Model
const Post = require('../../models/postlist');

// @route  GET api/posts
// @desc   GET All Posts
// @access Public

router.get('/post', (request, response) => {
    Post.find()
    .sort({ date : -1 })
    .then(posts => response.json(posts))
});

module.exports = router;