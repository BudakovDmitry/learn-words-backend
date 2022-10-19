import { Application } from 'express';

class AppRouter {
  constructor(private app: Application) {}
  init() {
    this.app.get('/', (_req, res) => {
      res.send('API Running');
    });
    // this.app.use('/api/goals', goalsRouter);
    // this.app.use('/api/transactions', transactionsRouter);
  }
}

export default AppRouter;