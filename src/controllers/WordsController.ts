import { Response, Request } from 'express'
import WordsService from '../services/WordsService.js'

class WordsController {
  async createWord(req: Request, res: Response) {
    try {
      const word = await WordsService.createWord(req.body)
      return res.json(word)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async getAllWords(req: Request, res: Response) {
    try {
      const words = await WordsService.getAllWords()
      return res.json(words)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async getWord(req: Request, res: Response) {
    try {
      const word = await WordsService.getWord(req.params.id)
      return res.json(word)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async updateWord(req: Request, res: Response) {
    try {
      const updateWord = await WordsService.updateWord(req.body)
      return res.json(updateWord)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async deleteWord(req: Request, res: Response) {
    try {
      const word = await WordsService.deleteWord(req.params.id)
      return res.json(word)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

export default new WordsController()