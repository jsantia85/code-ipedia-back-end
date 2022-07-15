import { Post } from '../models/post.js'

function create(req, res) {
  req.body.author = req.user.profile
  Post.create(req.body)
  .then(post => {
    Post.findById(post._id)
    .populate('author')
    .then(populatedPost => {
      res.json(populatedPost)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

export {
  create
}