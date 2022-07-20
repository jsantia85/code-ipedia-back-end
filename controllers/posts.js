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
  req.body.author = req.user.profile
  Post.findById(req.params.id)
  .then(post => {
    post.comments.push(req.body)
    post.save()
    .then(() => {
      res.json(post)
    })
  })
  .catch(err => {
    console.log(err)
  })
}



async function update(req, res) {
  console.log(req.body)
  try {
    const post = await Post.findById(req.params.id)
    if (post.author._id.equals(req.user.profile)) {
      const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('author')
      res.json(updatedPost)
    } else {
      res.status(401).json({ err: "Not authorized!" })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ err: err.errmsg })
  }
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

function deleteOne(req, res) {
  Post.findById(req.params.id)
  .then(post => {
    if (post.author._id.equals(req.user.profile)){
      Post.findByIdAndDelete(post._id)
      .then(deletedPost => {
        res.json(deletedPost)
      })
    } else {
      res.status(401).json({err: "Not authorized"})
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

export {
  create,
  index,
  update,
  createComment,
  createCategory,
  deleteOne as delete,
}