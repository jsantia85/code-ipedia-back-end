import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
  javascript: { type: String },
  css: { type: String },
  html: { type: String },
},{
  timestamps: true,
})

const Category = mongoose.model('Category', categorySchema)

export { Category }