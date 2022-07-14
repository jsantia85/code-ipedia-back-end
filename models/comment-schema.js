import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema ({
  comments: String, 
  author: {
    type: mongoose.Schema.Types.ObjectId, 
    ref:'Profile'
  },
})


const Comment = mongoose.model('Comment', commentSchema)

export {
  Comment
}
