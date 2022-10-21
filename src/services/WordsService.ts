import { WordType } from '../types'
import Word from '../models/Word.js';

class WordsService {
  async createWord(word: WordType) {
    const createWord = await Word.create(word)
    return createWord
  }

  async getAllWords() {
    const words = await Word.find();
    return words
  }

  async getWord(id: string) {
    if(!id) {
      throw new Error('Id is not found')
    }

    const word = await Word.findById(id)
    return word
  }

  async updateWord(word: WordType) {
    if(!word._id) {
      throw new Error('Id is not found')
    }
    const updatedWord = await Word.findByIdAndUpdate(word._id, word, {
      new: true
    })

    return updatedWord
  }

  async deleteWord(id: string) {
    if(!id) {
      throw new Error('Id is not found')
    }

    const word = await Word.findByIdAndDelete(id)
    
    return word
  }
}

export default new WordsService();