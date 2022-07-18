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

function index(req, res) {
  Post.find({})
  .populate('author')
  .then(posts => {
    res.json(posts)
  })
}

function createComment (req, res) {
  Post.findById(req.params.id)
  .then(post => {
    post.comments.push(req.body)
    comments.save()
    .then(() => {
      res.redirect(`/posts/${post._id}`)
    })
  })
}


function update(req, res) {
  Post.findById(req.params.id)
  .then(post => {
    if(post.author._id.equals(req.user.profile)) {
    Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .populate('author')
    .then(updatedPost => {
      res.json(updatedPost)
    })
  } else {
    res.status(401).json({err: "Not authorized!"})
  }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function createCategory(req,res) {
  Post.findById(req.params.id)
  .then(post => {
    post.category.push(req.body)
    post.save()
    .then(posts => {
      res.json(posts)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({err: err.errmsg})
    })
  })
}

export {
  create,
  index,
  update,
  createComment
}