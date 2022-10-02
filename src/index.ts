import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const PORT = 5000

const app = express()

app.use(cors())
app.set('port', process.env.PORT || PORT)
app.use(express.json())

async function startApp() {
  try {
    // await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
    // console.log('MongoDB Connected...');
  } catch (error) {
    console.log(error);
  }
}

startApp()