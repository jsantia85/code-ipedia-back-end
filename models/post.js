import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
  category: { type: String },
},{
  timestamps: true,
})

const postSchema = new mongoose.Schema({
  title: {type: String, required: true},
  Code: {type: mongoose.Schema.Types.ObjectId, ref:"Code"},
  author: {type: mongoose.Schema.Types.ObjectId, ref:"Profile"},
  comments: {type: mongoose.Schema.Types.ObjectId, ref:"Comments"},
  categories:[categorySchema]
},{
  timestamps: true,
})

const Post = mongoose.model('Post', postSchema)

export { Post }
