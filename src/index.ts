import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import AppRouter from './routes/index.js'

const PORT = 5000

const DB_URL =
  'mongodb+srv://budakovdmitry:1122334455@cluster0.zqbjuh4.mongodb.net/?retryWrites=true&w=majority';

const app = express()
const router = new AppRouter(app)


app.use(cors())
app.set('port', process.env.PORT || PORT)
app.use(express.json())

router.init()

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
    console.log('MongoDB Connected...');
  } catch (error) {
    console.log(error);
  }
}

startApp()