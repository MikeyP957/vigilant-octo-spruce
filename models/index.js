const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');
const CommentTag = require('./CommentTag')

//Blog Post belongs to a user, and a user has many blog posts, linked by user_id on blogPost
BlogPost.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(BlogPost, {
    foreignKey: 'user_id',
});


//A blog post can have many comments, which are linked with the commentTag, CommentTag has a user_id and blogPost_id
BlogPost.belongsToMany(Comment, {
    through: {
        model: CommentTag,
    },
    onDelete: 'CASCADE',
});




module.exports = {User, BlogPost, Comment, CommentTag};