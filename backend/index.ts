import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'
import cookieParser from 'cookie-parser'
import indexRouter from './routes/indexRoutes'
import userRouter from './routes/userRoutes'

dotenv.config();

const app = express();
const port = process.env.PORT;

app.set("trust proxy", 1);
// ['http://localhost:5173/','http://localhost:5174/']
app.use(cors({ origin: ['http://localhost:5173','http://localhost:5174'], credentials: true, optionsSuccessStatus: 200 }));
app.use(express.urlencoded({ extended: false, limit: '1kb' }));
app.use(express.json({ limit: '20kb' })) // limit the size of incoming request body and parse i.e convert string json to js object for every incoming request
app.use(cookieParser())

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => { console.log("Connected to database") })
  .catch((err) => { console.error("Unable to connect database", err) })


app.use('/', indexRouter)
app.use('/u', userRouter)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});