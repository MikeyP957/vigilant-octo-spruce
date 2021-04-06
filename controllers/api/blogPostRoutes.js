const router = require('express').Router();
const { BlogPost, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    
  try{
    const blogPostData = await BlogPost.findAll(
      {
        include: [
            {
                model: User,
                attributes: ['name']
            },
        ]
      }
    );
    res.status(200).json(blogPostData);
  } catch(err) {
    res.status(500).json(err)
  }
  
  });
  
  // get one BlogPost
  router.get('/:id', async (req, res) => {

    try{
      const blogPostData = await BlogPost.findByPk(req.params.id, {
        include: [
            {
              model: User,
              attributes: ['name']
            
            },
        ]
      });
      if (!blogPostData) {
        res.status(404).json({message: 'There is no BlogPost with that Id.'})
      }
  
      res.status(200).json(blogPostData)
    } catch(err) {
      res.status(500).json(err)
    }
  });

router.post('/', withAuth, async (req, res) => {
    try{
        const newBlogPost = await BlogPost.create({
            ...req.body,
            user_id: req.session.user_id,
        })

        res.status(200).json(newBlogPost);
    } catch(err) {
        res.status(400).json(err);
    }
})
router.delete('/:id', withAuth, async (req, res) => {
    try{
        const blogPostData = await BlogPost.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        })

        if(!blogPostData) {
            res.status(404).json({message: 'There is no post found with this id!'});
            return;
        } 

        res.status(200).json(blogPostData);
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;