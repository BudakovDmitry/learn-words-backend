import { Application } from 'express';
import wordsRouter from './api/wordsRouter.js';

class AppRouter {
  constructor(private app: Application) {}
  init() {
    this.app.get('/', (_req, res) => {
      res.send('API Running');
    });
    this.app.use('/api/words', wordsRouter);
  }
}

export default AppRouter;