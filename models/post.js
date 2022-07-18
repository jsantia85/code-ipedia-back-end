import mongoose from 'mongoose'
const Schema = mongoose.Schema

const commentSchema = new mongoose.Schema ({
  comments: String, 
  author: {
    type: mongoose.Schema.Types.ObjectId, 
    ref:'Profile'
  },
})

const categorySchema = new mongoose.Schema({
  category: { type: String },
},{
  timestamps: true,
})


const postSchema = new Schema({
  title: {type: String, required: true},
  Code: {type: mongoose.Schema.Types.ObjectId, ref:"Code"},
  author: {type: mongoose.Schema.Types.ObjectId, ref:"Profile"},
  comments: [commentSchema],
  category:[categorySchema]
},{
  timestamps: true,
})

const Post = mongoose.model('Post', postSchema)

export { Post }
