const router = require('express').Router();
const { Comment, BlogPost, User } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
  try{
      const commentData = await Comment.findAll(
          {
            include: [
                {model: User},
                {model: BlogPost}
            ]
          }
        );
        res.status(200).json(commentData);
  } catch(err) {
      res.status(500).json(err)
    }
})
router.get('/:id', async (req, res) => {
  try{
    const commentData = await Comment.findByPk(req.params.id,
        {
          include: [
              {model: User},
              {model: BlogPost}
          ]
        }
      );

    if (!commentData) {
      res.status(404).json({message: 'There is no comment with that Id.'})
    }

    res.status(200).json(commentData);
  } catch(err) {
    res.status(500).json(err)
    }
})
router.post('/', withAuth, async (req,res) => {
  try{
      const newComment = await Comment.create({
        //spread
        ...req.body,
        user_id: req.session.user_id,
      })
  res.status(200).json()
  } catch(err) 
  {
    res.status(500).json(err)
  }
})


module.exports = router;