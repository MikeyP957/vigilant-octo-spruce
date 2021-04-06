const router = require('express').Router();
const { Comment, BlogPost, User } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
try{
    const commentData = await Comment.findAll(
        {
          include: [
              {
                  model: User,
                  attributes: ['name'],
              },
              {
                model: BlogPost
              }
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
    const commentData = await Comment.findAll(
        {
          include: [
              {
                  model: User,
                  attributes: ['name'],
              },
              {
                model: BlogPost
              }
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

// router.get('', async (req, res) => {
// try{

// } catch(err) {
//     res.status(500).json(err)
// }
// })
// router.get('', async (req, res) => {
// try{

// } catch(err) {
//     res.status(500).json(err)
// }
// })

module.exports = router;