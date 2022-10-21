import { Router } from "express";
import WordsController from "../../controllers/WordsController.js";

const wordsRouter: Router = Router()

wordsRouter.post('', WordsController.createWord)
wordsRouter.get('', WordsController.getAllWords)
wordsRouter.get('/:id', WordsController.getWord)
wordsRouter.put('', WordsController.updateWord)
wordsRouter.delete('/:id', WordsController.deleteWord)

export default wordsRouter