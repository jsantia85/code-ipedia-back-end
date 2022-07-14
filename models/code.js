import mongoose from 'mongoose'

const codeSchema = new mongoose.Schema({
  code: String,
  caption: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
},{
  timestamps: true,
})

const Code = mongoose.model('Code', codeSchema)

export { Code }