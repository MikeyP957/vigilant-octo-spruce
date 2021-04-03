const router = require('express').Router();
const { BlogPost, User} = require('../models');
const withAuth = require('../utils/auth');

//get all the blog posts on the /api route if logged in
router.get('/', async (req, res) => {
    try{
        const blogPostData = await BlogPost.findAll({
            include: [
                {
                  model: User,
                  attributes: ['name'],
                },
            ],
        });

        // Serialize data so the template can read it
        const blogPost = blogPostData.map((blogP) =>
        blogP.get({ plain: true }));
        //pass that data and session flag into template
        res.render('homepage', {
            blogPost,
            logged_in: req.session.logged_in
        });
    } catch(err) {
        res.status(500).json(err);
    }
})
//this gets a single blog post by id, must be logged in
router.get('/blogPost/:id', async (req, res) => {
    try{
        const blogPostData = await BlogPost.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                //and comments here..?
            ]
        });

        const blogPost = blogPostData.get({plain : true});

        res.render('blogPost', {
            ...blogPost,
            logged_in: req.session.logged_in
        });
    } catch(err) {
        res.status(500).json(err);
    }
})

//this gets the user profile, with authorization and hides password
router.get('/profile', withAuth, async (req, res) => {
    try{
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: BlogPost }],
        });

        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: true
        })
    } catch(err) {
        res.status(500).json(err);
    }
})
router.get('/login', async (req, res) => {
    // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
})

module.exports = router;