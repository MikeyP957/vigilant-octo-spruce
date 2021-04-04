const User = require('./User');
const BlogPost = require('./BlogPost');
// const Comment = require('./Comment');


//Blog Post belongs to a user, and a user has many blog posts, linked by user_id on blogPost
BlogPost.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(BlogPost, {
    foreignKey: 'user_id',
});

// Comment.belongsTo(User, {
//     foreignKey: 'user_id'
// });

// User.hasMany(Comment, {
//     foreignKey: 'user_id',
// });

//A blog post can have many comments, which are linked with the commentTag, CommentTag has a user_id and blogPost_id
// Comment.belongsTo(BlogPost, {
//     foreignKey: 'blogPost_id',
// });

// BlogPost.hasMany(Comment, {
//     foreignKey: 'blogpost_id'
// });



//add Comment model
module.exports = {User, BlogPost};