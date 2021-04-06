const sequelize = require('../config/connection');
const {User, BlogPost, Comment} = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json')

const seedDatabase = async () => {
    await sequelize.sync({force : true});

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
      });

    for (const BPost of blogData) {
        await BlogPost.create({
            ...BPost
        })
    }
    for (const cmt of commentData) {
        await Comment.create({
            ...cmt
        })
    }

    process.exit(0);
}

seedDatabase();