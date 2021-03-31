const router = require('express').Router();
const userRoutes = require('./UserRoutes');
const BlogPostRoutes = require('./BlogPostRoutes');
const CommentRoutes = require('./CommentRoutes');

router.use('/users', userRoutes);
router.use('/blogpost', BlogPostRoutes);
router.use('/comments', CommentRoutes);

module.exports = router;
