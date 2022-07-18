import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new mongoose.Schema ({
  comments: String, 
  author: {
    type: mongoose.Schema.Types.ObjectId, 
    ref:'Profile'
  },
})

const postSchema = new Schema({
  title: {type: String, required: true},
  Category: {type: mongoose.Schema.Types.ObjectId, ref:"Category"},
  Code: {type: mongoose.Schema.Types.ObjectId, ref:"Code"},
  author: {type: mongoose.Schema.Types.ObjectId, ref:"Profile"},
  comments: [commentSchema]
},{
  timestamps: true,
})

const Post = mongoose.model('Post', postSchema)

export { Post }
