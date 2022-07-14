import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  title: {type: String, required: true},
  Category: {type: mongoose.Schema.Types.ObjectId, ref:"Category"},
  Code: {type: mongoose.Schema.Types.ObjectId, ref:"Code"},
  author: {type: mongoose.Schema.Types.ObjectId, ref:"Profile"},
  comments: {type: mongoose.Schema.Types.ObjectId, ref:"Comments"}
},{
  timestamps: true,
})

const Post = mongoose.model('Post', postSchema)

export { Post }
