import { Code } from "../models/code.js";

function create(req, res) {
  req.body.author = req.user.profile
  Code.create(req.body)
  .then(code => {
    Code.findById(Code._id)
    .populate('author')
    .then(populatedCode => {
      res.json(populatedCode)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function index(req, res) {
  Code.find({})
  .populate('author')
  .then(codes => {
    res.json(codes)
  })
}


function update(req, res) {
  Code.findById(req.params.id)
  .then(code => {
    if(code.author._id.equals(req.user.profile)) {
    Code.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .populate('author')
    .then(updatedCode => {
      res.json(updatedCode)
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

export {
  create,
  index,
  update,
}