const router = require('express').Router();
const userRoutes = require('./userRoutes');
const BlogPostRoutes = require('./blogPostRoutes');
// const CommentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/blogPosts', BlogPostRoutes);
// router.use('/comments', CommentRoutes);

module.exports = router;
