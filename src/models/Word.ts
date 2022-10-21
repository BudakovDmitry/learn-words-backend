import mongoose from 'mongoose';

const wordSchema = new mongoose.Schema(
  {
    word: {
      type: String,
      required: true,
    },
    wordTranslate: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
)

const Word = mongoose.model('Word', wordSchema)

export default Word